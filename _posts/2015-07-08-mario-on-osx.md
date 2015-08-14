---
layout: post
title: "MarI/O on OSX"
description: ""
date: 2015-07-08 13:48:37
categories: posts tech
tags: [neuroevolution machine-learning]
image: /assets/article_images/2015-07-08-mario-on-osx/banner.jpg
---

[Seth Bling's MarI/O](https://www.youtube.com/watch?v=qv6UVOQ0F44) is an implementation of the NEAT machine-learning algorithm that teaches itself to play Super Mario.

My initial attempts to run MarI/O were on OSX. While these attempts were ultimately unsuccessful, I did learn a few things.


## Attempt #1: BizHawk on OSX

I first tried to use the [OSX build of BizHawk](http://tasvideos.org/BizHawk.html). (BizHawk_mac_1.10.0.zip)

### Super Mario World (SNES)

When loading "Super Mario World (USA).sfc", this error appeared;

	"Couldn't locate the executable for SNES emulation..."

![osx snes error](/assets/article_images/2015-07-08-neuroevolution-with-mario/osx_snes_error.png)

AFAICT BizHawk OSX doesn't ship with "libsneshawk-32-compatibility.exe", which tells me SNES emulations aren't supported on OSX (?)

### Super Mario Bros (NES)

     "Sorry, Lua is not supported on this platform."

Righto.

## Attempt #2: OpenEmu (OSX)

Since I couldn't run BizHawk on OSX, what about a different emulator? I hoped all I needed was Lua scripting capabilities, and with any luck, very few changes to the API calls in neatevolve.lua script, right? (Such optimism!)

[OpenEmu](http://openemu.org/) was the most promising OSX emulator since it threatened to also have Lua scripting capabilities. However on closer inspection it seems the project's [lua scripting branch](https://github.com/OpenEmu/OpenEmu/tree/luascripting) has been abandoned.

## Attempt #3: VirtualBox VM

### Super Mario World (SNES)

Then I tried BizHawk inside a VirtualBox VM (I chose Windows XP).

_In hindsight this is probably bad idea. MarI/O takes several *days* to evolve a genome that can complete a single level. It consumes about 40% CPU on my Macbook Air, running Windows 8 on bare metal (i.e. Boot Camp). Performance will be considerably worse in a VM. Lacking this information, and not wanting to install Windows via Boot Camp at that stage, I gave it a try..._

On a standard install, BizHawk defaults the Display Method to GDI+ and it will run ROMs just fine inside a VM.

However MarI/O (i.e NEATevolve.lua), requires OpenGL. Runing in GDI+ mode and loading the script barfs on an OpenGL error;

    "System.ArgumentNullException: Value cannot be null. Parameter name: source"

![OpenGL error](/assets/article_images/2015-07-08-neuroevolution-with-mario/opengl_error.png)

I tried to change the BizHawk Display Settings from GDI+ to OpenGL, and they didn't stick (ie. it reverted to GDI+).

![GDI+ reverting](/assets/article_images/2015-07-08-neuroevolution-with-mario/bizhawk_gdi.png)

Investigating further, I figured my VM graphics driver is to blame. Out of the box VirtualBox does not give the VM access to the hosts video hardware, which AFAICT is required for Direct3D/OpenGL.

![virtualbox direct 3d option](/assets/article_images/2015-07-08-neuroevolution-with-mario/vm_direct3d.png)

I installed this 'experimental' support by changing the VM display settings, and as instructed, booting XP in safe mode to install the drivers.

![VM settings](/assets/article_images/2015-07-08-neuroevolution-with-mario/vm_display_settings.png)

It installed just fine, and I can now select the OpenGL display mode (and it won't revert to GDI+). A small win.

However, as you can see from this screenshot, the SNES ROM loads, I can hear the music, but there is something wrong with the video.

![OpenGL drawing error](/assets/article_images/2015-07-08-neuroevolution-with-mario/vm_opengl_running.png)

## Conclusion

This is as close as I got before giving up and [running MarI/O on Windows 8](/posts/tech/2015/07/08/neuroevolution-with-mario.html) via Boot Camp with much more success!

If anyone had more success than me in getting MarI/O running on OSX, I'd love to hear from you!
