import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo7.css';

export default class Demo7 extends Component {

    code = `
this.ngxAni.kill(rect);
`;

    animation(rect) {
        let w = Math.min(this.getWidth() - 150, 600);

        this.ngxAni.fromTo(rect, 5,
            this.ngxAni.getTransform({ x: 0 }),
            this.ngxAni.getTransform({ x: w })
        );
    }

    kill(rect) {
        this.ngxAni.kill(rect);
    }

    render() {
        return (
            <div>
                <h4 id="demo7">this.ngxAni.kill</h4>
    <button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
    <button class="pointer btn btn-primary rbtn" (click)="kill(rect)">kill</button>
    <div class="rect" #rect></div>
    <pre><code class="javascript">{{code}}</code></pre>
            </div>
        );
    }
}