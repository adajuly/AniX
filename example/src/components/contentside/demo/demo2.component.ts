import { Component } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'demo2',

    template: `
    <h4 id="demo2">this.ngxAni.fromTo(element, time, fromArgs, toArgs)</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
    <div class="rect" #rect></div>
    <pre><code class="typescript">{{code}}</code></pre>
    `,

    styles: ['.rect{background-color:#ccff00}']
})

export class Demo2Component {

    constructor(private ngxAni: NgxAni) { }

    private code: string = `
private animation(rect) {
    this.ngxAni.fromTo(rect, 1,
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

    private animation(rect) {
        let w: string = this.getWidth() < 500 ? "10px" : "300px";
        this.ngxAni.fromTo(rect, 1,
            {
                width: "100px",
                marginLeft: "0px",
                backgroundColor: this.getRandomColor()
            }, {
                width: w,
                marginLeft: "200px",
                backgroundColor: this.getRandomColor()
            });
    }

    private getRandomColor(): string {
        return '#' + (function(h) {
            return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16))
    }

    private getWidth(): number {
        return document.body.clientWidth|| document.documentElement.clientWidth  || window.screen.availWidth;
    }

}
