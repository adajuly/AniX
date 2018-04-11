import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MyButton } from './demo/MyButton';
import { Tips } from './demo/Tips';
import { AniX } from '../../../../dist/umd/anix.umd';

export class Section4 extends Component {

    code1 = `
// react simple case 
export class Button extends Component {

    constructor(...args) {
        super(...args);
        this.mosueOver = this.mosueOver.bind(this);
        this.mosueOut = this.mosueOut.bind(this);
    }

    mosueOver() {
        AniX.to(this.refs.title, .3, { color: '#ffffff', ease: AniX.ease.linear });
        AniX.to(this.refs.bg, .3, { y: -50 });
        AniX.to(this.refs.btn, .3, { scale: 1.05 });
    }
    
    mosueOut() {
        AniX.to(this.refs.title, .2, { color: '#000000', ease: AniX.ease.linear });
        AniX.to(this.refs.bg, .25, { y: 0, ease: AniX.ease.linear });
        AniX.to(this.refs.btn, .3, { scale: 1 });
    }
    
    render() {
        return (
            <div ref='btn' onMouseOver={this.mosueOver} onMouseOut={this.mosueOut}>
                <div className="button-title" ref='title'>{this.props.children}</div>
                <div className="button-bg" ref='bg'></div>
            </div>
        );
    }
}
`;

    code2 = `
if (type == 'over') {
    AniX.fromTo(tips, .6, { y: -58 }, { x: 0, y: -38, opacity: 1 });
} else {
    AniX.to(tips, .35, { y: -58, opacity: 0 });
}
`;

    mouseover(id, type) {
        const tips = ReactDOM.findDOMNode(this.refs[id]);

        if (id === 'tip1') {
            if (type === 'over') {
                AniX.fromTo(tips, .4, { x: 300, y: -38 }, { x: 0, y: -38, opacity: 1, ease: AniX.ease.easeOutBack });
            } else {
                AniX.to(tips, .35, { x: 300, y: -38, opacity: 0, ease: AniX.ease.easeInBack });
            }
        } else {
            if (type === 'over') {
                AniX.fromTo(tips, .6, { y: -58 }, { x: 0, y: -38, opacity: 1 });
            } else {
                AniX.to(tips, .35, { y: -58, opacity: 0 });
            }
        }
    }

    render() {
        return (
            <div>
                <div className="section" id="section2">
                    <h1>Demo Case</h1>
                    <hr className="hr dashed-hr" />

                    <div className="sec-con">
                        <h4 className="blur">interactive button</h4>
                        <div>
                            <MyButton>HELLO</MyButton>
                            <MyButton>HELLO</MyButton>
                            <MyButton>HELLO</MyButton>
                            <MyButton>HELLO</MyButton>
                        </div>

                        <div style={{ clear: 'both' }}>
                            <pre><code className="javascript">{this.code1}</code></pre>
                        </div>
                    </div>


                    <div className="sec-con">
                        <h4 className="blur">mouseover tips</h4>

                        <div>
                            <div className="sec-sub-con">
                                <MyButton styles={{ width: '200px' }} mover={this.mouseover.bind(this, 'tip1')}>please mouseover me!</MyButton>
                                <Tips ref='tip1'>hello world one!</Tips>
                            </div>

                            <div style={{ marginLeft: 50 }} className="sec-sub-con">
                                <MyButton styles={{ width: '200px' }} mover={this.mouseover.bind(this, 'tip2')}>please mouseover me!</MyButton>
                                <Tips ref='tip2'>hello world two!</Tips>
                            </div>
                        </div>

                        <div style={{ clear: 'both' }}>
                            <pre><code className="javascript">{this.code2}</code></pre>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}