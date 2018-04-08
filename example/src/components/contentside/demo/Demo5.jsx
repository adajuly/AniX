import React, { Component } from 'react';
import Button from '../Button';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/umd/anix.umd';
import './Demo5.css';

export class Demo5 extends Component {

    ease = "easeOutBack";

    items = [
        'linear',
        'easeBasic',
        'easeIn',
        'easeOut',
        'easeInOut',
        'easeOutCubic',
        'easeInOutCubic',
        'easeInCirc',
        'easeOutCirc',
        'easeInOutCirc',
        'easeInQuad',
        'easeOutQuad',
        'easeInOutQuad',
        'easeInQuart',
        'easeOutQuart',
        'easeInOutQuart',
        'easeInQuint',
        'easeOutQuint',
        'easeInOutQuint',
        'easeInSine',
        'easeOutSine',
        'easeInOutSine',
        'easeInBack',
        'easeOutBack',
        'easeInOutBack'
    ];

    code = `
AniX.to(dom, 1, {
    "width": "200px",
    "background-color": "#ffcc00",
    "ease": AniX.ease.easeOutBack
});
`;

    change(e) {
        this.ease = e.target.value;
        this.setState({});
    }

    //animation function
    animation() {
        let w = Math.min(Util.getWidth() - 150, 450);

        AniX.fromTo(this.refs.rect, .7,
                { x: 0, rotate: 0, scale: 1 },
                { x: w, rotate: 180, scale: .4, ease: AniX.ease[this.ease]}
            );
    }

    render() {
        return (
            <div>
                <h4 id="demo5">ease function</h4>
                <div>
                    <Button onClick={this.animation.bind(this)}>click animate</Button>
                    <select className="form-control select nselect" style={{display:'inline'}} value={this.ease} onChange={this.change.bind(this)}>
                    {
                        (this.items.map((item, i) => {
                            return (<option key={i} value={item}>{item}</option>)
                        }))
                    }
                    </select>
                </div>

                <div className="rect color5 clearfix" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}

