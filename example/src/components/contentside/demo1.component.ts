import { Component, ElementRef } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'demo1',

    template: `
    <h4 id="demo1">this.ngxAni.to(element, time, toArgs)</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
    <div class="container">
      <div class="rect" #rect></div>
    </div>
    <pre><code class="typescript">{{code}}</code></pre>
    `,

    styles: [
        '.container{height: 120px;}',
        '.rect{background-color: #ff0000}'
    ]
})

export class Demo1Component {

    constructor(private ngxAni: NgxAni) { }

    private code: string = `
private animation(rect){
  this.ngxAni.to(rect, 1, {
      width: Math.random() * 500 + "px",
      height: (Math.random() * 60 + 40) + "px",
      backgroundColor: this.getRandomColor()
  });
}
`;

    private animation(rect: ElementRef) {
        let w: number = Math.min(this.getWidth() - 80, 500);

        this.ngxAni.to(rect, .85, {
            width: Math.random() * w + "px",
            height: (Math.random() * 80 + 20) + "px",
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
