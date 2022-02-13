---
title: Sample Note
date: '2022-02-13T07:50:36.706Z'
author: Shuby Mao
category: Sample
omit: true
---

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

Paragraph testing generated markdown. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat et magna eu laoreet. Fusce risus urna, venenatis sed vulputate eget, pellentesque ultrices mauris. Vestibulum sollicitudin malesuada ante sed consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In euismod, eros eu fermentum porttitor, ligula turpis faucibus orci, nec euismod sem odio ut nibh. Fusce bibendum, ligula quis condimentum volutpat, nisi nisi suscipit metus, non malesuada ex metus ut felis. Integer justo urna, lacinia sed mauris eget, tristique luctus diam. Duis ornare est risus, et aliquet ipsum tristique vitae.

## Lists

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

## Links

A link to google [Here](https://www.google.com)

## Tables

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Images

Image from same origin
![same origin](/meta/preview.png)

Image from different origin
![different origin](https://github.com/shubymao/rubiks-cube-web/blob/master/public/sizes.png?raw=true)

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

## Horizontal Rules

---

## Code

```java
  public class Solution {
      public int solution(int[] A) {
          int sum = 0;
          for (int i = 0; i < A.length; i++) {
              sum += A[i];
          }
          return sum;
      }
  }
```
