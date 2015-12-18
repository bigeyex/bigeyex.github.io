---
layout: post
title: iOS - have fun with categories
---

Categories is an awesome feature in iOS. You can "open up" an existing class and add methods or properties into that class. The basic form looks like this:

File: UIColor+HexString.h

{% highlight c %}
#import <Foundation/Foundation.h>

@interface UIColor (HexString)

+ (UIColor *) colorFromHexString:(NSString *)hexString;

@end
{% endhighlight %}

File: UIColor+HexString.m

{% highlight c %}
#import "UIColor+HexString.h"

@implementation UIColor (HexString)
+ (UIColor *) colorFromHexString:(NSString *)hexString {
    // code to implement this method
}
@end

{% endhighlight %}

## Tips of Using Categories

Of course there are pitfalls in over-using categories. it may lead to hard-to-read code, and your collaborators may get startled when they see stuff that shouldn't be there (eg. there's a "getAllCustomers" in NSArray). The primary danger is that if your choose category instead of subclassing, you may risk overwriting existing methods accidently and deprive subclasses from using methods that were overwritten by categories (see this [StackOverflow Post](http://stackoverflow.com/questions/11346020/when-are-categories-bad-dangerous)).

Therefore subclassing is nearly always preferable than categories, but categories has their places. In my opinion, the acid test of whether to use categories is:

- it is a standard practices, such as NSManagedObject;
- it is a "missing function" who "should be there" in a system class, such as colorFromHexString:

## A List of Useful Categories

Here are a list of gists of categories I find useful:

- [BackgroundBlurEffectUIView](https://github.com/kissrobber/BackgroundBlurEffectUIView/blob/master/Classes/UIView%2BBackgroundBlurEffect.m): make a blurry "frosted glass" effect on the background in your UI View (actually I'll prefer subclassing for this job).
- [UIImage+Resize](https://gist.github.com/bigeyex/e5a2ba7a27930415ac86): I forgot where I copied this. Resize an UIImage.
- [UIImage+Tint](https://gist.github.com/bigeyex/2d23202b6fdae3dfe004): Tint an UIImage.
- [UIColor+HexString](https://gist.github.com/bigeyex/200abf121aaad7d3440e): Create an UIColor from a "CSS Color Code" style Hex String.
