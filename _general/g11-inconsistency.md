---
code: G11
title: Inconsistency
order: 11
---
If you do something a certain way, do all similar things in the same way.
This goes back to the principle of least surprise.
Be careful with the conventions you choose, and once chosen, be careful to continue to follow them.

If within a particular function you use a vriable names `response` to hold an `HttpServletResponse`, then use the same variable name consistently in the other functions that use `HttpServletResponse` objects.
If you name a method `processVerificationRequest`, then use a similar name, such as `processDeletionRequest`, for the methods that process other kinds of requests.

Simple consistency like this, when reliably applied, can make code much easier to read and modify.