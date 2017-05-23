import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/anix';
import { Anix } from './react.anix.jsx';

import './Demo1.css';

export class Demo1 extends Component {


    constructor(props) {
        super(props);


        this.state = {
            play: false,
            anix: true,
            current:3
        }

        this.anis = [{
            time: 2,
            from: { width: '220px', backgroundColor: '#000' },
            to: { width: '20px', backgroundColor: '#ffcc22' },
            name: 'play',
            appear: true
        }]

    }


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

        this.setState({ play: true, anix: !this.state.anix,current:this.state.current+(this.state.anix?-2:2) });
    }

    render() {
        var children = [];
        var pos = 0;
        var colors = ['red', 'gray', 'blue'];
        for (var i = 0; i < this.state.current; i++) {
            var style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
           
            children.push(<div key={'a'+i} className="rect" style={style}>{i}</div>);
        }

        
        return (
            <div>
                <h4 id="demo1">AniX.to(element, time, toArgs)</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>
                <div className="container">
                    <div className="rect" ref="rect"></div>
                </div>
                <pre><code className="javascript">{this.code}</code></pre>


                <Anix play={this.state.play} anis={this.anis}>
                    {children}
                </Anix>

            </div>
        );
    }
}