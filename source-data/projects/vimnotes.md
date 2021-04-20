---
name: 'Vim Notes'
date: '2021-04-19T05:22:16.284Z'
---

## Acronyms

To condense the commands and location, some alias are created to indicate certain keyword.

| Key          |  Alias  | Description                |
| ------------ | :-----: | -------------------------- |
| Ctrl+?       | `<C-?>` | Control key plus other key |
| Escape       | `<Esc>` | Escape key                 |
| Shift+?      | `<S-?>` | Shift key plus other key   |
| Enter        | `<br>`  | Enter key                  |
| Insert Mode  |  `(i)`  | Within insert mode         |
| Command Mode |  `(c)`  | Within command mode        |
| In Terminal  |  `(t)`  | Within terminal            |

## File Operation

File option are used to open close and switch between files

| Description                              | Location | Command                               |
| ---------------------------------------- | :------: | ------------------------------------- |
| Open File                                |   (t)    | `vi ./file_name` or `vim ./file_name` |
| Open file to new buffer                  |   (c)    | `:e filename`                         |
| Close and delete buffer                  |   (c)    | `:bd`                                 |
| Save and go to next buffer               |   (c)    | `:wn`                                 |
| Don't save and next buffer (!set hidden) |   (c)    | `:bn`                                 |
| List opened buffers                      |   (c)    | `:ls`                                 |
| Close File save                          |   (c)    | `:wq`                                 |
| Close File ingnore save                  |   (c)    | `:q!`                                 |
| Close File no change exit                |   (c)    | `:q`                                  |

## Editing Operation

Editing command are used for modifying files and performing searching operation.

| Description                          | Location | Command                       |
| ------------------------------------ | :------: | ----------------------------- |
| Enter Edit Mode                      |   (c)    | `i`                           |
| Enter Command Mode                   |   (i)    | `<Esc>` or `<C-c>` or `<C-[>` |
| Undo                                 |   (c)    | `u` or `#u` undo # step       |
| Redo                                 |   (c)    | `<C-r>`                       |
| Start Select From Cursor             |   (c)    | `v`                           |
| Start Select By Line                 |   (c)    | `V`                           |
| Copy Selected                        |   (c)    | `y`                           |
| Copy line                            |   (c)    | `yy`                          |
| Cut/Delete Selected                  |   (c)    | `d`                           |
| Cut/Delete Line                      |   (c)    | `dd`                          |
| Paste Cut/Copied                     |   (c)    | `p`                           |
| Search                               |   (c)    | `/.pattern<br>`               |
| Get next occurence                   |   (c)    | `n`                           |
| Search and Replace with Confirmation |   (c)    | `:%s/old/new/gc<br>`          |
| Search and Replace All               |   (c)    | `:%s/old/new/g<br>`           |

## Navigation Operation

| Description                      | Location | Command                                               |
| -------------------------------- | :------: | ----------------------------------------------------- |
| Basic Cursor Movement            |  (c,i)   | Left &#8592;, Up &#8593;, Down &#8595;, Right &#8594; |
| Basic Cursor Movement            |   (c)    | Left `h`, Down `j`, Up `k`, Right `l`                 |
| Move Cursor to end of line       |  (c,i)   | `End` or `$` (c only)                                 |
| Move Cursor to beginning of line |  (c,i)   | `Home` or `^` (c only)                                |
| Move Corsor to end of file       |  (c,i)   | `<C-End>` or `<S-g>` (c only)                         |
| Move Corsor to beginning of file |  (c,i)   | `<C-Home>` or `gg` (c only)                           |

## Other Operation

| Description          | Location | Command |
| -------------------- | :------: | ------- |
| List current mapping |   (c)    | `:map`  |

## Configuration

Configuration are often used inside `.vimrc` files to indicate macros

### Color Configuration

### Key Mapping Configuration

| Description                         | Command or possible value |
| ----------------------------------- | ------------------------- |
| Command Mode Map Key                | `nmap {attr} {lhs} {rhs}` |
| Insert Mode Map                     | `imap {attr} {lhs} {rhs}` |
| Attribute Type - Buffer             | `<buffer>`                |
| Attribute Type - Slient             | `<silent>`                |
| Attribute Type - Expression         | `<expr>`                  |
| Attribute Type - Script             | `<script>`                |
| Attribute Type - Unique             | `<unique>`                |
| Attribute Type - Special            | `<special>`               |
| A sequence of keys key being mapped | `{lhs}`                   |
| The squence of key being mapped to  | `{rhs}`                   |
