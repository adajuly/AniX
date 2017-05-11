# AniX

The Simplest Animation Plugin for react.

## Overview
AniX is an animation plugin for react.   

It is very simple and convenient to use. At the same time it has very good compatibility.   

## Install and Usage
Quick Start
Install and manage AniX with npm.

```
$ npm install anix --save
```

import and use the AniX library.

```
//1. import module
import { AniX } from 'anix';

//2. use
//<button (click)="animation(rect)">click animate</button>
//<div class="rect" #rect></div>
private animation(dom: ElementRef) {
  this.AniX.to(dom, 1, {
      width: "200px",
      height: "100px"
  });
}
```

## Examples

```
npm start
```
view on http://localhost:4200/

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).