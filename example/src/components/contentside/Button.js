import React, { Component } from 'react';

export default class Button extends Component {

    constructor(...args) {
        super(...args);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e){
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        return (
            <button className="btns bttn-unite bttn-md bttn-primary" onClick={this.clickHandler}>{this.props.children}</button>
        );
    }
}