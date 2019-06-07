---
code: G35
title: Keep Configurable Data at High Levels
order: 35
---
If you have a constant such as a default or configuration value that is known and expected at a high level of abstraction, do not bury it in a low-level function.
Expose it as an argument to that low-level function called from the high-level function.
Consider the following code from FitNesse:

```java
  public static void main(String[] args) throws Exception
  {
    Arguments arguments = parseCommandLine(args);
    ...
  }

  public class Arguments
  {
    public static final String DEFAULT_PATH = ".";
    public static final String DEFAULT_ROOT = "FitNesseRoot";
    public static final int DEFAULT_PORT = 80;
    public static final int DEFAULT_VERSION_DAYS = 14;
    ...
  }
```

The command-line arguments are parsed in the very first executable line of FitNesse.
The default values of those arguments are specified at the top of the `Argument` class.
You don't have to go looking in low levels of the system for statements like this one:

```java
  if (arguments.port == 0) // use 80 by default
```

The configuration constants reside at a very high level and are easy to change.
They get passed down to the rest of the application.
The lower levels of the application do not own the values of these constants.