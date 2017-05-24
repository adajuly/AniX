import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/umd/anix.umd';

import './Demo1.css';

export class Demo1 extends Component {

    code = `
AniX.to(dom, 1, {
    width: Math.random() * 500 + "px",
    height: (Math.random() * 60 + 40) + "px",
    backgroundColor: this.getRandomColor()
});
`;

    animation() {
        let w = Math.min(Util.getWidth() - 80, 500);

        AniX.to(this.refs.rect, .85, {
            width: Math.random() * w + "px",
            height: (Math.random() * 80 + 20) + "px",
            backgroundColor: Util.getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <h4 id="demo1">AniX.to(element, time, toArgs)</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>
                <div className="container">
                    <div className="rect" ref="rect"></div>
                </div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}