---
code: G5
title: Duplication
---
This is one of the most important rules in this book, and you should take it very seriously.
Veritually every author who writes about software design mentions this rule.
Dave Thomas and Andy Hunt called it the DRY[^1] principle (Don't Repeat Yourself).
Kent Beck made it one of the core principles of Extreme Programming and call it: "Once, and only once."
Ron Jeffries ranks this rule second, just below getting all the tests to pass.

Every time you see duplication in the code, it represents a missed opportunity for abstraction.
That duplication could probably become a subroutine or perhaps another class outright.
By folding the duplication into such an abstraction, you increase the vocabulary of the language of your design.
Other programmers can use the abstract facilities you create. Coding becomes faster and less error prone because you have raised the abstraction level.

The most obvious form of duplication is when you have clumps of identical code that look like some programmers went wild with the mouse, pasting the same code over and over again.
These should be replaced with simple methods.

A more subtle form is the `switch/case` or `if/else` chain that appears again and again in various modules, always testing for the same set of conditions. These should be replaced with polymorphism.

Still more subtle are the modules that have similar algorithms, but that don't share similar lines of code.
This is still duplication and should be addressed by using the *Template Method*[^2] or *Strategy* pattern[^3].

Indeed, most of the design patterns that have appeared in the last fifteen years are simply well-known ways to eliminate duplication.
So too the Codd Normal Forms are a strategy for eliminating duplication.
Not surprisingly, so is structured programming.

I think the point has been made. Find and eliminate duplication wherever you can.

[^1]: [PRAG]
[^2]: [GOF]
[^3]: [GOF]