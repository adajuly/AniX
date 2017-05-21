import React, { Component } from 'react';

export class Section1 extends Component {

    code = `
//1. import AniX
import { AniX } from 'anix';

//2. AniX.to
AniX.to(dom, 1, {
    width: "200px",
    height: "100px"
});
`;
    code1=`
$ npm install anix`;

    render() {
        return (
            <div>
                <div className="section" id="section1">
                    <h1>Overview</h1>
                    <hr />

                    <div className="info">
                        <h4 className="blur">About AniX</h4>
                        <p>AniX is an animation plugin for AngularJS2+.

                It is very simple and convenient to use. At the same time it has very good compatibility.
                <br />
                            AniX is written by <span className="color">typescript</span> and can be easily put into your angular2+ project!

                AniX is a <span className="color">Service className</span> which do not rely on any className. You can use it in any <span className="color">Component</span> or <span className="color">Directive</span>.
                </p>
                    </div>

                    <h3>Quick Start</h3>
                    <p>Install and manage AniX with <a href="https://www.npmjs.com/package/anix">npm</a>.
            </p>
                    <pre><code className="javascript">{this.code1}</code></pre>


                    <p>import and use the AniX library.</p>
                    <pre><code className="ts">{this.code}</code></pre>
                </div>
            </div>
        );
    }
}