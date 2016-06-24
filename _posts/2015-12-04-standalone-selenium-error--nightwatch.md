---
layout: post
title: "Standalone Selenium error + Nightwatch"
description: ""
date: 2015-12-04 13:11:41
categories:
tags: []
image: /assets/article_images/wave.jpeg
---

While setting up [NightwatchJS](http://nightwatchjs.org/) so that I could do some end-to-end testing on a React/Redux project, I encountered this error;

```
> nightwatch -e chrome

Starting selenium server... There was an error while starting the Selenium server:

Exception in thread "main" java.lang.UnsupportedClassVersionError: org/openqa/grid/selenium/GridLauncher : Unsupported major.minor version 51.0
    at java.lang.ClassLoader.defineClass1(Native Method)
    at java.lang.ClassLoader.defineClassCond(ClassLoader.java:637)
    at java.lang.ClassLoader.defineClass(ClassLoader.java:621)
    at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:141)
    at java.net.URLClassLoader.defineClass(URLClassLoader.java:283)
    at java.net.URLClassLoader.access$000(URLClassLoader.java:58)
    at java.net.URLClassLoader$1.run(URLClassLoader.java:197)
    at java.security.AccessController.doPrivileged(Native Method)
    at java.net.URLClassLoader.findClass(URLClassLoader.java:190)
    at java.lang.ClassLoader.loadClass(ClassLoader.java:306)
    at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
    at java.lang.ClassLoader.loadClass(ClassLoader.java:247)


npm ERR! Darwin 14.4.0
npm ERR! argv "/usr/local/Cellar/node/4.2.1/bin/node" "/usr/local/bin/npm" "run" "test:e2e"
npm ERR! node v4.2.1
npm ERR! npm  v3.3.10
npm ERR! code ELIFECYCLE
npm ERR! react-redux-universal-hot-example@0.9.0 test:e2e: `nightwatch -e chrome`
npm ERR! Exit status 1
```

Which points to issue with my Java version.

```
% java -version
java version "1.6.0_65"
Java(TM) SE Runtime Environment (build 1.6.0_65-b14-468-11M4828a)
Java HotSpot(TM) 64-Bit Server VM (build 20.65-b04-468, mixed mode)
```

The solution was to [update my JDK](
https://stackoverflow.com/questions/10382929/how-to-fix-unsupported-major-minor-version-51-0-error). I downloaded it from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

```
% java -version
java version "1.8.0_65"
Java(TM) SE Runtime Environment (build 1.8.0_65-b17)
Java HotSpot(TM) 64-Bit Server VM (build 25.65-b01, mixed mode)
```

