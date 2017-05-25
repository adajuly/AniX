# AniX

The Simplest Animation Plugin for react.

## Overview
AniX is an animation plugin for react.   

It is very simple and convenient to use. At the same time it has very good compatibility.   

## Install or Include

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

import and use the AniX library.

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

## Examples

```
npm start
```
view on http://localhost:3000/

## License

[The BSD License](https://opensource.org/licenses/BSD-3-Clause).