import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/cjs';
import './Demo3.css';

export default class Demo3 extends Component {

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
                <button class="pointer btn btn-primary" onClick={this.animation.bind(this, this.refs.rect)}>click animate</button>
                <div class="rect" ref="rect"></div>
                <pre><code class="javascript">{this.code}</code></pre>
            </div>
        );
    }
}
