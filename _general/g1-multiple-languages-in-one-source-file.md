---
code: G1
title: Multiple Languages in One Source File
---
Today's modern programming environments make it possible to put many different languages into a single source file.
For example, a Java source file might contains snippets of XML, HTML, YAML, JavaDoc, English, JavaScript, and so on.
For another example, in addition to HTML a JSP file might contain Java, a tag library syntax, English comments, Javadocs, XML, JavaScript, and so forth.
This is confusing at best and carelessly sloppy at worst.

The ideal is for a source file to contain one, and only one, language.
Realistically, we will probably have to use more than one.
But we should take pains to minimize both the number and extent of extra languages in our source files.