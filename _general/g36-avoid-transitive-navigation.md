---
code: G36
title: Avoid Transitive Navigation
order: 36
---
In general we don't want a single module to know much about its collaborators.
More specifically, if `A` collaborates with `B`, and `B` collaborates with `C`, we don't want modules that use `A` to know about `C`. (For example, we don't want `a.getB().getC().doSomething();`.)

This is sometimes called the Law of Demeter.
The Pragmatic Programmers call it "Writing Shy Code."[^12]
In either case it comes down to making sure that modules know only about their immediate collaborators and do not know the navigation map of the whole system.

If many modules used some form of the statement `a.getB().getC()`, then it would be difficult to change the design and architecture to interpose a `Q` between `B` and `C`.
You'd have to find every instance of `a.getB().getC()` and convert it to `a.getB().getQ().getC()`.
This is how architectures become rigid.
Too many modules know too much about the architecture.

Rather we want our immediate collaborators to offer all the services we need.
We should not have to roam through the object graph of the system, hunting for the method we want to call.
Rather we should simply be able to say:

```java
  myCollaborator.doSomething()
```