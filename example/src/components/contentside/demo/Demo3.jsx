import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/anix';
import './Demo3.css';

export class Demo3 extends Component {

    code = `
let x = Math.random() * 600;
let rotate = Math.random() * 360;

////////////////////////two methods////////////////////////
//1. use prefix
AniX.to(dom, .7, {
    "transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-webkit-transform" : "translate3d(100px, 0, 0) rotate(120deg)",
    "-ms-transform" : "translate3d(100px, 0, 0) rotate(120deg)"
});

//2-1. use AniX.get
AniX.to(dom, .7, AniX.get({ rotate: rotate, x: x }));

//2-2. use transform 3d
AniX.to(dom, .7, AniX.get({ z:100, scaleX:2}));
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
                <div className="rect color3" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}
