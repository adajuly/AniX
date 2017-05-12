import { Component, ElementRef } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'demo8',
    template: `
    <h4 id="demo8">others</h4>
    <pre><code class="typescript">{{code}}</code></pre>
    `,

    styles: [
        '.rbtn{margin-left:15px; background-color:#ff0000; border:0;}',
        '.rect{background-color:#ffcc22;}'
    ]
})

export class Demo8Component {

    constructor(private ngxAni: NgxAni) { }

    private code = `
//////////////////// NgxAni ////////////////////
//use css transtionend event
this.ngxAni.useTranstionEvent = true;
//Compatible with old browsers, old browsers do not have animation
this.ngxAni.compatible = true;
//debug mode
this.ngxAni.debug = true;
//(readonly) has css Transition?
console.log(this.ngxani.support);

//////////////////// NgxCss ////////////////////
//is support css translate3d?
this.ngxCss.has3d();
//get css prefix
this.ngxCss.getPrefix();
//set transformOrigin to  center center;
this.ngxCss.setOriginCenter(ele: HTMLElement);
`;

    private animation(rect: ElementRef) {
        this.ngxAni.fromTo(rect, 5,
            this.ngxAni.getTransform({ x: 0 }),
            this.ngxAni.getTransform({ x: 600 })
        );
    }

    private kill(rect: ElementRef) {
        this.ngxAni.kill(rect);
    }

}
