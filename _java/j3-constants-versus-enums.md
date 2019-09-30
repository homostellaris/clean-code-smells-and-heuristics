---
code: J3
title: Constants versus Enums
order: 3
---
Now that `enum`s have been added to the language (Java 5), use them!
Don't keep using the old trick of `public static final int`s.
The meaning of `int`s can get lost.
The meaning of `enum` cannot, because they belong to an enumeration that is named.

What's more, study the syntax for `enum`s carefully.
They can have methods and fields.
This makes them more powerful tools that allow much more expression and flexibility than `int`s.
Consider this variation on the payroll code:

```java
  public class HourlyEmployee extends Employee {
    private int tenthsWorked;
    HourlyPayGrade grade;

    public Money calculatePay() {
      int straightTime = Math.min(tenthsWorked, TENTHS_PER_WEEK);
      int overTime = tenthsWorked - straightTime;
      return new Money(
        grade.rate() * (tenthsWorked + OVERTIME_RATE * overTime)
      );
    }
  }

  public enum HourlyPayGrade {
    APPRENTICE {
      public double rate() {
        return 1.0;
      }
    },
    LIEUTENANT_JOURNEYMAN {
      public double rate() {
        return 1.2;
      }
    },
    JOURNEYMAN {
      public double rate() {
        return 1.5;
      }
    },
    MASTER {
      public double rate() {
        return 2.0;
      }
    };

    public abstract double rate();
  }
```