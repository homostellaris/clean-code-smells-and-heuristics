---
code: G29
title: Avoid Negative Conditionals
order: 29
---
Negatives are just a bit harder to understand than positives.
So, when possible, conditionals should be expressed as positives.
For example:

```java
  if (buffer.shouldCompact())
```

is preferable to

```java
  if (!buffer.shouldNotCompact())
```