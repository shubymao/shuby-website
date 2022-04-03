---
order: 2
title: 'Setting Up Node JS'
author: 'Shuby Mao'
date: '2022-02-16T18:24:00.000Z'
category: 'Typescript/JavaScript'
tags: []
emoji: '⏺️'
---
## Setting Up Node Version Manager

You may work with many projects that require you to quickly switch back and forth between versions. `nvm` or node version manager allows you to do this. To install this follow the following instruction.

### Linux/Unix

First, install curl using your package manager. You can use **`sudo apt install curl`** if you are on a Debian-based system (ubuntu, Debian).

### macOS/Unix

Install [homebrew](https://brew.sh/) if you are on Unix and run `brew install nvm`.

### Windows (Not Recommended, Use WSL instead)

Download the installer [here](https://github.com/coreybutler/nvm-windows) and install it.

### Common Commands For NVM

`nvm ls` installed versions of node-js for the current user.

`nvm ls-remote` shows the available version remotely you can install

`nvm install <version>` install that particular version of node. You can also use `node` for the latest.

`nvm use <version>` to switch to a particular version for that particular session.

`nvm alias default <version>` to set default version.****