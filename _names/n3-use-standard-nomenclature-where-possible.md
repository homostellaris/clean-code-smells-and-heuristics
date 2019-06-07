---
code: N3
title: Use Standard Nomenclature Where Possible
order: 3
---
Names are easier to understand if they are based on existing convention or usage.
For example, if you are using the Decorator pattern, you should use the word `Decorator` in the names of the decorating class.
For example, `AutoHangupModemDecorator` might be the name of a class that decorate `Modem` with the ability to automatically hang up at the end of a session.

Patterns are just one kind of standard.
In Java, for example, functions that convert objects to String representations are often named `toString`.
It is better to follow conventions like these than to invent your own.

Teams will often invent their own standard system of names for a particular project.
Eric Evans refers to this as *ubiqutous language* for the project.[^14]
Your code should use the terms from this language extensively.
In short, the more you can use names that are overloaded with special meanings that are relevant to your project, the easier it will be for readers to know what your code is talking about.

[^14]: [DDD].