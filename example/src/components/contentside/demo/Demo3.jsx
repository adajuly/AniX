import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/cjs';
import './Demo3.css';

export class Demo3 extends Component {

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

  //2. use AniX.getTransform
  AniX.to(rect, .7, AniX.getTransform({ rotate: rotate, x: x }));
}
`;

    animation() {
        let w = Math.min(Util.getWidth() - 145, 600);
        AniX.to(this.refs.rect, .7,
            AniX.getTransform({ rotate: Math.random() * 360, x: Math.random() * w }));
    }

    render() {
        return (
            <div>
                <h4 id="demo3">css transform</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>
                <div className="rect" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}
