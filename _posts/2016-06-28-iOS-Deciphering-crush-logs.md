---
layout: post
title: iOS - Deciphering Crush Logs
---

Reading crush logs is a natural part of iOS development. For those APPs that are already on the App store, reading crush logs should be easy - Apple has already printed stack backtraces beautifully. The only thing you need is keeping an archive of each build. The problem is those mailed by testers - they often came in hex codes, Like this one:

{% highlight c %}
Last Exception Backtrace:
0   CoreFoundation                  0x18352adb0 __exceptionPreprocess + 124
1   libobjc.A.dylib                 0x182b8ff80 objc_exception_throw + 56
2   CoreFoundation                  0x18352acf8 +[NSException raise:format:] + 120
3   Foundation                      0x183e7aff0 -[NSData(NSData) subdataWithRange:] + 252
4   BluetoothTest                   0x10005057c 0x100040000 + 66940
5   BluetoothTest                   0x10004b580 0x100040000 + 46464
6   BluetoothTest                   0x1000488b4 0x100040000 + 34996
7   BluetoothTest                   0x100048a64 0x100040000 + 35428
8   CoreFoundation                  0x1834ccdfc __CFNOTIFICATIONCENTER_IS_CALLING_OUT_TO_AN_OBSERVER__ + 20
9   CoreFoundation                  0x1834cc61c _CFXRegistrationPost +
....
{% endhighlight %}

This project is named "BluetoothTest", and it's obvious that the key to the problem lies in this line:

{% highlight c %}
4   BluetoothTest                   0x10005057c 0x100040000 + 66940
{% endhighlight %}

The question is to find out where it is. The following shell command will do this job:

{% highlight c %}
atos -arch arm64 -o [The executable of your product, inside the .app bundle] -l [base address] [shift address] -printHeader
{% endhighlight %}

I usually drag the path of the executable from the finder. Here is the command I used:

{% highlight c %}
atos -arch arm64 -o /Users/wangyu/Library/Developer/Xcode/Archives/2016-05-17/BluetoothTest\ 5-17-16\,\ 11.07\ AM.xcarchive/Products/Applications/BluetoothTest.app/BluetoothTest -l 0x100040000 0x10005057c -printHeader
{% endhighlight %}

Then it will produce something like the following, which is exactly what I need.

{% highlight c %}
-[MBRadarFinderView dismissView] (in BluetoothTest) (MBRadarFinderView.m:272)
{% endhighlight %}
