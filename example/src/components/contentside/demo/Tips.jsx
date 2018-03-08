import React, { Component } from 'react';
import './Tips.css';

export class Tips extends Component {

    render() {
        return (
            <div className="tips-con">
                { this.props.children }
                <div className="tips-sq"></div>
            </div>
        );
    }
}
