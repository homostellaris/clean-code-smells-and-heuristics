---
code: N2
title: Choose Names at the Appropriate Level of Abstraction
order: 2
---
Don't pick names that communicate implementation; choose names that reflect the level of abstraction of the class or function you are working in.
This is hard to do.
Again, people are just too good at mixing levels of abstractions.
Each time you make a pass over your code, you will likely find some variable that is named at too low a level.
You should take the opportunity to change those names when you find them.
Making code readable requires a dedication to continuous improvement.
Consider the `Modem` interface below:

```java
  public interface Modem {
    boolean dial(String phoneNumber);
    boolean disconnect();
    boolean send(char c);
    char recv();
    String getConnectedPhoneNumber();
  }
```

At first this looks fine.
The functions all seem appropriate.
Indeed, for many applications they are.
But now consider an application in which some modems aren't connected by dialing.
Rather they are connected permanently by hard wiring them together (think of the cable modems that provide Internet access to most homes nowadays).
Perhaps some are connected by sending port number to a switch over a USB connection.
Clearly the notion of phone numbers is at the wrong level of abstraction.
A better naming strategy for this scenario might be:

```java
  public interface Modem {
    boolean connect(String connectionLocator);
    boolean disconnect();
    boolean send(char c);
    char recv();
    String getConnectedLocator();
  }
```

Now the names don't make any commitments about phone numbers.
They can still be used for phone numbers, or they could be used for any other kind of connection strategy.
```
