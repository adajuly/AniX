import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo3.css';

export default class Demo4 extends Component {

    code = `
animation(rect){
  let x = Math.random() * 600;
  let rotate = Math.random() * 360;

  ////////////////////////two methods////////////////////////
  //1. use prefix
  AniX.to(rect, .7, {
    "transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-webkit-transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-ms-transform" : "translate3d(100px, 0, 0) rotate(120deg)"
  });

  //2. use ngxAni.getTransform
  AniX.to(rect, .7, AniX.getTransform({ rotate: rotate, x: x }));
}
`;

    animation(rect) {
        let w = Math.min(this.getWidth() - 145, 600);
        AniX.to(rect, .7, AniX.getTransform({ rotate: Math.random() * 360, x: Math.random() * w }));
    }

    render() {
        return (
            <div>
                <h4 id="demo3">css transform</h4>
                <button class="pointer btn btn-primary" onClick={this.animation.bind(this, 'rect')}>click animate</button>
                <div class="rect" refs="rect"></div>
                <pre><code class="typescript">{{ code }}</code></pre>
            </div>
        );
    }
}







// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { NgxAni } from '../../../../src';

// @Component({
//     selector: 'demo4',
//     template: `
//     <h4 id="demo4">onComplete event</h4>
//     <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
//     <div>
//       <label class="radio">
//         <input type="radio" name="optionsRadios" value="false" (change)="changeHandler(false)" checked>
//         use settimeout
//       </label>

//       <label class="radio">
//         <input type="radio" name="optionsRadios" value="true" (change)="changeHandler(true)">
//         use transtionEvent
//       </label>

//     <span style='color:#0275d8' #result>STATE : none</span>
//     </div>

//     <div class="rect" #rect></div>
//     <pre><code class="typescript">{{code}}</code></pre>
//     `,
//     styles: [
//         'span{font-size:16px;padding-left:20px;}',
//         '.rect{background-color:#00cc00}'
//     ]
// })

// export class Demo4Component {

//     constructor(private ngxAni: NgxAni) { }

//     @ViewChild('result') result: ElementRef;

//     private changeHandler(use) {
//         this.ngxAni.useTranstionEvent = use;
//     }

//     private code = `
// private animation(rect){
//   //Whether to use the native transtionend event - there are compatibility issues
//   //the default is use setTimeout
//   this.ngxAni.useTranstionEvent = true or false;

//   this.ngxAni.to(rect, 1, {
//       "width": "200px",
//       "background-color": "#ffcc00",
//       "onComplete": () => {
//           //STATE : COMPLETED!
//           console.log("STATE : COMPLETED!");
//       }
//   });
// }
// `;

//     private animation(rect) {
//         this.result.nativeElement.innerHTML = "<span style='color:#0275d8'>STATE : running</span>";

//         let scale = Math.random() * 1.2;
//         let rotate = Math.random() * 400;

//         this.ngxAni.to(rect, 1, {
//             "transform": `scale(${scale}) rotate(${rotate}deg)`,
//             "-webkit-transform": `scale(${scale}) rotate(${rotate}deg)`,
//             "-ms-transform": `scale(${scale}) rotate(${rotate}deg)`,
//             "background-color": this.getRandomColor(),
//             "onComplete": () => {
//                 this.result.nativeElement.innerHTML = "<span style='color:#ff0000'>STATE : COMPLETED!</span>";
//             }
//         });
//     }

//     private getRandomColor() {
//         return '#' + (function(h) {
//             return new Array(7 - h.length).join("0") + h
//         })((Math.random() * 0x1000000 << 0).toString(16))
//     }

// }
