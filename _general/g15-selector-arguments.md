---
code: G15
title: Selector Arguments
order: 15
---
There is hardly anything more abominable than a dangling false argument at the end of a function call.
What does it mean?
What would it change if it were `true`?
Not only is the purpose of a selector argument difficult to remember, each selector argument combines many functions into one.
Selector arguments are just a lazy way to avoid splitting a large function into several smaller functions.
Consider:

```java
public int calculateWeeklyPay(boolean overtime) {
  int tenthRate = getTenthRate();
  int tenthsWorked = getTenthsWorked();
  int straightTime = Math.min(400, tenthsWorked);
  int overTime = Math.max(0, tenthsWorked - straightTime);
  int straightPay = straighttime * tenthRate;
  double overtimeRate = overtime ? 1.5 : 1.0 * tenthRate;
  int overtimePay = (int)Math.round(overTime*overtimeRate);
  return straightPay + overtimePay;
}
```

You call this function with a `true` if overtime is paid as time and a half, and with a `false` if overtime is paid as straight time.
It's bad enough that you must remember what `calculateWeeklyPay(false)` means whenever you happen to stumble across it.
But the real shame of a function like this is that the author missed the opportunity to write the following:

```java
public int straightPay() {
  return getTenthsWorked() * getTenthRate();
}

public int overTimePay() {
  int overTimeTenths = Math.max(0, getTenthsWorked() - 400);
  int overTimePay = overTimeBonus(overTimeTenths);
  return straightPay() + overTimePay;
}

private int overTimeBonus(int overTimeTenths) {
  double bonus = 0.5 * getTenthRate() * overTimeTenths;
  return (int) Math.round(bonus);
}
```

Of course, selectors needs not be `boolean`.
They can be enums, integers, or any other type of argument that is used to select the behavior of the function.
In general it is better to have many functions than to pass some code into a function to select the behavior.