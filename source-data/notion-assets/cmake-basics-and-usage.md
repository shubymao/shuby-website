---
order: 2
title: 'CMake Basics and Usage'
author: 'Shuby Mao'
date: '2022-02-17T00:33:00.000Z'
category: 'C++'
tags: []
emoji: '🏗️'
---
## Introduction

CMake is an open-source, cross-platform family of tools designed to build, test, and package software. Its primary use is for compiling and testing C++ projects. The example here is inspired by this [GitHub repository](https://github.com/ttroy50/cmake-examples). Feel free to check it out for more advanced usage and example.

## Create a Cmake Project

To create a CMake project, simply create a `CMakeLists.txt` file containing the project name. Below is an example of what it could contain.

```
cmake_minimum_required (VERSION 3.20)

# Setup project name
project (HelloProject)
```

## Add Executable

To build an output executable simple use the `add_executable` command

```
# Add an executable with the above sources
add_executable(main main.cpp)

# You can create multiple executables from a single build
add_executable(second second.cpp)
```

## Create, Update, and Access Variables

Use the `set` keyword to set a variable name and use

```
# Create a sources variable with a link to all cpp files to compile
set(SOURCES
    src/Hello.cpp
    src/main.cpp
)

message("Source Files: ${SOURCE}")
# Source Files: src/hello.cpp;src/main.cpp

# Add an executable with the above sources named "main"
add_executable(main ${SOURCES})
```

## Include Header Files

To add the directory for the header files use the `target_include_directories` command

```
# here main is the executable name
target_include_directories(main src/include)
```

## Create and Use Static Library

To create a static library use the `add_library` command with the `STATIC` flag and link with the executable target. Static library and linked at compile-time and cannot be altered after being compiled. The library will have a `.a` file extension and does not need to be beside the final executable.

```
# Create a library
#Generate the static library from the library sources
add_library(hello_library STATIC 
    src/Hello.cpp
)

# assume hello.h lives in the include folder
target_include_directories(hello_library
    PUBLIC # available to library user when linked
    src/include 
)

# Create the executable here 
# Assume main.cpp also import header file from src/include
add_executable(hello_binary src/main.cpp)

# link the new hello_library target with the hello_binary target
target_link_libraries( hello_binary
    PRIVATE 
		# private means that hello_binary don't need to share the header
		# from hello library to anyone which makes sense because it is an
		# executable
        hello_library
)
```

## Create and Use Shared Library

Shared libraries are dynamically linked libraries and are loaded by run-time. They are commonly used to be using a shared interface but can be swapped out by replacing files similar to the `.so` or `.dll` file type. After building the executable, the library file must be located alongside the executable in order for the program to function correctly.

```
# Generate the shared library from the library sources
add_library(hello_library SHARED # note the SHARED flag
    src/Hello.cpp
)

target_include_directories(hello_library PUBLIC src/include)

# Import is the same as static ...
```

## Import Third-Party Library

To import a third-party library first read the library documentation and fetch the package using git and other package managers. A popular C++ package manager is the [vcpkg](https://github.com/microsoft/vcpkg). 

### find_package command

For some libraries, we can also use the `find_package`. Here is an example where we import boost. 

```
# find a boost install with the libraries filesystem and system
find_package (Boost 1.46.1 REQUIRED COMPONENTS filesystem system)

# check if boost was found
if(Boost_FOUND)
    message ("boost found")
else()
    message (FATAL_ERROR "Cannot find Boost")
endif()

# Add an executable
add_executable (third_party_include main.cpp)

# link against the boost libraries
target_link_libraries ( third_party_include
    PRIVATE Boost::filesystem
)
```

## Build the CMake Project

To build the CMake project,

1. (optional) create a `build` folder right beside the `CMakeLists.txt` file and navigate into it.
2. Run `cmake ..` where `..` represent the path to the directory where `CMakeLists.txt` is.
3. This should generate a `makefile`. To finalize the build, simply run `make` to compile to project.

> Tips: **`cmake -S . -B build` to output the build to the build directory from the project root.**
> 

## Passing and Using CLI Arguements in CMake

Sometime you would like the builder to specify a particular built option or flags. To do this, you can use the `-D` command along with the `cmake` command to specify a key value pair. For example, if you would like to set the flag `BUILD_MODE` to `DEBUG` which is used inside your CMakeList.txt. You will do the following:

```bash
cmake ... -DBUILD_MODE=DEBUG
```

To use check if this flag exist, inside CMakeList.txt do the following. For a list of boolean operator, refer to [this documentation](https://cmake.org/cmake/help/latest/command/if.html)

```
if( NOT DEFINED BUILD_MODE )
	message( FATAL_ERROR "Must specify an flag. Exiting" )
else if ( ${BUILD_MODE} STREQUAL "DEBUG" )
	# Do stuff if it is debug
else()
	# Default case
endif()
```

## Installing Header, Library, and Built Binary

```
# Create add executable
add_executable(my_perfect_application src/main.cpp)

# link library
target_link_libraries( my_perfect_application PRIVATE my_perfect_lib)

install (TARGETS my_perfect_application DESTINATION bin) 
# here bin is the path/directory to store the executable

# Install the library at a desired location (only needed for shared lib)
install(TARGETS my_perfect_lib LIBRARY DESTINATION lib)

# Install the header ( if needed )
install(DIRECTORY src/include/ DESTINATION include)
```

## Creating Unit Test

Refer to this [guide](https://google.github.io/googletest/quickstart-cmake.html) for initializing unit test in a CMake project.