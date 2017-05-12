import { Component, ElementRef } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'demo7',
    template: `
    <h4 id="demo7">this.ngxAni.kill</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
    <button class="pointer btn btn-primary rbtn" (click)="kill(rect)">kill</button>
    <div class="rect" #rect></div>
    <pre><code class="typescript">{{code}}</code></pre>
    `,

    styles: [
        '.rbtn{margin-left:15px; background-color:#ff0000; border:0;}',
        '.rect{background-color:#ffcc22;}'
    ]
})

export class Demo7Component {

    constructor(private ngxAni: NgxAni) { }

    private code = `
this.ngxAni.kill(rect);
`;

    private animation(rect: ElementRef) {
        let w: number = Math.min(this.getWidth() - 150, 600);

        this.ngxAni.fromTo(rect, 5,
            this.ngxAni.getTransform({ x: 0 }),
            this.ngxAni.getTransform({ x: w })
        );
    }

    private kill(rect: ElementRef) {
        this.ngxAni.kill(rect);
    }

    private getWidth(): number {
        return document.body.clientWidth || document.documentElement.clientWidth || window.screen.availWidth;
    }

}
