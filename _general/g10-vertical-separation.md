---
code: G10
title: Vertical Separation
order: 10
---
Variables and function should be defined close to where they are used.
Local variables should be declared just above their first usage and should have a small vertical scope.
We don't want local variables declared hundreds of lines distant from their usages.

Private functions should be defined just below their first usage.
Private functions belong to the scope of the whole class, but we'd still like to limit the vertical distance between the invocations and definitions.
Finding a private function should just be a matter of scanning downward from the first usage.