import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/anix';
import './Demo7.css';

export class Demo7 extends Component {

    code = `
AniX.kill(dom);
`;

    animation() {
        let w = Math.min(Util.getWidth() - 150, 600);

        AniX.fromTo(this.refs.rect, 5,
            AniX.getTransform({ x: 0 }),
            AniX.getTransform({ x: w })
        );
    }

    kill() {
        AniX.kill(this.refs.rect);
    }

    render() {
        return (
            <div>
                <h4 id="demo7">AniX.kill</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>
                <button className="pointer btn btn-primary rbtn" onClick={this.kill.bind(this)}>kill</button>
                <div className="rect color7" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}