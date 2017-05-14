import React, { Component } from 'react';
import { Demo1 } from './demo/Demo1';
import { Demo2 } from './demo/Demo2';
import { Demo3 } from './demo/Demo3';
import { Demo4 } from './demo/Demo4';
import { Demo5 } from './demo/Demo5';

export class Section3 extends Component {

    code = `
<button className="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
<div className="rect" #rect></div>`;

    render() {
        return (
            <div>
                <div className="section" id="section3">
                    <h1>API and Demo</h1>
                    <hr />
                    <p>The following example is used in this way</p>
                    <pre><code className="html">{this.code}</code></pre>

                    <div>
                        <Demo1/><hr className="hr" />
                        <Demo2/><hr className="hr" />
                        <Demo3/><hr className="hr" />
                        <Demo4/><hr className="hr" />
                        <Demo5/><hr className="hr" />
                    </div>

                </div>
            </div>
        );
    }
}