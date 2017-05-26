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
                        <p>
                        AniX is a lightweight and easy-to-use animation library with excellent performance and good compatibility for modern browsers. <br/> </p>

                        <p>It uses the native <b>css transition</b> attribute, better than js simulation animation performance. And can use hardware acceleration. <br/> </p>
 
                        <p>AniX is less than <b>10k</b> in size, and it does not change your coding habit as much as possible.<br/>
                        There are multiple versions of the AniX option, <a href="https://github.com/a-jie/AniX/blob/master/dist/umd/anix.umd.js">umd version</a>, <a href="https://github.com/a-jie/AniX/blob/master/dist/jq/anix.jq.js">jQuery version</a> and <a href="https://github.com/a-jie/react-anix">react version</a>...

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