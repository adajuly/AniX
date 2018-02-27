import React, { Component } from 'react';

export class HeadSide extends Component {

    clickHandler(url){
        location.href = url;
    }

    render() {
        
        return (
            <div className="head-side">
                <div className="container">
                    <div className="col-md-9" style={{'marginBottom':'20px'}}>
                        <h1 className="t1">AniX</h1>
                        <h3 className="t3">Super easy and lightweight css animation library.</h3>
                    </div>

                    <button className="btn btn-primary" onClick={this.clickHandler.bind(this,'https://github.com/a-jie/AniX')}>Github</button>
                    <button className="btn btn-primary" onClick={this.clickHandler.bind(this,'https://www.npmjs.com/package/anix')}>Npm</button>
                </div>
            </div>
        );
    }

}
