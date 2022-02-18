---
order: 2
title: 'Go Advance Standard Library'
author: 'Shuby Mao'
date: '2022-02-16T18:25:00.000Z'
category: 'Golang'
tags: []
emoji: '🚆'
---
### Environment Variable

```go
import (
    "fmt"
    "os"
)
// Setting environment variable
os.Setenv("MY_ENV_VAR", "1")
// Getting environment variable
fmt.Println("MY_ENV_VAR: ", os.Getenv("MY_ENV_VAR"))
// Iterating through environment variable
for _, e := range os.Environ() {
	// e is the a string in the format ENV_VAR=VALUE
}
```

### Regular Expression

```go
package main

import (
    "bytes"
    "fmt"
    "regexp"
)

func main() {

    match, _ := regexp.MatchString("p([a-z]+)ch", "peach") // true
    fmt.Println(match)

    r, _ := regexp.Compile("p([a-z]+)ch")

    fmt.Println(r.MatchString("peach")) // true

    fmt.Println(r.FindString("peach punch")) peach

    fmt.Println("idx:", r.FindStringIndex("peach punch")) // idx: [0 5]

    fmt.Println(r.FindStringSubmatch("peach punch")) // [peach ea]

    fmt.Println(r.FindStringSubmatchIndex("peach punch")) // [0 5 1 3]

    fmt.Println(r.FindAllString("peach punch pinch", -1)) // [peach punch pinch]

    fmt.Println("all:", r.FindAllStringSubmatchIndex(
        "peach punch pinch", -1)) 
		// all: [[0 5 1 3] [6 11 7 9] [12 17 13 15]]

    fmt.Println(r.FindAllString("peach punch pinch", 2))
		// [peach punch]

    fmt.Println(r.Match([]byte("peach"))) // true

    r = regexp.MustCompile("p([a-z]+)ch")
    fmt.Println("regexp:", r) // regexp: p([a-z]+)ch

    fmt.Println(r.ReplaceAllString("a peach", "<fruit>")) 
		// a <fruit>

    in := []byte("a peach")
    out := r.ReplaceAllFunc(in, bytes.ToUpper)
		// a PEACH

    fmt.Println(string(out))
}
```