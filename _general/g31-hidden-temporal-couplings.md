---
code: G31
title: Hidden Temporal Couplings
order: 31
---
Temporal couplings are often necessary, but you should not hide the coupling.
Structure the arguments of your functions such that the order in which they should be called is obvious.
Consider the following:

```java
  public class MoogDiver {
    Gradient gradient;
    List<Spline> splines;

    public void dive(String reason) {
      saturateGradient();
      reticulateSplines();
      diveForMoog(reason);
    }
    ...
  }
```

The order of the three functions is important.
You must saturate the gradient before you can reticulate the splines, and only then can you dive for the moog.
Unfortunately, the code does not enforce this temporal coupling.
Another programmer could call `reticulateSplines` before `saturateGradient` was called, leading to an `UnsaturatedGradientException`.
A better solutions is:

```java
  public class MoogDiver {
    Gradient gradient;
    List<Spline> splines;

    public void dive(String reason) {
      Gradient gradient = saturateGradient();
      List<Spline> splines = reticulateSplines(gradient);
      diveForMoog(splines, reason);
    }
    ...
  }
```

This exposes the temporal coupling by creating a bucket brigade.
Each function produces a result that the next function needs, so there is no reasonable way to call them out of order.

You might complain that this increases the complexity of the functions, and you'd be right.
But that extra syntactic complexity exposes the true temporal complexity of the situation.

Note that I left the instance variables in place. I presume that they are needed by private methods in the class.
Even so, I want the arguments in place to make the temporal coupling explicit.