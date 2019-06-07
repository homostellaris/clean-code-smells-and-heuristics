---
code: G33
title: Encapsulate Boundary Conditions
order: 33
---
Boundary conditions are hard to keep track of.
Put the processing of them in one place.
Don't let them leak all over the code.
We don't want swarms of `+1`s and `-1`s scatter hither and yon.
Consider this simple example for FIT:

```java
  if(level + 1 < tags.length)
  {
    parts = new Parse(body, tags, level + 1, offset + endTag);
    body = null;
  }
```

Notice that `level + 1` appears twice.
This is a boundary condition that should be encapsulated within a variable named something like `nextLevel`.

```java
  int nextLevel = level + 1;
  if(nextLevel < tags.length)
  {
    parts = new Parse(body, tags, nextLevel, offset + endTag);
    body = null;
  }
```