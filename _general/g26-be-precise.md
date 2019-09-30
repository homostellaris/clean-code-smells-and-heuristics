---
code: G26
title: Be Precise
order: 26
---
Expecting the first match to be the *only* match to a query is probably naive.
Using floating point numbers to represent currency is almost criminal.
Avoiding locks and/or transaction management because you don't think concurrent update is likely is lazy at best.
Declaring a variable to be an `ArrayList` when a `List` will do is overly constraining.
Making all variables `protected` by default is not constraining enough.

When you make a decision in your code, make sure you make it *precisely*.
Know why you have made it and how you will deal with any exceptions.
Don't be lazy about the precision of your decisions.
If you decide to call a function that might return `null`, make sure you check for `null`.
If you query for what you think is the only record in the database, make sure your code checks to be sure there aren't others.
If you need to deal with currency, use integers[^11] and deal with rounding appropriately.
If there is the possibility of concurrent update, make sure you implement some kind of locking mechanism.

Ambiguities and imprecision in code are either a result of disagreements or laziness.
In either case they should be eliminated.

[^11]: Or better yet, a `Money` class that uses integers.