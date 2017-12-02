import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/umd/anix.umd';
import './Demo3.css';
import ppo from 'ppo';

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

//2. use x/y/z/scale/scaleY/scaleZ/rotate 
AniX.to(dom, .7, { x: 20, y: 10, onComplete:()=>{} });
//or
AniX.to(dom, .7, { scale: 1.2, width: '100px' });

//3-1. use AniX.get
AniX.to(dom, .7, AniX.get({ rotate: rotate, x: x }));

//3-2. use normal
AniX.to(dom, .7, AniX.get({ x:100, y:20 , normal: { opacity:.5, background:'#000' } }));
`;

    animation() {
        let w = Math.min(Util.getWidth() - 145, 600);
        AniX.to(this.refs.rect, .7,
            { 
                rotate: ppo.randomFromA2B(0, 360), 
                x: ppo.randomFromA2B(0, w),
                scale: ppo.randomFromA2B(.3, 1.5)
            });
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
