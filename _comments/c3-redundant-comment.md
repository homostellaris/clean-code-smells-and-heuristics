---
code: C3
title: Redundant Comment
order: 3
---
A comment is redundant if it describes something that adequately describes itself. For example:

```java
i++; // increment
```

Another example is a Javadoc that says nothing more than (or even less than) the function signature:

```java
/**
 * @param sellRequest
 * @return
 * @throws ManagedComponentException
 */
public SellResponse beginSellItem(SellRequest sellRequest)
  throws ManagedComponentException
```

Comments should say things that the code cannot say for itself.
