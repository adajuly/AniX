# AniX

Super easy and flexible transitions animation tools.

## Overview
AniX is an animation plugin for react.   

It is very simple and convenient to use. At the same time it has very good compatibility.   

## Install and Include

#### Install and manage with npm.

```
$ npm install anix --save-dev
...

import { AniX } from 'anix';
```
[![rc-animate](https://nodei.co/npm/anix.png)](https://npmjs.org/package/anix)

#### the umd version [anix.umd.js](https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js)

```
<script src="./js/anix.umd.ts" type="text/javascript"></script>
```

#### jquery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js)

```
<script src="./js/jquery.js" type="text/javascript"></script>
<script src="./js/anix.jq.ts" type="text/javascript"></script>
```

## Usage

use the pure AniX library.

```
AniX.to(dom, 1, {
    width: "200px",
    height: "100px",
    delay: 0.5,
    onComplete: function(){
      	alert("over");
    }
});
```
use jquery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js)

```
$('.con').css({'left':'0px'}).to(.5, {
    'left': Math.random() * $(window).width() + 'px',
    'background-color': getRandomColor()
});
```

## Documentation
vist on [https://a-jie.github.io/AniX/](https://a-jie.github.io/AniX/)

#### the jquery plugin anix.jq.js Api
```
//AniX.to
$(..).to(time: number, args: {ease?:string; delay?:number; [propName:string]:any;})

//AniX.fromTo
$(..).to(time: number, fromArgs: Object, toArgs: Object)

//AniX.kill
$(..).kill(complete?: boolean)

//AniX.get
$(..).getTransform(param: any)

//AniX.ease
$.ease.easeOut
```


## Test and Build

#### build all task
```
npm install
npm run all
```

#### build jq and umd
```
npm run jq
npm run umd
```

#### test and build example (the document page) made by [create-react-app](https://github.com/facebookincubator/create-react-app)

```
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