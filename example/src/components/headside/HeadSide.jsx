import React, { Component } from 'react';

export class HeadSide extends Component {

    clickHandler(url) {
        location.href = url;
    }

    render() {

        return (
            <div className="head-side">
                <div className="container">
                    <div className="col-md-8 col-md-offset-2" style={{ 'marginBottom': '5px', 'textAlign': 'center' }}>
                        <div className='top-logo'></div>
                    
                        <h1 className="t1 white fir-title">AniX</h1>
                        <h3 className="t3 white sec-title" style={{ opacity: 0.6 }}>Super easy and lightweight css animation library.</h3>
                    </div>

                </div>
            </div>
        );
    }

}
