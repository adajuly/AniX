import React, { Component } from 'react';
import Button from '../Button';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/umd/anix.umd';
import './Demo2.css';

export class Demo2 extends Component {

    code = `
AniX.fromTo(dom, 1,
    {
        width: "100px",
        marginLeft: "0px",
        backgroundColor: this.getRandomColor()
    }, {
        width: "300px",
        marginLeft: "100px",
        backgroundColor: this.getRandomColor()
    }
);
`;

    animation() {
        let w = Util.getWidth() < 500 ? "10px" : "300px";
        AniX.fromTo(this.refs.rect, 1,
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
                <Button onClick={this.animation.bind(this)} > click animate</Button>
                
                <div className="rect color2" ref='rect'></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}