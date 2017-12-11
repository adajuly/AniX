![logo](https://github.com/a-jie/AniX/blob/master/logo/logo.png?raw=true)


##### AniX - Super easy and lightweight transitions animation library.

## Overview
AniX is a lightweight and easy-to-use animation library with excellent performance and good compatibility for modern browsers.  

It uses the native **css transition** attribute, better than js simulation animation performance. And can use hardware acceleration.  

AniX is less than **3k(gzip)** in size, and it does not change your coding habit as much as possible.
There are multiple versions of the AniX option, [umd version](https://raw.githubusercontent.com/a-jie/AniX/master/dist/umd/anix.umd.js), [jQuery version](https://raw.githubusercontent.com/a-jie/AniX/master/dist/jq/anix.jq.js), [Angular version](https://github.com/a-jie/NgxAni), [React version](https://github.com/a-jie/react-anix) and [Vue version](https://github.com/GeoffZhu/vue-anix)...

## Install and Include

#### Install and manage with npm.

```bash
$ npm install anix --save-dev
```
```js
import { AniX } from 'anix';
```
[![anix](https://nodei.co/npm/anix.png)](https://npmjs.org/package/anix)

#### The umd version [anix.umd.js](https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js). Check out the [UMD](https://github.com/umdjs/umd) repository for more details.

```html
<script src="./js/anix.umd.ts" type="text/javascript"></script>
```

#### jQuery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js), that supports chain syntax.

```html
<script src="./js/jquery.js" type="text/javascript"></script>
<script src="./js/anix.jq.ts" type="text/javascript"></script>
```

## Usage

use the pure AniX library.

```js
AniX.to(dom, 1, {
    width: "200px",
    height: "100px",
    x: 300,
    scale: 2,
    delay: 0.5,
    onComplete: function(){
      	alert("over");
    }
});

// or 
AniX.to(dom, 1, {
    "width": "200px",
    "background-color": "#ffcc00",
    "onComplete": () => {
        //STATE : COMPLETED!
        console.log("STATE : COMPLETED!");
    }
});
```
use jquery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js)

```js
$('.con').css({'left':'0px'}).to(.5, {
    'left': Math.random() * $(window).width() + 'px',
    'background-color': getRandomColor()
});
```

## Documentation
vist on [https://a-jie.github.io/AniX/](https://a-jie.github.io/AniX/)

#### the jquery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js)
```js
//AniX.to
$(..).to(time: number, args: {ease?:string; delay?:number; [propName:string]:any;})

//AniX.fromTo
$(..).fromTo(time: number, fromArgs: Object, toArgs: Object)

//AniX.kill
$(..).kill(complete?: boolean)

//AniX.get
$(..).getTransform(param: any)

//AniX.ease
$.ease.easeOut
```

#### about the React version [react-anix](https://github.com/a-jie/react-anix)
```js
//1. import module
import { Anix } from 'react-anix';

<Anix 
  anis = {[
    { left: '120px', background: '#000', time: .5 },
    { background: color, width: 0, time: .5, onComplete: this.aniComplete.bind(this), disAppear: true },
    { time: .5, from: { width: '0px' }, to: { width: '350px', background: color, delay: .1 }, appear: true }
  ]}
	
  // or 
  ani={{ left:'20px', time:.5, delay: 1 }}
  
  // or 
  appear={{ left:'20px', time:.5 }}
  
  control animation play
  play={this.state.play}
  >
  ...
  </Anix>
```

#### about the Angular version [ngxAni](https://github.com/a-jie/NgxAni)
```js
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


## Test and Build

#### build all task
```bash
git clone git@github.com:a-jie/AniX.git
npm install
npm run all
```

#### build jq and umd
```bash
npm run jq
npm run umd
```

#### test and build example (the document page) made by [create-react-app](https://github.com/facebookincubator/create-react-app)

```bash
cd ./example
npm install
npm start
npm run build
```
view on http://localhost:3000/

#### debug the test page
view the ./test/test.html

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).
