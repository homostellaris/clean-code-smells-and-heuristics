---
code: G8
title: Too Much Information
---
Well-defined modules have very small interfaces that allow you to do a lot with a little.
Poorly defined modules have wide and deep interfaces that force you to use many different gestures to get simple things done.
A well-defined interface does not offer very many functions to depend upon, so coupling is low.
A poorly defined interface provides lots of functions that you must call, so coupling is high.

Good software developers learn to limit what they expose at the interfaces of their classes and modules.
The fewer methods a class has, the better,
The fewer variables a function knows about, the better.
The fewer instance variables a class has, the better.

Hide your data.
Hide your utility functions.
Hide your constants and your temporaries.
Don't create classes with lots of methods or lots of instance variables.
Don't create lots of protected variables and functions for your subclasses.
Concentrate on keeping interfaces very tight and small.
Help keep coupling low by limiting information.