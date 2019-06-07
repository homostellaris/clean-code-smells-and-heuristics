---
code: N4
title: Unambiguous Names
order: 4
---
Choose names that make the working of the function or variable unambiguous.
Consider this example from FitNesse:

```java
  private String doRename() throws Exception
  {
    if(refactorReferences)
      renameReferences();
    renamePage();

    pathToRename.removeNameFromEnd();
    pathToRename.addNameToEnd();
    return PathParser.render(pathToRename);
  }
```

The name of this function does not say what the function does except in broad and vague terms.
This is emphasized by the fact that there is a function named `renamePage` inside the function named `doRename`!
What do tthe names tell you about the difference between the two function?
Nothing.

A better name for that function is `renamePageAndOptionallyAllReferences`.
This may seem long, and it is, but it's only called from one place in the module, so it's explanatory value outweighs the length.