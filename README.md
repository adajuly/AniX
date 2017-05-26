# AniX

Super easy and lightweight transitions animation library。

## Overview
AniX is a lightweight and easy-to-use animation library with excellent performance and good compatibility for modern browsers.  

It uses the native **css transition** attribute, better than js simulation animation performance. And can use hardware acceleration.  

AniX is less than **10k** in size, and it does not change your coding habit as much as possible.
There are multiple versions of the AniX option, [umd version](https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js), [jQuery version](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js) and [react version](https://github.com/a-jie/react-anix)...

## Install and Include

#### Install and manage with npm.

```
$ npm install anix --save-dev
...

import { AniX } from 'anix';
```
[![anix](https://nodei.co/npm/anix.png)](https://npmjs.org/package/anix)

#### The umd version [anix.umd.js](https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js). Check out the [UMD](https://github.com/umdjs/umd) repository for more details.

```
<script src="./js/anix.umd.ts" type="text/javascript"></script>
```

#### jQuery plugin [anix.jq.js](https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js), that supports chain syntax.

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
git clone git@github.com:a-jie/AniX.git
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