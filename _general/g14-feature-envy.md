---
code: G14
title: Feature Envy
order: 14
---
This is one of Martin Fowler's code smells[^6]. The methods of a class should be interested in the variables and functions of the class they belong to, and not the variables and functions of other classes.
When a method uses accessors and mutators of some other object to manipulate the data within that object, then it *envies* the scope of the class of that other object.
It wishes that it were inside that other class so that it could have direct access to the variables it is manipulating.
For example:

```java
public class HourlyPayCalculator {
  public Money calculateWeeklyPay(HourlyEmployee e) {
    int tenthRate = e.getTenthRate().getPennies();
    int tenthsWorked = e.getTenthsWorked();
    int straightTime = Math.min(400, tenthsWorked);
    int overTime = Math.max(0, tenthsWorked - straightTime);
    int straightPay = straightTime * tenthRate;
    int overtimePay = (int)Math.round(overTime*tenthRate*1.5);
    return new Money(straightPay + overtimePay);
  }
}
```

The `caluclateWeeklyPay` method reaches into the `HourlyEmployee` object to get the data on which it operates.
The `calculateWeeklyPay` method *envies* the scope of the `HourlyEmployee`.
It "wishes" that it could be inside `HourlyEmployee`.

All else being equal, we want to eliminate Feature Envy because it exposes the internals of one class to another.
Sometimes, however, Feature Envy is a necessary evil.
Consider the following:

```java
public class HourlyEmployeeReport {
  private HourlyEmployee employee;

  public HourlyEmployeeReport(HourlyEmployee e) {
    this.employee = e;
  }

  String reportHours() {
    return String.format(
      "Name: %s\tHours:%d.%1d\n",
      employee.getName(),
      employee.getTenthsWorked()/10,
      employee.getTenthsWorked()%10);
    )
  }
}
```

Clearly, the `reportHours` method envies the `HourlyEmployee` class. On the other hand, we don't want `HourlyEmployee` to have to know about the format of the report.
Moving that format string into the `Hourlyemployee` class would violate several principles of object oriented design[^7].
It would couple `HourlyEmployee` to the format of the report, exposing it to changes in that format.

[^6]: [Refactoring].
[^7]: Specifically, the Single Responsibility Principle, the Open Closed Principle, and the Common Closure Principle. See [PPP].