---
title: 'Java Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-02-06T18:55:00.000Z'
category: 'Java'
tags: []
emoji: '☕'
---
### Data Types

```java
// Primative data type
boolean pred = false;  // true, false
char ch = 'a';         // 16 bit used for character [0, 65,535]
int i = 15;            // 32 bit [-2^31, 2^31-1 appox. 2m]
long ll = 100000000;   // 64 bit [-2^63, 2^63-1]
float f = 1.56;        // 32 bit
double d = 3.14159;    // 64 bit
// Objects
String s = "hello";    // note the capital letter, string is an object
Integer it = null;     // wrapper class for primative
```

### Create Class and Object

```java
class Student {
	string name; // class fields - object default to null
	double gpa; // class fields - primative data type default 0.0, 0, false
	Student(){
		// standard constructor
	}
	Student(string name, double gpa){
		// this keyword apply to the object
		this.name = name; // assign argument into the class field
		this.gpa = gpa;
	}
}

// ...
// create a student object with name and gpa
Student james = new Student("James", 2.35); 
```

### Class Scope

```java
class Example {
	// Assuming ex is an object for Example

	// Access using ex.everyOneCanSee
	public int everyOneCanSee = 20;
	
	// only method within class can see/use
	private int onlyWithincanSee = 30;

	// Package private class within same package can see/use
	int packageCanSee = 40;

	// Protected, only class that extends this class can see/use
	protected childrenCanSee = 50;
}
```

### Other Quantifier

```java
class Example {
	// Static can be access by Example.allExampleShares;
	// Within the example class, can be used like normal variable.
	static String allExampleShares = "Sharing is caring";
	// Constant variable final
	final String cannotBeReassigned = "Constant";
}
```

### Main Handle

```java
class Main { 
	// every function in java must be wrapped inside a class
	public static void main(String args[]){
		// get run here
	}
}
```

### Array

```java
// creation
int[] arr = new int[30]; // array of length 30
int[] withValue = {1,2,3,4,5};

// assignment
arr[0] = 25; // 0 indexing 

// loop through it
for( int i = 0 ; i < arr.length ; i++ ){ }
for( int num : arr ) {}
```

### Map

```java
//Hash Map import
import java.util.HashMap;

// Initialize the hashmap
HashMap<Integer,Integer> square = new HashMap<>();

// Adding field
hmp.put(5,25); // 5 -> 25

// check exist
hmp.containsKey(36); // false
hmp.containsKey(5); // true

// fetching field
hmp.get(5); // return 25
hmp.get(19); // return null for not found
hmp.getOrDefault(40,1600); // return second field if not found

// Iterate through a map (in java 10+, you can use var instead)
for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + "/" + entry.getValue());
}
```

### Array List

### Queue

### Stack

### Priority Queue