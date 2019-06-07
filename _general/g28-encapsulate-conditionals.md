---
code: G28
title: Encapsulate Conditionals
order: 28
---
Boolean logic is hard enough to understand without having to see it in the context of an `if` or `while` statement.
Extract functions that explain the intent of the conditional.

For example:

```java
  if (shouldBeDeleted(timer))
```

is preferable to

```java
  if (timer.hasExpired() && !timer.isRecurrent())
```