---
title: 'C++ Basic Syntax and Usage'
author: 'Shuby Mao'
date: '2022-02-05T19:17:00.000Z'
category: 'C++'
tags: []
emoji: '⛺'
---
### Data Types

```cpp
bool pred = false; // true, false
char ch = 'a';  // usually use for character
int i = 15; // 32 bit [-2^31, 2^31-1 appox. 2m]
unsigned int uint = 4000000000 // 32bit [0, 2^32-1 appox. 4m]
long long ll = 100000000; // 64 bit [-2^63, 2^63-1]
float f = 1.56;        // 32 bit
double d = 3.14159;    // 64 bit
std::string s = "hello";
```

### Arrays

```cpp
int myArr[100]; // define the number 100 need to be statically predefine
myArr[0] = 256000;
```

### Dynamic Size Array (C)

```cpp
int size = 250;
int* myArr = (int*) malloc(sizeof(int)*size);
myArr[249] = -100000;
```

### Loops

```cpp
// for(init ; predicate ; run after each iteration)
for(int i = 0 ; i < 10 ; i++){}

int size = 10;
while(size > 0) {
	size--;
}
```

### Main handle

```cpp
#include <iostream>
int main(int argc, char* argv[]) {
	cout << "Hello word"; 
}
```

### Imports

```cpp
// Standard library
#include <vector>
// Local header files
#include "src/hello.h"
```