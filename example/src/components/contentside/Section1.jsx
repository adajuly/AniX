import React, { Component } from 'react';

export class Section1 extends Component {

    code1 = `
$ npm install anix`;

    code2 = `
<script src="./js/anix.umd.ts" type="text/javascript"></script>`;

    code3 = `
<script src="./js/jquery.js" type="text/javascript"></script>
<script src="./js/anix.jq.ts" type="text/javascript"></script>`;

    code4 = `
//1. import AniX
import { AniX } from 'anix';

//2. AniX.to
AniX.to(dom, 1, {
    width: "200px",
    height: "100px"
});
`;

    render() {
        return (
            <div>
                <div className="section" id="section1">
                    <h1>Overview</h1>
                    <hr className="hr dashed-hr" />
                    
                    <div className="info">
                        <h4 className="blur">About AniX</h4>
                        <p>
                            AniX is a lightweight and easy-to-use animation library with excellent performance and good compatibility for modern browsers. <br /> </p>

                        <p>It uses the native <b>css transition</b> attribute, better than js simulation animation performance. And can use hardware acceleration. <br /> </p>

                        <p>AniX is less than <b>3k(gzip)</b> in size, and it does not change your coding habit as much as possible.<br />
                            There are multiple versions of the AniX option, <a href="https://github.com/drawcall/AniX/blob/master/dist/umd/anix.umd.js">umd version</a>, <a href="https://github.com/drawcall/AniX/blob/master/dist/jq/anix.jq.js">jQuery version</a> and <a href="https://github.com/drawcall/react-anix">react version</a>...

                        </p>
                    </div>

                    <h3 id="section15">Quick Start</h3>
                    <p>Install and manage AniX with <a href="https://www.npmjs.com/package/anix">npm</a>.</p>
                    <pre><code className="html">{this.code1}</code></pre>

                    <p>Include the umd version <a href="https://github.com/drawcall/AniX/blob/master/dist/umd/anix.umd.js">anix.umd.js</a></p>
                    <pre><code className="html">{this.code2}</code></pre>

                    <p>Include jquery plugin <a href="https://github.com/drawcall/AniX/blob/master/dist/jq/anix.jq.js">anix.jq.js</a></p>
                    <pre><code className="html">{this.code3}</code></pre>

                    <p>import and use the AniX library.</p>
                    <pre><code className="ts">{this.code4}</code></pre>
                </div>
            </div>
        );
    }
}