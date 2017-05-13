import React, { Component } from 'react';

export class HeadSide extends Component {

    download() {
        location.href = "https://github.com/a-jie/NgxAni";
    }

    npm() {
        location.href = "https://www.npmjs.com/package/ngxani";
    }
    
    render() {
        return (
            <div className="head-side">
                <div className="container">
                    <div className="col-md-9">
                        <h1>NgxAni</h1>
                        <h4>A Simple Animation Plugin for Angular2+.</h4>
                    </div>

                    <button className="btn btn-primary" onClick={this.download.bind(this)} >Download</button>
                    <button className="btn btn-primary" onClick={this.npm.bind(this)} >Npm</button>
                </div>
            </div>
        );
    }
}
