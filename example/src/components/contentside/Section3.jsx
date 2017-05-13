import React, { Component } from 'react';
import { Demo1 } from './demo/Demo1';
import { Demo2 } from './demo/Demo2';
import { Demo3 } from './demo/Demo3';
import { Demo4 } from './demo/Demo4';

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
                        <Demo1/><hr class="hr" />
                        <Demo2/><hr class="hr" />
                        <Demo3/><hr class="hr" />
                        <Demo4/><hr class="hr" />
                    </div>

                </div>
            </div>
        );
    }
}