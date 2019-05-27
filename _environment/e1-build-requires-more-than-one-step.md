---
code: E1
title: Build Requires More Than One Step
order: 2
---
Building a project should be a single trivial operation. You should not have to check many little pieces out from source code control. You sdhould not need a sequence of arcane commands or context dependent scripts in order to build the individual elements. You should not have to search near and far for all the various little extra JARs, XML files, and other artifacts that the system requires. You _should_ be able to check out the system with one simple command and then issue one other simple command to build it.
```
svn get mySystem
cd mySystem
ant all
```