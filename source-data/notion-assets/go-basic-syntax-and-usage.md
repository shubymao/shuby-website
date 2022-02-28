---
order: 1
title: 'Go Basic Syntax And Usage'
author: 'Shuby Mao'
date: '2022-02-16T18:25:00.000Z'
category: 'Golang'
tags: []
emoji: '🚂'
---

### Initialize variable

```go
// variable declaration
var x = 45

// short hand
stuff := false

// constant declaration
const CONSTANT = 3.14159

// single line multi declaration
a, b, c := 100, 200, 300

// multi line declaration (not as clean)
var (
	d = 20.0
	f string = "test"
	enable bool= true
)
```

### Primitive Data Type

```cpp
// Integers
var r = 24  // inferred as int
var i int = 1234 // i32 or i64 depend on platform
var i32 int32 = -2e9 // [-2^31,2^31-1]
var i64 int64 = -2e15 // [-2^63,2^63-1]
var ui32 uint32 = 4e9 // [2^32-1]
var ui64 uint64 = 2e15 // [2^64-1]

// Characters
var asciiA byte = 'A' // range same as uint8
var utf8Heart rune = '♥' // range same as int32

// Floating point number
var f = 4.12356 // infered as float64

// Boolean
var mybool = false
```

### Map

```go
// Make the map
var mp = make(map[int]int)
// assignment
mp[15] = 25
// check exist and get value
value, exist := mp[15]
// iterate through the map
for k, v := range mp {
}
```

### Loops

```go
for i := 0 ; i < 100 ; i++ {
	// do stuff here
}
var size = 100
while size > 0 {
	size--;
}

for i, item := range nums {
}
```

### Print Statements

```go
fmt.Printf("%#v\n", variable)
```

### Slice / Array

```go
// Slice Initialization
var nilSli []int
var nums= []int{0,1,2,3,4}
var emptySli []int = make([]int, 0)

// Array (fixed sized slice)
var arr [2]int{1,2} // size 2

// Access Element
fmt.Printf("%d \n" , nums[3]) // 3

// Slice array
// inclusive-> [start : end) <- exclusive
slice := nums[1:3] // [1,2]
oneToEnd := nums[1:] // [1,2,3,4]
startToThree := nums[:3] // [0,1,2]

// Sort Array (same comparator style as c++)
slice.Sort(nums, func (i, j int) bool{
	return arr[i] > arr[j]  // descending order
})
```

### Stack

```go
var stk []int
// Push
append(stk, 1)
// ...
// Pop
var out = stk[len(stk)-1]
stk = stk[:len(stk)-1]
// Is empty
if len(q) == 0 {}
```

### Queue

```go
var q []int
// Push
append(q, 1)
// Pop
var out = q[0]
q = q[1:]
// Is empty
if len(q) == 0 {}
```

### String manipulation

```cpp
// iterate through string
for pos, ch := range "Hello World" {
}

// index string (ASCII only)
ch := "hello world"[1] // 'e'

// convert string to char array (UTF-8)
runes := []rune("Hello, 世界")

// split based on delimiters
s := "the quick brown fox jump over lazy dog"
segments := strings.Split(s, " ")
```

### Struct (Object)

```cpp
type Student struct {
	id string
	name string
	gpa float64
}

// Initialize a object
empty := Student{}
// Student{id:"", name:"", gpa:0}
john := Student{"123","John Doe",3.0}
// Student{id:"123", name:"John Wick", gpa:3}

// Getting reference to struct
emptyRef := &john

// Setting Fields
empty.id = "null"
emptyRef.name = "ghost" // ref also use '.'
// Student{id:"null", name:"ghost", gpa:0}

// initialize directly into refs
daveRef := &Student{}
steveRef := new(Student)
```
