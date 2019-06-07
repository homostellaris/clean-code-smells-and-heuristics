---
code: T7
title: Patterns of Failure Are Revealing
order: 7
---
Sometimes you can diagnose a problem by finding patterns in the way the test cases fail.
This is another argument for making the test cases as complete as possible.
Complete test cases, ordered in a reasonable way, expose patterns.

As a simple example, suppose you noticed that all tests with an input larger than five characters failed?
or what if any test that passed a negative number into a second argument of a function failed?
Sometimes just seeing the pattern of red and green on the test report is enough to spark the "Aha!" that leads to the solution.
Look page at page 267 to see an interestingt example of this in the `SerialDate` example.