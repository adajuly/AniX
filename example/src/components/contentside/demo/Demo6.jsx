import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo6.css';

export default class Demo2 extends Component {

    code = `
 animation(rect) {
    AniX.fromTo(rect, 1,
        {
            width: "100px",
            marginLeft: "0px",
            backgroundColor: this.getRandomColor()
        }, {
            width: "300px",
            marginLeft: "100px",
            backgroundColor: this.getRandomColor()
        });
}
`;

    animation(rect) {
        let w = Util.getWidth() < 500 ? "10px" : "300px";
        AniX.fromTo(rect, 1,
            {
                width: "100px",
                marginLeft: "0px",
                backgroundColor: Util.getRandomColor()
            }, {
                width: w,
                marginLeft: "200px",
                backgroundColor: Util.getRandomColor()
            });
    }

    render() {
        return (
            <div>
                <h4 id="demo6">use className</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>

    <div class="rect" #rect></div>
    <pre><code class="javascript">{{code}}</code></pre>
            </div>
        );
    }
}






import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxAni } from '../../../../src';
import { NgxCss } from '../../../../src';

@Component({
    selector: 'demo6',
    template: `
    
    `,
    styles: [
        'span{font-size:16px;padding-left:20px;}',
        '.rect{background-color:#999}'
    ]
})

export class Demo6Component {

    constructor(private ngxAni: NgxAni, private ngxCss: NgxCss) { }

    private code = `
/** css style
.ani1 {
    background-color: #ff0000 !important;
    border-radius: 100%;
    transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
    -webkit-transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
    -ms-transform: translate3d(300px, 0, 0) rotateY(720deg) scale(1.5);
}
*/

private animation(rect){
  this.ngxAni.to(rect, 1, { "className": "ani1" });
}
`;

    private animation(rect) {
        this.ngxCss.removeClass(rect, "ani1");
        this.ngxAni.fromTo(rect, 1,
            { "className": "ani0" },
            { "className": "ani1" }
        );
    }

    private getWidth(): number {
        return document.body.clientWidth || document.documentElement.clientWidth || window.screen.availWidth;
    }

}
