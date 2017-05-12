import React, { Component } from 'react';

export default class Section3 extends Component {

    code = `
<button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
<div class="rect" #rect></div>`;

    render() {
        return (
            <div>
                <div class="section" id="section3">
                    <h1>API and Demo</h1>
                    <hr />
                    <p>The following example is used in this way</p>
                    <pre><code class="html">{this.code}</code></pre>

                    <div>
                        <demo1></demo1><hr class="hr" />
                        <demo2></demo2><hr class="hr" />
                        <demo3></demo3><hr class="hr" />
                        <demo4></demo4><hr class="hr" />
                        <demo5></demo5><hr class="hr" />
                        <demo6></demo6><hr class="hr" />
                        <demo7></demo7><hr class="hr" />
                        <demo8></demo8>
                    </div>

                </div>
            </div>
        );
    }
}