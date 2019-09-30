---
code: G18
title: Inappropriate State
order: 18
---
`Math.max(double a, double b)` is a good static method.
It does not operate on a single instance; indeed it would be silly to have to say `new Math().max(a, b)` or even `a.max(b)`.
All the data that `max` uses comes from its two arguments, and not from any "owning" object.
More to the point, there is almost *no chance* that we'd want `Math.max` to be polymorphic.

Sometimes, however, we write static functions that should not be static.
For example, consider:

```java
  HourlyPayCalculator.calculatePay(employee, overtimeRate);
```

Again, this seems like a reasonable `static` function.
It doesn't operate on any particular object and gets all it's data from it's arguments.
However, there is a reasonable chance that we'll want this function to be polymorphic.
We may wish to implement several different algorithms for calculating hourly pay.
For example, `OvertimeHourlyPayCalculator` and `StraightTimeHourlyPayCalculator`.
So in this case the function should not be static.
It should be a nonstatic member function of `Employee`.

In general you should prefer nonstatic methods to static methods.
When in doubt, make the function nonstatic.
If you really want a function to be static, make sure that there is no chance that you'll want it to behave polymorphically.