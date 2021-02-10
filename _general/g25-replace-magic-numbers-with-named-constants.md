---
code: G25
title: Replace Magic Numbers with Named Constants
order: 25
---
This is probably one of the oldest rules in software development.
I remember reading it in the late sixties in introductory COBOL, FORTRAN, and PL/I manuals.
In general it is a bad idea to have raw numbers in your code.
you should hide them behind well-named constants.

For example, the number 86,400 should be hidden behind the constant `SECONDS_PER_DAY`.
If you are printing 55 lines per page, then the constant 55 should be hidden behind the constant `LINES_PER_PAGE`.

Some constants are so easy to recognize that they don't always need a named constant to hide behind so long as they are used in conjunction with very self-explanatory code.
For example:

```java
  double milesWalked = feetWalked / 5280.0;
  int dailyPay = hourlyRate * 8;
  double circumference = radius * Math.PI * 2;
```

Do we really need the constants `FEET_PER_MILE`, `WORK_HOURS_PER_DAY`, and `TWO` in the above examples?
Clearly, the last case is absurd.
There are some formulae in which constants are simply better written as raw numbers.
You might quibble about the `WORK_HOURS_PER_DAY` case because the laws or conventions might change.
On the other hand, that formula reads so nicely with the 8 in it that I would be reluctant to add 17 extra characters to the readers' burden.
And in the `FEET_PER_MILE` case, the number 5280 is so very well known and so unique a constant that readers would recognize it even if it stood alone on a page with no context surrounding it.

Constants like 3.141592653589793 are also very well known and easily recognizable.
However, the chance for error is too great to leave them raw.
Every time someone sees 3.1415927535890793, they know what it is π, and so they fail to scrutinize it.
(Did you catch the single-digit error?) We also don't want people using 3.14, 3.1459, 3.142, and so forth.
Therefore, it is a good thing that Math.PI has already been defined for us.

The term "Magic Number" does not apply only to numbers.
It applies to any token that has value that is not self-describing.
For example:

```java
  assertEqual(7777, Employee.find("John Doe").employeeNumber());
```

There are two magic numbers in this assertion.
The first is obviously 7777, though what it might mean is not obvious.
The second magic number is `"John Doe,"` and again the intent is not clear.

It turns out that `"John Doe"` is the name of employee #7777 in a well-known test database created by out team.
Everyone in the team knows that when you connect to this database, it will have several employees already cooked into it with well-known values and attributes.
It also turns out that `"John Doe"` represents the sole hourly employee in that test database.
So this test should really read:

```java
  assertEqual(
    HOURLY_EMPLOYEE_ID,
    Employee.find(HOURLY_EMPLOYEE_NAME).employeeNumber());
```
