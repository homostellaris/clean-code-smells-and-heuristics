---
code: G30
title: Functions Should Do One Thing
order: 30
---
It is often tempting to create functions that have multiple sections that perform a series of operations.
Functions of this kind do more than *one thing*, and should be converted into many smaller functions, each of which does *one thing*.

For example:

```java
  public void pay() {
    for (Employee e : employees) {
      if (e.isPayDay()) {
        Money pay = e.calculatePay();
        e.deliverPay(pay);
      }
    }
  }
```

This bit of code does three things.
It loops over all the employees, checks to see whether each employee ought to be paid, and then pays the employee.
This code would be better written as:

```java
  public void pay() {
    for (Employee e : employees) {
      payIfNecessary(e);
    }
  }

  private void payIfNecessary(Employee e) {
    if (e.isPayDay())
      calculateAndDeliverPay(e);
  }

  private void calculateAndDeliverPay(Employee e) {
    Money pay = e.calculatePay();
    e.deliveryPay();
  }
```

Each of these functions does one thing. (See "Do One Thing" on page 35 of the book.)
