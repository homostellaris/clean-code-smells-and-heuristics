---
code: G17
title: Misplaced Responsibility
order: 17
---
One of the most important decisions a software developer can make is where to put code.
For example, where should the `PI` constant go?
Should it be in the `Math` class?
Perhaps it belongs in the `Trigonometry` class?
Or maybe in the `Circle` class?

The principle of least surprise comes into play here.
Code should be placed where a reader would naturally expect it to be.
The `PI` constant should go where the trig functions are declared.
The `OVERRTIME_RATE` constant should be declared in the `HourlyPayCalculator` class.

Sometimes we get "clever" about where to put certain functionality.
We'll put it in a function that's convenient for us, but not necessarily intuitive to the reader.
For example, perhaps we need to print a report with the total of hours that an employee worked.
We could sum up those hours in the code that prints the report, or we could try to keep a running total in the code that accepts time cards.

One way to make this decision is to look at the names of the functions.
Let's say that our report module has a function named `getTotalHours`.
Let's also say that the module that accepts time cards has a `saveTimeCard` function.
Which of these functions, by it's name, implies that it calculates the total?
The answer should be obvious.

Clearly, there are sometimes performance reasons why the total should be calculated as time cards are accepted rather than when the report is printed.
That's fine, but the names of the functions ought to reflect this.
For example, there should be a `computeRunningTotalOfHour` function in the timecard module.