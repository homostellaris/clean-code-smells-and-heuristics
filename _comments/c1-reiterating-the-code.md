---
code: C1
title: Reiterating The Code
---

The best language for expressing what a program does is code. Comments that explain what the code does in a more human-friendly way are obsolete as the code can be refactored to be more readable, for example, by extracting well-named functions or variables. What's worse, such comments are likely to become out of date next time the code changes at which point they become misinformation.

❌

```js
// Checks if x is divisible by y
x % y === 0;
```

✅

```js
isDivisibleBy(x, y);

function isDivisibleBy(x, y) {
  return x % y === 0;
}
```
