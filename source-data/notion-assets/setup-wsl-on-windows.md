---
title: 'Setup WSL On Windows'
author: 'Shuby Mao'
date: '2022-02-12T08:23:00.000Z'
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

![Untitled](Setup%20WSL%20On%20Windows%20a5a481028c4740c88d1c3014e122f3b2/Untitled.png)

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

### Theme

Install power level 10k theme by following the instruction on the GitHub repository [here](https://github.com/romkatv/powerlevel10k#oh-my-zsh). TLDR. Install font here and run one-line install below

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

### Configure Vim

Follow the steps [here](https://github.com/amix/vimrc) to set up your vim configuration. TLDR Command

```
git clone --depth=1 https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

### Install Docker
