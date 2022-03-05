---
order: 1
title: 'Setup WSL On Windows'
author: 'Shuby Mao'
date: '2022-02-24T23:07:00.000Z'
category: 'Linux'
tags: []
emoji: '🐧'
---
## Introduction

Windows Subsystem for Linux or WSL for short allows you to run Linux virtually within windows. This enables developers to run, test, and develop within the Linux environment as servers tend to run using Linux.

## Installing WSL

Start from a fresh windows machine. First, install the WSL by starting a power shell instance by running the following

```powershell
wsl --install
```

This will install wsl 2 by default.

## Installing Distro

Go into the Microsoft Store and install your preferred Linux distribution. Here we will install Ubuntu as many of the common workflows will have instructions for it online.

![Untitled](Setup%20WSL%20%20a5a48/Untitled.png)

You can also use the command line to perform the installation

```powershell
wsl --install -d ubuntu 
```

## Setting Up ZSH

### Install ZSH

On ubuntu simply install ZSH by running 

```bash
sudo apt install zsh -y
```

Then set the default shell to zsh using

```bash
chsh -s $(which zsh)
```

### Customizing ZSH (Optional)

To install Oh My ZSH Run

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Some notable plugins to use (Bold means not built-in)

- vscode
- node
- npm
- yarn
- nvm
- docker
- docker-compose
- **[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)**
- **[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)**

### Theme

Install power level 10k theme by following the instruction on the GitHub repository [here](https://github.com/romkatv/powerlevel10k#oh-my-zsh). TLDR. Install font here and run one-line install below

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.

### Configure Vim

Follow the steps [here](https://github.com/amix/vimrc) to set up your vim configuration. TLDR Command

```
git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

### Set Up SSH Key

To generate an ssh key for pushing to GitHub or logging into a remote terminal. Simply run 

```powershell
ssh-keygen
```

After saving the public-private key pair, simply copy the public key string to the desired location you wish to authenticate with. The default location where the file is stored is `home/<user-name>/.ssh`.

## Install Development Tools (Optional)

Note these examples are for Ubuntu or Debian systems. Other Linux distro could vary

### Java

```bash
sudo apt install default-jdk
```