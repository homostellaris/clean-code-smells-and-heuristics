---
code: N5
title: Use Long Names for Long Scopes
order: 5
---
The length of a name should be related to the length of the scope.
You can use very short variable names for tiny scopes, but for big scopes you should use longer names.

Variable names like `i` and `j` are just fine if their scope if five lines long.
Consider this snippet from the old standard "Bowling Game":

```java
  private void rollMany(int n, int pins)
  {
    for (int i=0; i<n; i++)
      g.roll(pins);
  }
```

This is perfectly clear and would be obfuscated if the variable `i` were replaced with something annoying like `rollCount`.
On the other hand, variables and functions with short names lose their meaning over long distances.
So the longer the scope of the name, the longer and more precise the name should be.