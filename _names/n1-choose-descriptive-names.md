---
code: N1
title: Choose Descriptive Names
order: 1
---
Don't be too quick to choose a name.
ake sure the name is descriptive.
Remember that meanings tend to drift as software evolves, so frequently reevaluate the appropriateness of the names you choose.

This is not just a "feel-good" recommmendation.
Names in software are 90 percent of what make software readable.
You need to take the time to choose them wisely and keep them relevant.
Names are too important to treat carelessly.

Consider the code below.
What does it do?
If I show you the code with well-chosen names, it will make perfect sense to you, but like this it's just a hodge-podge of symbols and magic numbers.

```java
  public int x() {
    int q = 0;
    int z = 0;
    for (int kk = 0; kk < 10; kk++) {
      if (l[z] == 10)
      {
        q += 10 + (l[z + 1] + l[z + 2]);
        z += 1;
      }
      else if (l[z] + l[z + 1] == 10)
      {
        q += 10 + l[z + 2];
        z += 2;
      } else {
        q += l[z] + l[z + 1];
        z +=2;
      }
    }
    return q;
  }
```

Here is the code the way it should be written.
This snippet is actually less complete than the one above.
Yet you can infer immediately what it is trying to do, and you could very likely write the missing functions based on that inferred meaning.
That magic numbers are no longer magic, and the structure of the algorithm is complellingly descriptive.

```java
  public int score() {
    int score = 0;
    int frame = 0;
    for (int frameNumber = 0; frameNumber < 10; frameNumber++) {
      if (isStrike(frame)) {
        score += 10 + nextTwoBallsForStrike(frame);
        frame += 1;
      }
      else if (isSpare(frame)) {
        score += 10 + nextBallForSpare(frame);
        frame += 2;
      } else {
        score += twoBallsInFrame(frame);
        frame += 2;
      }
    }
    return score;
  }
```

The power of carefully chosen names is that they overload the structure of the code with description.
That overloading sets the readers' expectations about what the other functions in the module do.
You can infer the implementation of `isStike()` by looking at the code above.
When you read the `isStrike` method, it will be "pretty much what you expected."[^13]

```java
  private boolean isStrike(int frame) {
    return rolls[frame] == 10;
  }
```

[^13]: See Ward Cunningham's quote on page 11.