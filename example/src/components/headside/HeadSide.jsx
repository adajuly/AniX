import React, { Component } from 'react';

export default class HeadSide extends Component {

    download() {
        location.href = "https://github.com/a-jie/NgxAni";
    }

    npm() {
        location.href = "https://www.npmjs.com/package/ngxani";
    }
    
    render() {
        return (
            <div class="head-side">
                <div class="container">
                    <div class="col-md-9">
                        <h1>NgxAni</h1>
                        <h4>A Simple Animation Plugin for Angular2+.</h4>
                    </div>

                    <button class="btn btn-primary" onClick={this.download.bind(this)} >Download</button>
                    <button class="btn btn-primary" onClick={this.npm.bind(this)} >Npm</button>
                </div>
            </div>
        );
    }
}