import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo2.css';

export default class Demo2 extends Component {

    code = `
 animation(rect) {
    AniX.fromTo(rect, 1,
        {
            width: "100px",
            marginLeft: "0px",
            backgroundColor: this.getRandomColor()
        }, {
            width: "300px",
            marginLeft: "100px",
            backgroundColor: this.getRandomColor()
        });
}
`;

    animation(rect) {
        let w = Util.getWidth() < 500 ? "10px" : "300px";
        AniX.fromTo(rect, 1,
            {
                width: "100px",
                marginLeft: "0px",
                backgroundColor: Util.getRandomColor()
            }, {
                width: w,
                marginLeft: "200px",
                backgroundColor: Util.getRandomColor()
            });
    }

    render() {
        return (
            <div>
                <h4 id="demo2">AniX.fromTo(element, time, fromArgs, toArgs)</h4>
                <button class="pointer btn btn-primary" onClick={this.animation.bind(this, 'rect')} > click animate</button >
                <div class="rect" refs='rect'></div>
                <pre><code class="javascript">{{ code }}</code></pre>
            </div>
        );
    }
}