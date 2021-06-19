## Introduction to React and Components
Component Based Architecture
Component-based architecture focuses on the decomposition of the design into individual functional or logical components that represent well-defined communication interfaces containing methods, events, and properties. It provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions.

1. What is a component?
A component is a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface.

2. What are the charactistics of a component?
Reusability
Replaceable
Not context specific
Extensible
Encapsulated
Independent


3. What are the advantages of using component based architecture?
Ease of deployment
Reduced cost
Ease of development
Reusable
Modification of technical complexity
Reliability
System maintenance and evolution
Independent


What is “Props” and how to use it in React?
React has a different approach to data flow & manipulation than other frameworks, and that’s why it can be difficult at the beginning to understand some concepts like props, state and so on. I believe it’s better to keep explaining them in separated posts and in this article, we’re going to focus on React’s Props feature and how to use it.



What is Props?
React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.

Using Props in React
I will be explaining how to use Props step by step. Firstly, define an attribute and its value(data) Then pass it to child component(s) by using Props Finally, render the Props Data