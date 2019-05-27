---
code: G19
title: Use Explanatory Variables
order: 19
---
Kent Beck wrote about this in his great book *Smalltalk Best Practice Patterns*[^8] and again more recently in his equally great book *Implementation Patterns*[^9].
One of the more powerful ways to make a program readable is to break the calculations up into intermediate values that are held in variables with meaningful names.
Consider the following example from Fitnesse:

```java
  Matcher match = headerPattern.matcher(line);
  if(match.find()) {
    String key = match.group(1);
    String value = match.group(2);
    headers.put(key.toLowerCase(), value);
  }
```

The simple use of explanatory variables makes it clear that the first matched group is the *key*, and the second matched group is the *value*.

It is hard to overdo this.
More explanatory variables are generally better than fewer.
It is remarkable how an opaque module can suddenly become transparent simply by breaking the calculations up into well-named intermediate values.

[^8]: [Beck97], p. 108.
[^9]: [Beck07].