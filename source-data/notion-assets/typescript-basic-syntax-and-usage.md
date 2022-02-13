---
title: 'TypeScript Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-02-08T20:26:00.000Z'
category: 'TypeScript/JavaScript'
tags: []
emoji: '⌨️'
---

### Variable Initialization

```tsx
const CONSTANT = 3.14159; // can't be re assigned

let variable: string = 'Hello';
variable = 'world'; // let can be reassigned

// global scope variable (dangerous and should avoid)
var globalVar: number = 8;
if (true) {
  var globalVar = 25;
  // globalVar is 25 here
}
// globalVar is still 25 here
```

### Basic Types

```tsx
// Three primiative from javascript (string, number, boolean)
const myQuote = 'Javascript is unsafe and not intuitive'; // defalt to string
const myFloat = 25.123456,
  myInt = 12; // both are number type
const isSmart = true; // boolean type
```

### **Arithmetic Operators**

| Operator            | Description                                           | Example                                              |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| + (Addition)        | returns the sum of the operands                       | 2 + 3 is 5                                           |
| - (Subtraction)     | returns the difference of the values                  | 16 - 5 is 11                                         |
| \* (Multiplication) | returns the product of the values                     | 2 \* 21 is 42                                        |
| / (Division)        | performs division operation and returns the quotient  | 4 / 2 is 2, 7 / 5 is 1.4                             |
| % (Modulus)         | performs division operation and returns the remainder | 12 % 7 is 5, -11 % 7 is -4 (Note it can be negative) |
| ++ (Increment)      | Increments the value of the variable by one           | a++ (a = a+1)                                        |
| -- (Decrement)      | Decrements the value of the variable by one           | b-- (b=b-1)                                          |

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
};

// Usage
let four = addOne(3);
let five = addTwo(3);
```

### Array

```tsx
// Initialize array
const myArr[:number] = [8, 3.14, 9, 4];
const words: Array<string> = ['hello', 'world'];

// Access array value - 0 indexed
const piOverTwo = myArr[1] / 2; // 3.14 / 2

// Set array value
myArr[3] = 1; // myArr[8, 3.14, 9, 1]

// Push into the array
myArr.push(5); // myArr[8, 3.14, 9, 4, 5]

// Pop last element
const five = myArr.pop(); // myArr[8, 3.14, 9, 4]

// Map array to another array using the given function
const allCapWords = words.map((word)=>{return word.toUpperCase();});
// [ 'HELLO', 'WORLD' ]

// Sort Array - Comparator (a, b) -> number. Same as java
// If a is should come AFTER b return positive number
// If a should come BEOFRE b return negative number
// If a and b are same, return 0
const ascdArr = myArr.sort((a, b) => {
	return a - b;
}); // [3.14, 4, 8, 9]

const descArr = myArr.sort((a, b) => {
	return b - a;
}); // [9, 8, 4, 3.14]
```

### Object

```tsx
// initialize object
let myObj = { hello: 'world' };

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
};

// Initializing type
let james: Student = { name: 'James', gpa: 2.31 };

// Extend Type
type GradStudent = Student & {
  numberOfPaper: number;
};

type Professor = {
  name: string;
};

// Union - either or
type SchoolPersonal = Professor | Student;
```

### Unknown Object Type

```tsx
// any to represent any type object (dangerous)
let badUnknown: any = { hell: '0' };
let myA = badUnknown['a']; // undefined or null or a value

// Use unknown to represent uncertain object instead
let goodUnknown: unknown = {};
myA = goodUnknown['a']; // not allowed, will create compiled error

// It forces you to do a type check on the input to ensure things are correct
if (typeof unknownVar === 'object' && unknownVar.hasOwnProperty('a')) {
  // compiler know at this point key 'a' exist in the object
  myA = goodUnknown['a'];
}
```

### Map

```tsx
let nameAgeMapping = new Map<string, number>();

// Add entries
nameAgeMapping.set('Lokesh', 37);
nameAgeMapping.set('John', 40);

// Get entries
let age = nameAgeMapping.get('John'); // 40
let unknownAge = nameAgeMapping.get('Hello'); // undefined

// Check entry by Key
nameAgeMapping.has('Lokesh'); // true
nameAgeMapping.has('Brian'); // false

// Size of the Map
let count = nameAgeMapping.size; // count = 2

// Delete an entry
let isDeleted = nameAgeMapping.delete('Lokesh'); // isDeleted = true

// Clear whole Map
nameAgeMapping.clear(); //Clear all entries

//1. Iterate over map keys
for (let key of nameAgeMapping.keys()) {
}

// Iterate over map values
for (let value of nameAgeMapping.values()) {
}

// Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
}

// Using object destructuring
for (let [key, value] of nameAgeMapping) {
}
```

### Queue

Inefficient yet simple implementation

```tsx
// initialize array
let queue[:number] = [];

// Push O(1)
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]

// Pop O(n)
let i = queue.shift(); // queue is now [5], i is 2
```

More complex but more efficient implementation

```tsx
class MyQueue<Type> {
  private _storage: Map<number, Type>;
  private _frontIndex: number;
  private _backIndex: number;

  constructor() {
    this._storage = new Map<number, Type>();
    this._frontIndex = 0;
    this._backIndex = 0;
  }

  push(item: Type): void {
    this._storage.set(this._backIndex, item);
    this._backIndex++;
  }

  peek(): Type | null {
    if (this._backIndex === this._frontIndex) {
      return null;
    }
    return this._storage.get(this._frontIndex);
  }

  pop(): Type | null {
    if (this._backIndex === this._frontIndex) {
      return null;
    }
    let item = this._storage.get(this._frontIndex);
    this._storage.delete(this._frontIndex);
    this._frontIndex++;
    return item;
  }

  size(): number {
    return this._backIndex - this._frontIndex;
  }
}

// Initialization
let q = new MyQueue<number>();

// Pushing item O(1)
q.push(25);
q.push(30);

q.size(); // O(1) - 2

q.pop(); // O(1) - 25

q.peek(); // O(1) - 30
```

### Stack

```tsx
// initialize array
let stack[:number] = [];

// Push O(1)
stack.push(2);         // stack is now [2]
stack.push(5);         // stack is now [2, 5]

// Pop O(1)
let val = stack.pop(); // 5
```

### Priority Queue

Coming Soon
