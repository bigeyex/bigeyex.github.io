---
layout: post
title: iOS - Customizing Interface Builder
---

Interface Builder in XCode could be fun - you can extend UIKit and add extra attributes with IB_DESIGNABLE. This extends your ability to make things like button with corner radius directly when building your xib files and ease the pain in designing interfaces.

You can have strings, booleans, integer, float nubmer, localized string (!), rectangle, point, size, color, range shown as fiels in designer's interface. It will be better to have dropdowns or enums, but don't Google - that's just not included.

It's usage is simply like this:

{% highlight c %}

#import <UIKit/UIKit.h>

IB_DESIGNABLE
@interface YURoundedButton : UIButton

@property IBInspectable CGFloat cornerRadius;

@end

{% endhighlight %}

Note:

* IB_DESIGNABLE - mark this class as having custom attributes; 
* IBInspectable - meaning this property can be set directly in Interface Builder.

When there are "errors" in your IBDesignable source files (mostly importing issues because IBDesignable files are compiled independently), it will generate annoyable warnings like this (but you program compiles and runs well):

> Ignoring user defined runtime attribute for key path " ... " on instance of " ... "

To troubleshot this problem, switch to "Report Navigator" and see whether there are any errors in "Interface Builder" group:
![Screenshot]({{ site.url }}/assets/reportnavigator.png)

Here are a list of customized uikit classes I used in my project. they resides in a "ExtendedUIKit" folder in my project and I use them whenever I want.

- [FlipImageView](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-mbflipimageview-h) : Create a imageview having two image as states;
- [TypeWriterLabel](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-mbtypewriterlabel-m) : A "UILable" that has a typewrite effect whenever you change its text
- [RoundedShadowedView](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-mbroundedshadowedview-h) : A "UIView" allow you to set its shadow and border radius
- [SharedWebview](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-mbsharedwebview-h) : A shared version of UIWebview, useful when you enter/exit a view controller with webviews frequently and cause memory leaks.
- [DashRoundedBorderView](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-yudashedroundedborderview-h) : A UIView that can have dashed and rounded borders.
- [RoundedButton](https://gist.github.com/bigeyex/a7e86ab88236b7b5a830#file-yuroundedbutton-h) : Just a rounded button.