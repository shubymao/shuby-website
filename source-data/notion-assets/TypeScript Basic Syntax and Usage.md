---
name: 'TypeScript Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-01-31T22:51:00.000Z'
category: 'TypeScript'
tags: []
---
### Variable Initialization

```tsx
const CONSTANT = 3.14159; // can't be re assigned
let variable : string = 'Hello';
variable = 'world'; // let can be reassigned

// global scope variable (dangerous and should avoid)
var globalVar : number = 8; 
if(true){
	var globalVar = 25
	// globalVar == 25
}
// globalVar is still 25 here
```

### Basic Types

```tsx
// Three primiative from javascript (string, number, boolean)
const myQuote = 'Javascript is unsafe and not intuitive'; // defalt to string
const myFloat = 25.123456, myInt = 12; // both are number type
const isSmart = true; // boolean type
```

![Untitled](TypeScript%20Basic%20Syntax%20and%20Usage%20f50dc121997647fbbd9a9c6bc0000ca3/Untitled.png)