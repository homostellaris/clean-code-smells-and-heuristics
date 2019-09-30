---
code: G27
title: Structure over Convention
order: 27
---
Enforce design decisions with structure over convention.
Naming conventions are good, but they are inferior to structures that force compliance.
For example, switch/cases with nicely named enumerations are inferior to base classes with abstract methods.
No one is forced to implement the `switch/case` statement the same way each time; but the base classes do enforce that concrete classes have all abstract methods implemented.