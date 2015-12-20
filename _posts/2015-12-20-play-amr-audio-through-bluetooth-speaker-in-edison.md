---
layout: post
title: Maker - Play AMR Audio through Bluetooth Speaker in Intel Edison
---

It happens in a hackation about Intel Edison: I want to play an audio clip uploaded through Wechat (a WhatsApp-like mobile messaging service). [This article](https://software.intel.com/en-us/articles/play-audio-from-your-intel-edison-via-bluetooth-using-advanced-audio-distribution-profile) explains well how to play audio through bluetooth speakers using gStream. The problem lies in the audio format - mobile apps use heavily compressed formats (such as AMR or SPEEX), and they are not supported by gStream by default.

A search through gStream Document shows there's a amr decoder plugin. But unfortunately it's not built in Edison. Here's a list of alternative methods I surveyed:

* Aplay. Aplay CAN play amr files, but only USB audio cards are supported. [There's an article](https://tl00.wordpress.com/2015/01/28/11/) explaining how to compile bluetooth support into Aplay, but that needs recompiling Edison's core image. Not feasible for a short term project.
* mplayer. Certainly this monster can play amr files along with many video formats. But Intel removed it from Edison core image some time ago. Recompiling from source is needed, and it takes hours.
* FFMpeg. This thing can convert audio/video file formats. And somebody alreadly released a compiled version for Intel Edison. I fount its [installation script](https://github.com/drejkim/edi-cam/blob/master/bin/install_ffmpeg.sh#L13) from a video library.

Finally I choosed FFMpeg, and used node's child_process/exec to execute a shell script for format conversion. This is the shell command I use to convert amr to wav: 

{% highlight c %}
/home/root/bin/ffmpeg/ffmpeg -i sample.amr -ar 22050 sample.wav -y
{% endhighlight %}

-y allows the script overwrite exisiting files without giving a warning. You can also use similar command to convert mp3 files and alike in your edison board.

