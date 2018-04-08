import React, { Component } from 'react';
import Button from '../Button';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/umd/anix.umd';
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

                <Button onClick={this.animation.bind(this)}>click animate</Button>
                <div style={{ marginLeft: 20, display: 'inline-block' }}></div>
                <Button onClick={this.kill.bind(this)}>kill</Button>

                <div className="rect color7" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}