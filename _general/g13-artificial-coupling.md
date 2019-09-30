---
code: G13
title: Artificial Coupling
order: 13
---
Things that don't depend upon each other should not be artificially coupled.
For example, general `enums` should not be contained within more specific classes because this forces the whole application to know about these more specific classes.
The same goes for general purpose `static` functions being declared in specific classes.

In general an artificial coupling is a coupling between two modules that serves no direct purpose.
It is a result of putting a variable, constant, or function in a temporarily convenient, though inappropriate, location.
This is lazy and careless.

Take the time to figure out where functions, constants, and variables ought to be declared.
Don't just toss them in the most convenient place at hand and then leave them there.