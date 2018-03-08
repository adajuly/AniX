import React, { Component } from 'react';
import { AniX } from '../../../../../dist/umd/anix.umd';
import './MyButton.css';

export class MyButton extends Component {

    mosueover() {
        AniX.to(this.refs.txt, .3, { color: '#ffffff', ease: AniX.ease.linear });
        AniX.to(this.refs.bg, .3, { y: -50 });
        AniX.to(this.refs.con, .3, { scale: 1.05 });
        this.props.mover && this.props.mover('over');
    }

    mosueout() {
        AniX.to(this.refs.txt, .2, { color: '#000000', ease: AniX.ease.linear });
        AniX.to(this.refs.bg, .25, { y: 0, ease: AniX.ease.linear });
        AniX.to(this.refs.con, .3, { scale: 1 });
        this.props.mover && this.props.mover('out');
    }

    render() {
        return (
            <div className="mybutton" style={this.props.styles} ref='con' onMouseOver={this.mosueover.bind(this)} onMouseOut={this.mosueout.bind(this)}>
                <div className="mybutton-txt" ref='txt'>{this.props.children}</div>
                <div className="mybutton-bg" ref='bg'></div>
            </div>
        );
    }
}
