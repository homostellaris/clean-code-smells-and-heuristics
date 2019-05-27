---
code: G9
title: Dead Code
order: 9
---
Dead code is code that isn't executed. You find it in the body of an `if` statement that checks for a condition that can't happen.
You find it in the `catch` block of a `try` that never `throws`.
You find it in little utility methods that are never called or `switch/case` conditions that never occur.

The problem with dead code is that after awhile it starts to smell.
The older it is, the stronger and sourer the odor becomes.
This is because dead code is not completely updated when designs change.
It still *compiles*, but it does not follow newer conventions or rules.
It was written at a time when the system was *different*.
When you find dead code, do the right thing.
Give it a decent burial.
Delete it from the system.