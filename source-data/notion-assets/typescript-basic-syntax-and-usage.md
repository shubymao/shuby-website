---
title: 'TypeScript Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-02-07T22:43:00.000Z'
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
	// globalVar is 25 here
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

### **Arithmetic Operators**

| Operator | Description | Example ( assume a = 10, b = 20 ) |
| --- | --- | --- |
| + (Addition) | returns the sum of the operands | 2 + 3 is 5 |
| - (Subtraction) | returns the difference of the values | 16 - 5 is 11 |
| * (Multiplication) | returns the product of the values | 2 * 21 is 42 |
| / (Division) | performs division operation and returns the quotient | 4 / 2  is 2, 7 / 5  is 1.4 |
| % (Modulus) | performs division operation and returns the remainder | 12 % 7 is 5, -11 % 7 is -4 (Note it can be negative) |
| ++ (Increment) | Increments the value of the variable by one | a++ (a becomes 11) |
| -- (Decrement) | Decrements the value of the variable by one | b-- (b become 19) |

### **Relational Operators**

### Function

```tsx
// default function declaration
function addOne(num: number): number {
	return num + 1;
}

// Arrow function declaration
const addTwo = (num: number): number => {
	return num + 2;
}

// Usage
let four = addOne(3);
let five = addTwo(3);
```

### Array

```tsx
// Initialize array
const myArr[:number] = [1,2,3.14,9];
const words: Array<string> = ['hello', 'world'];

// Access array value - 0 indexed
const piOverTwo = myArr[2] / 2; // 3.14 / 2

// Set array value
myArr[3] = 4; // myArr[1,2,3.14,4]

// Push into the array
myArr.push(5); // myArr[1,2,3.14,5]

// Pop last element
const five = myArr.pop(); // myArr[1,2,3.14,5]

// Map array to another array using the given function
const allCapWords = words.map((word)=>{return word.toUpperCase();});
// [ 'HELLO', 'WORLD' ]
```

### Object

```tsx
// initialize object
let myObj = { hello : 'world' };

// Access object
let world = myObj.hello;
world = myObj['world'];
```

### Defining Object Type

```tsx
// Defining type
type Student = {
	name: string;
	preferedName?: string; // can be undefined;
	gpa: number;
}

// Initializing type
let james: Student = { name: 'James', gpa: 2.31 };

// Extend Type
type GradStudent = Student & { 
	numberOfPaper: number;
}; 

type Professor = {
	name: string;
}

// Union - either or
type SchoolPersonal = Professor | Student;
```

### Unknown Object Type

```tsx
// any to represent any type object (dangerous)
let badUnknown :any = {'hell': '0'};
let myA = badUnknown['a']; // undefined or null or a value

// Use unknown to represent uncertain object instead
let goodUnknown : unknown = {};
myA  = goodUnknown['a'] // not allowed, will create compiled error

// It forces you to do a type check on the input to ensure things are correct
if(typeof unknownVar === 'object' && unknownVar.hasOwnProperty('a')){
	// we know at this point a exist in the object
	myA = goodUnknown['a']; 
}
```

### Map

### Set

### Queue

### Stack

### Priority Queue

### More Content Coming Soon 🚧