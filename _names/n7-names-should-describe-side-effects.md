---
code: N7
title: Names Should Describe Side-Effects
order: 7
---
Names should describe everything that a function, variable, or class is or does.
Don't hide the effects with a name.
Do't use a simple verb to describe a function that does more than just a simple action.
For example, consider this code from TestNG:

```java
  public ObjectOutputStream getOos() throws IOException {
    if (m_oos == null) {
      m_oos = new ObjectOutputStream(m_socket.getOutputStream());
    }
    return m_oos;
  }
```

This function does a bit more than get an "oos"; it creates the "oos" if it hasn't been created already.
Thus, a better name might be `createOrReturnOos`.