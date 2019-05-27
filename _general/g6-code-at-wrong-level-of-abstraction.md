---
code: G6
title: Code at Wrong Level of Abstraction
order: 6
---
It is important to create abstractions that separate higher level general concepts from lower level detailed concepts.
Sometimes we do this by creating abstract classes to hold the higher level concepts and derivatives to hold the lower level concepts,
When we do this, we need to make sure that the separation is complete.
We want *all* the lower level concepts to be in the derivatives and *all* the higher level concepts to be in the base class.

For example, constants, variables, or utility functions that pertain only to the detailed implementation should not be present in the base class.

This rule also pertains to source files, components, and modules.
Good software design requires that we separate concepts at different levels and place them in different containers.
Sometimes these containers are base classes or derivatives and sometimes they are source files, modules, or components.
Whatever the case may be, the separation needs to be complete.
We don't want lower and higher level concepts mixed together.

Consider the following code:

```java
public interface Stack {
  Object pop() throws EmptyException;
  void push(Object o) throws FullException;
  double percentFull();
  class EmptyException extends Exception {}
  class FullException extends Exception {}
}
```

The `percentFull` function is at the wrong level of abstractions.
Although there are many implementations of `Stack` where the concept of *fullness* is reasonable, there are other implementations hat simply *could not know* how full they are.
So the function would be better placed in a derivative interface such as `BoundedStack`.

Perhaps you are thinking that the implementation could just return zero if the stack were boundless.
The problem with that is that no stack is truly boundless.
You cannot really prevent an `OutOfMemoryException` by checking for

```java
stack.percentFull () < 50.0
```

Implementing the function to return 0 would be telling a lie.

The point is that you cannot lie or fake your way out of misplaced abstraction.
Isolating abstractions is one of the hardest things that software developers do, and there is no quick fix when you get it wrong.