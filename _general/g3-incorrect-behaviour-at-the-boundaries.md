---
code: G3
title: Incorrect Behavior at the Boundaries
order: 3
---
It seems obvious to say that code should behave correctly.
The problem is that we seldom realize just how complicated correct behavior is.
Developers often write functions that they think will work, and then trust their intuition rather than going to the effort to prove that their works in all the corner and boundary cases.

There is no replacement for due diligence.
Every boundary condition, every corner case, every quirk and exception represents something that can confound an elegant and intuitive algorithm.
*Don't rely on your intuition.*
Look for every boundary condition and write a test for it.