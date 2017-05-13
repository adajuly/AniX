import React, { Component } from 'react';

export class HeadSide extends Component {
    
    render() {
        
        return (
            <div className="head-side">
                <div className="container">
                    <div className="col-md-9">
                        <h1>AniX</h1>
                        <h4>The Simplest Animation Plugin for react.</h4>
                    </div>

                    <button className="btn btn-primary" href='https://github.com/a-jie/AniX'>Download</button>
                    <button className="btn btn-primary" href='https://www.npmjs.com/package/anix'>Npm</button>
                </div>
            </div>
        );
    }

}
