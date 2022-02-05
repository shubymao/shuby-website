---
title: 'TypeScript Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-02-05T19:14:00.000Z'
category: 'TypeScript'
tags: []
emoji: '⌨️'
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