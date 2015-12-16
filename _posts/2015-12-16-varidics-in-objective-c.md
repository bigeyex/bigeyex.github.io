---
layout: post
title: Tame variable arguments (variadic methods/varargs) in Objective-c
---

It's tempting to build a method works like NSString's +stringWithFormat: - take variable arguments without having to pass them through an array. The benefits are clear - it's easier to use, more concise, and less prone to errors.

## Getting Started

Basically it works the same way with C language. You can find a document in [Mac Developer Library](https://developer.apple.com/library/mac/qa/qa1405/_index.html). Here is a sample program (from that document) modified and explained.

{% highlight c %}
- (void) appendObjects:(id) firstObject, ...
{
  id eachObject;
  va_list argumentList;                 // create a variable list
  va_start(argumentList, firstObject);  // "firstObject" is the last "fixed" object
  while (eachObject = va_arg(argumentList, id)){} // "id" is the type (anytype in this case) of the argument. You can change this according to your need.
    // do anything with (id)eachObject
  va_end(argumentList);
  }
}
{% endhighlight %}

In this code snippet, *va_list* creates an variable list, *va_start* specifies where variable arguments starts from, and arguments are retrived by *va_arg*. The variable argument retriving process ends with *va_end*.

## A Trap

There is one thing you should keep in mind: the arguments in the code sample above must end with *nil*! *va_arg* makes no effort in counting how many arguments you have, nor does it put an arbitrary terminal in your list. There is one way to get around this. I will talk about it at the end of this article.

## Passing va_list around

You can pass va_list to another method. Actually most methods taking variable arguments in iOS libraries provide alternative methods taking such arguments. For example, you can use your own variable arguments to create a formatted string, as shown in this [StackOverflow Post](http://stackoverflow.com/questions/2391780/how-to-pass-variable-arguments-to-another-method):

{% highlight c %}
-(void) anotherMethod:(NSString *)a, ...
{
    va_list ap;
    va_start(ap, a);

    [self anotherMethod:a withParameters:ap]; // passing va_list to another method

    va_end(ap);
}

-(void) anotherMethod:(NSString *)a withParameters:(va_list)valist 
{
    // use NSString's initializer with va_list
    NSLog([[[NSString alloc] initWithFormat:a arguments:valist] autorelease]);
}
{% endhighlight %}

In this way, libraries like CocoaLumberjack can provides methods like DDLogInfo using the same syntax as NSLog or stringWithFormats:. 

## Let Your Compiler Check Your Format

The method signature of stringWithFromat looks like this:

{% highlight c %}
+ (instancetype)stringWithFormat:(NSString *)format, ... NS_FORMAT_FUNCTION(1,2);
{% endhighlight %}

That *NS\_FORMAT_FUNCTION(1,2)* means this is a "format function" like those in stringWithFormat: or *printf* in C, the first argument is a format string, and variable arguments starts at the 2nd argument. The compiler will count how many %d, %f, and %@'s in your format string (first argument), and check whether you have correct arguments in your variable arguments. If not, the compiler will produce a warning/error.

You may also put a *NS\_REQUIRES_NIL_TERMINATION* at the end of your method. This will require the compiler check whether an method call ends with nil and give you errors if not. This helps you avoid the "trap" I mentioned above.

## Work Around the Trap with Macros

What if I don't want put a nil at every method call? I tries to think how stringWithFormat: did this - I didn't put a nil every time I want to format a string.

The thing is stringWithFormat: actually knows how many arguments I have, by counting how many %d, %f's it has. Is there a way to use variable argument without a format string, and without a (unnecessary) nil?

The only way is through Macros. Obj-c allow Macros to take variable arguments and (directly) translate it into another syntax form in the program.

For example, I want to write a method to evaluate functions with variable arguments in my UIWebview. I have a macro like this:

{% highlight c %}
// variable arguments(...) are expanded in __VA_ARGS__
#define YU_TELL_WEBVIEW(owner, ...) [owner tellWebview:@[__VA_ARGS__]]
{% endhighlight %}

This thing will convert a call like:

{% highlight c %}
YU_TELL_WEBVIEW(self.webview, @"hello", "world");
{% endhighlight %}

into:

{% highlight c %}
[self.webview tellWebview:@[@"hello", @"world"]];
{% endhighlight %}

In this way, I can just use the NSArray literal as a normal NSArray in my implementation. Problem solved.


