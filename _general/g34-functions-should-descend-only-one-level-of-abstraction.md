code: G34
title: Functions Should Descend Only One Level of Abstraction
order: 34
---
The statements within a function should all be written at the same level of abstraction, which should be one level below the operation described by the name of the function.
This may be the hardest of these heuristics to interpret and follow.
Though the idea is plain enough, humans are just far too good at seamlessly mixing levels of abstraction.
Consider, for example, the following code taken from FitNesse:

```java
  public String render() throws Exception {
    StringBuffer html = new StringBuffer("<hr");
    if(size > 0)
      html.append(" size=\"").append(size + 1).append("\"");
    html.append(">");

    return html.toString();
  }
```

A moment's study and you can see what's going on.
This function constructs the HTML tag that draws a horizontal rule across the page.
The height of that rule is specified in the `size` variable.

Now look again.
This method is mixing at least two levels of abstraction.
The first is the notion that a horizontal rule has a size.
The second is the syntax of the `HR` tag itself.
This code comes from the `HruleWidget` module in FitNesse.
This module detects a row of four or more dashes and converts it into the appropriate HR tag.
The more dashes, the larger the size.

I refactored this but of code as follows.
Note that I changed the name of the size field to reflect its true purpose.
It held the number of extra dashes.

```java
  public String render() throws Exception
  {
    HtmlTag hr = new HtmlTag("hr");
    if (extraDashes > 0)
      hr.addAttributes("size", hrSize(extraDashes));
    return hr.html();
  }

  private String hrSize(int height)
  {
    int hrSize = height + 1;
    return String.format("%d", hrSize);
  }
```

This change separates the two levels of abstraction nicely.
The `render` function simply constructs a HR tag, without having to know anything about the HTML syntax of that tag.
The `HtmlTag` module takes care of all the nasty syntax issues.

Indeed, by making this change I caught a subtle error.
the original code did not put the closing slash on the HR tag, as the XHTML standard would have it.
(In other words, it emitted `<hr>` instead of `<hr/>`.)
The `HtmlTag` module had been changed to conform to XHTML long ago.

Separating levels of abstraction is one of the most important functions of refactoring, and it's one of the hardest to do well.
As an example, look at the code below.
This was my first attempt at separating the abstraction levels in the `HruleWidget.render` method.

```java
  public String render() throws Exception
  {
    HtmlTag hr = new HtmlTag("hr");
    if (size > 0) {
      hr.addAttribute("size", ""+(size+1));
    }
    return hr.html();
  }
```

My goal, at this point, was to create the necessary the necessary separation and get the tests to pass.
I accomplished that goal easily, but the result was a function that *still* had mixed levels of abstraction.
In this case the mixed levels were the construction of the HR tag and the interpretation and formatting of the `size` variable.
This points out that when you break a function along lines of abstraction, you often uncover new lines of abstraction that were obscured by the previous structure.