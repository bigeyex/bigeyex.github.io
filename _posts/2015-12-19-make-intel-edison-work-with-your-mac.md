---
layout: post
title: Maker - Make Intel Edison Works with Your Mac
---

Lot's of Intel Edision players have trouble with connecting with a mac. Here's some tips I've got after hours of struggle. (I use Intel XDK as developing environment).

* Use 12V DC Power Input! You need to plug not only both USB cables but also external power input!
* Make sure you uploaded your firmware during the installation. Otherwise you may need to update it manually with *Phone Flash Tool Lite*. This is because Intel update their firmware so frequently that strange behaviors may happen anytime you have an outdated firmware.
* If you want to use ssh, be sure to set up a password with *configure_edison --password*. I prefer change the name (*configure_edison --name*) too in a Hackathon so you won't mess up with other players.
* If you want to re-run a node.js program, stop it first. Or else it won't run dispite successfully uploaded.

The general steps looks like this:

1. put your Edison chip into the socket.
2. plug in 12V DC Power Supply.
3. connect both usb port to your computer.
4. download the [driver](http://downloadmirror.intel.com/25384/eng/m_iot_dev_kit_2015.0.021.tar.gz) and install - the firmware in the board will be automatically updated during this step.
5. open up terminal. Check *ls /dev/tty.\** repetitively until you see something like tty.usbserial-xxxxxxx. 
6. run command *screen tty.usbserial-xxxxxxx 115200* to open a shell on edison.
7. run *configure_edison --wifi* to connect Edison to a wifi hotspot.
8. run *configure_edison --password* to give it a password.
9. run *configure_edison --name* to assign a name to the board.
10. to this step, you can close your terminal and unplug your usb cables. Now open Intel XDK. Create a project, search for the name of your Edison chip in the *IOT Device* dropdown menu, which is located in the bottom panel. Here you can find the IP address of edison, which you can ssh into and open a shell.