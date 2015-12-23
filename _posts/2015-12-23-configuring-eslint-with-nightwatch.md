---
layout: post
title: "Configuring ESLint with Nightwatch"
description: ""
date: 2015-12-23 10:33:21
categories: posts tech
tags: [protip js nightwatchjs eslint]
image: /assets/article_images/field-tea.jpeg
---

If you are using [NightwatchJS](http://nightwatchjs.org/) getting ESLint errors like these;

```
   6:1  error  "describe" is not defined    no-undef
  16:3  error  "beforeEach" is not defined  no-undef
  39:3  error  "it" is not defined          no-undef
```

Simply ignore the relevant Nightwatch globals in your .eslintrc

```
  ...
  "globals": {
    // ignore these nightwatch globals
    "describe": false,
    "before": false,
    "beforeEach": false,
    "it": false
    ...
  }
```
