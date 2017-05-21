import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { AniX } from '../../../../../dist/anix/';
import './Demo4.css';

export class Demo4 extends Component {

    constructor(props) {
        super(props);
        this.data = [
            { 'link': '/tel', 'name': '手机号验证' },
            { 'link': '/edit', 'name': '填写基本信息' }
        ];

        this.state = { 'stateText': 'STATE : NONE!' };
    }

    changeHandler(use) {
        AniX.useTranstionEvent = use;
    }

    code = `
//Whether to use the native transtionend event - there are compatibility issues
//the default is use setTimeout
AniX.useTranstionEvent = true or false;

AniX.to(dom, 1, {
    "width": "200px",
    "background-color": "#ffcc00",
    "onComplete": () => {
        //STATE : COMPLETED!
        console.log("STATE : COMPLETED!");
    }
});
`;

    animation() {
        this.setState({ 'stateText': "STATE : running" });

        let scale = Math.random() * 1.2;
        let rotate = Math.random() * 400;

        AniX.to(this.refs.rect, 1, {
            "transform": `scale(${scale}) rotate(${rotate}deg)`,
            "-webkit-transform": `scale(${scale}) rotate(${rotate}deg)`,
            "-ms-transform": `scale(${scale}) rotate(${rotate}deg)`,
            "background-color": Util.getRandomColor(),
            "onComplete": () => {
                this.setState({ 'stateText': "STATE : COMPLETED!" });
            }
        });
    }

    render() {
        return (
            <div>
                <h4 id="demo4">onComplete event</h4>
                <button className="pointer btn btn-primary" onClick={this.animation.bind(this)}>click animate</button>
                <div>
                    <label className="radio">
                        <input type="radio" name="optionsRadios" value="false" onChange={this.changeHandler.bind(this, false)} defaultChecked={true} />
                        use settimeout
                    </label>

                    <label className="radio">
                        <input type="radio" name="optionsRadios" value="true" onChange={this.changeHandler.bind(this, true)} />
                        use transtionEvent
                    </label>

                    <span style={{ 'color': '#0275d8' }}>{this.state.stateText}</span>
                </div>

                <div className="rect color4" ref="rect"></div>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}
