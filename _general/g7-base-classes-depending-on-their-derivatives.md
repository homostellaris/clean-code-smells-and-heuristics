---
code: G7
title: Base Classes Depending on Their Derivatives
order: 7
---
The most common reason for partitioning concepts into base and derivative classes is so that the higher level base class concepts can be independent of the lower level derivative class concepts.
Therefore, when we see base classes mentioning the names of their derivatives, we suspect a problem.
In general, base classes should know nothing about their derivatives.

There are exceptions to this rule, of course.
Sometimes the number of derivatives is strictly fixed, and the base class has code that selects between the derivatives.
We see this a lot in finite state machine implementations.
However, in that case the derivatives and base class are strongly coupled and always deploy together in the same jar file.
In the general case we want to be able to deploy derivatives and bases in different jar files.

Deploying derivatives and bases in different jar files and making sure the base jar files know nothing about the contents of the derivative jar files allows us to deploy our systems in discrete and independent components.
When such components are modified, they can be redeployed without having to redeploy the base components.
This means that the impact of change is greatly lessened, and maintaining systems in the field is made much simpler.