import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo3.css';

export default class Demo5 extends Component {

      ease: string = "easeOutBack";

     datas = [
        'linear',
        'easeBasic',
        'easeIn',
        'easeOut',
        'easeInOut',
        'easeOutCubic',
        'easeInOutCubic',
        'easeInCirc',
        'easeOutCirc',
        'easeInOutCirc',
        'easeInQuad',
        'easeOutQuad',
        'easeInOutQuad',
        'easeInQuart',
        'easeOutQuart',
        'easeInOutQuart',
        'easeInQuint',
        'easeOutQuint',
        'easeInOutQuint',
        'easeInSine',
        'easeOutSine',
        'easeInOutSine',
        'easeInBack',
        'easeOutBack',
        'easeInOutBack'
    ];

     code = `
 animation(rect){
  this.ngxAni.to(rect, 1, {
      "width": "200px",
      "background-color": "#ffcc00",
      "ease": this.ngxAni.easeOutBack
  });
}
`;

    //animation function
     animation(rect) {
        let w: number = Math.min(this.getWidth() - 150, 450);

        this.ngxAni.fromTo(rect, .7,
            this.ngxAni.getTransform({ x: 0, rotate: 0, scale: 1 }),
            Object.assign(
                this.ngxAni.getTransform({ x: w, rotate: 180, scale: .4 }),
                {
                    ease: this.ngxAni[this.ease]
                }
            ));
    }

    render() {
        return (
            <div>
                <h4 id="demo5">ease function</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>

    <select class="form-control select" [(ngModel)]="ease">
      <option *ngFor="let data of datas">{{data}}</option>
    </select>

    <div class="rect" #rect></div>
    <pre><code class="typescript">{{code}}</code></pre>
            </div>
        );
    }
}

