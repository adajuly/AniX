# NgxAni

A Simple Animation Plugin for Angular2+.

## Overview
NgxAni is an animation plugin for AngularJS2+.   

It is very simple and convenient to use. At the same time it has very good compatibility.   

NgxAni is a service class, do not rely on any file. You can use it in any Component or Directive.

## Install and Usage
Quick Start
Install and manage NgxAni with npm.

```
$ npm install ngxani --save
```

import and use the NgxAni library.

```
//1. import module
import { NgxAniModule } from 'ngxani';

//2. set ngModule
@NgModule({
    imports: [BrowserModule, NgxAniModule]
    ... ...

//3. import service
import { NgxAni } from 'ngxani';

//4. constructor
constructor(private ngxAni: NgxAni) { }

//5. use
//<button (click)="animation(rect)">click animate</button>
//<div class="rect" #rect></div>
private animation(dom: ElementRef) {
  this.ngxAni.to(dom, 1, {
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


## Future

NgxAni is not strongly dependent on angular2 and typescript.  
The next step I want to bring it to React[https://facebook.github.io/react/](https://facebook.github.io/react/), so stay tuned!

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).






https://github.com/ant-design/ant-motion/