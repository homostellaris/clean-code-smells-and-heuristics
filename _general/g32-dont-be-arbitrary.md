---
code: G32
title: Don't Be Arbitrary
order: 32
---
Have a reason for the way you structure your code, and make sure that reason is communicated by the structure of the code.
If a structure appears consistently throughout the system, others will use it and preserve the convention.
For example, I was recently merging changes to FitNesse and discovered that one of our committers had done this:

```java
  public class AliasLinkWidget extends ParentWidget
  {
    public static class VariableExpandingWidgetRoot {
      ...

    ...
  }
```

The problem with this was that `VariableExpandingRootWidget` had no need to be inside the scope of `AliasLinkWidget`.
Moreover, other unrelated classes made use of `AliasLinkWidget.VariableExpandingRootWidget`.
These classes had no need to know about `AliasLinkWidget`.

Perhaps the programmer had plopped the `VariableExpandingRootWidget` into `AliasLinkWidget` as a matter of convenience, or perhaps he thought that it really needed to be scoped inside `AliasLinkWidget`.
Whatever the reason, the result wound up being arbitrary.
Public classes that are not utilities of some other class should not be scoped inside another class.
The convention is to make them public att the top level of their package.