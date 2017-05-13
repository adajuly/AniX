import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo7.css';

export default class Demo7 extends Component {

    code = `
this.ngxAni.kill(rect);
`;

    animation(refName) {
        let w = Math.min(this.getWidth() - 150, 600);

        this.ngxAni.fromTo(this.refs.refName, 5,
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
    <button class="pointer btn btn-primary" onClick={this.animation.bind(this,"rect")}>click animate</button>
    <button class="pointer btn btn-primary rbtn" onClick={this.kill.bind(this,"rect")}>kill</button>
    <div class="rect" ref="rect"></div>
    <pre><code class="javascript">{this.code}</code></pre>
            </div>
        );
    }
}