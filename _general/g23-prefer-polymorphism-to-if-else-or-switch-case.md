---
code: G23
title: Prefer Polymorphism to If/Else or Switch/Case
order: 23
---
This might seem a strange suggestion given the topic of Chapter 6.
After all, in that chapter I make the point that switch statements are probably appropriate in the parts of the system where adding new functions is more likely than adding new types.

First, most people use switch statements because it's the obvious brute force solution, not because it's the right solution for the situation.
So this heuristic is here to remind us to consider polymorphism before using a switch.

Second, the cases where functions are more volatile than types are relatively rare.
So *every* switch statement should be suspect.

I use the following "ONE SWITCH" rule: *There may be no more than one switch statement for a given type of selection.*
*The cases in that switch statement must create polymorphic objects that take the place of other switch statements in the rest of the system.*