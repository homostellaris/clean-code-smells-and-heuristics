# Clean Code: Smells and Heuristics

Below is a copy of the _Smells and Heuristics_ chapter from Bob Martin's excellent book: [Clean Code](https://www.google.com/search?q=clean+code).

Uncle Bob (as he is affectionately known) kindly gave [his permission](https://twitter.com/unclebobmartin/status/1086256734094520320) for this static site to be created as a helpful, linkable reference for software engineers to use as they see fit.

If you benefit from the wisdom contained herein you might wish to purchase a copy of the book.

# Comments

## C1: _Inappropriate Information_

It is inappropriate for a comment to hold information better held in a different kind of system such as your source code control system, your issue tracking system, or any other record-keeping system. Change histories, for example, just clutter up source files with volumes of historical and uninteresting text. In general, meta-data such as authors, last-modified-date, SPR number, and so on should not appear in comments. Comments should be reserved technical notes about the code and design.

## C2: _Obsolete Comment_

A comment that has gotten old, irrelevant, and incorrect is obsolete. Comments get old quickly. It is best not to write a comment that will become obsolete. If you find an obsolete comment, it is best to update it or get rid of it as quickly as possible. Obsolete comments tend to migrate away from the code they once described. They become floating islands of irrelevance or misdirection.

## C3: _Redundant Comment_

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

# Environment

## E1: _Build Requires More Than One Step_

Building a project should be a single trivial operation. You should not have to check many little pieces out from source code control. You sdhould not need a sequence of arcane commands or context dependent scripts in order to build the individual elements. You should not have to search near and far for all the various little extra JARs, XML files, and other artifacts that the system requires. You _should_ be able to check out the system with one simple command and then issue one other simple command to build it.
