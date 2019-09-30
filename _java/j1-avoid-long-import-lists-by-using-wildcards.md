---
code: J1
title: Avoid Long Import Lists by Using Wildcards
order: 1
---
If you use two or more classes from a package, then import the whole package with

```java
  import package.*;
```

Long lists of imports are daunting to the reader.
We don't want to clutter up the tops of our modules with 80 lines of imports.
Rather we want the imports to be a concise statements about which packages we collaborate with.

Specific imports are hard dependencies, whereas wildcard imports are not.
If you specifically import a class, then that class *must* exist.
But if you import a package with a wildcard, no particular classes need to exist.
The import statement simply adds the package to the search path when hunting for names.
So no true dependency is created by such imports, and they therefore serve to keep our modules less coupled.

There are times when the long list of specific imports can be useful.
For example, if you are dealing with legacy code and you want to find out what classes you need to build mocks and stubs for, you can walk down the list of specific imports to find out the true qualified names of all those classes and then put the appropriate stubs in place.
However, this use for specific imports is very rare.
Furthermore, most modern IDEs will allow you to convert the wildcarded imports to a list of specific imports with a single command.
So even in the legacy case it's better to import wildcards.

Wildcard imports can sometimes cause name conflicts and ambiguities.
Two classes with the same name, but in different packages, will need to be specifically imported, or at least specifically qualified when used.
This can be a nuisance but is rare enough that using wildcard imports is still generally better than specific imports.