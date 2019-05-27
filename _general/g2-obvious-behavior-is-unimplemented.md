---
code: G2
title: Obvious Behavior Is Unimplemented
order: 2
---
Following "[The Principle of Least Surprise](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)", any function of class should implement the behaviors that another programmer could reasonably expect. For example, consider a function that translates the name of a day to an `enum` that represents the day.

```java
Day day = DayDate.StringToDay(String dayName);
```

We would expect the string "Monday" to be translated to Day.MONDAY. We would also expect the common abbreivations to be translated, and we would expect the function to ignore case.

When an obvious behavior is not implemented, readers and users of the code can no longer depend on their intuiition about function names. They lose their trust in the original author and must fall back on reading the details of the code.