import React, { Component } from 'react';
import { Demo1 } from './demo/Demo1';
import { Demo2 } from './demo/Demo2';
import { Demo3 } from './demo/Demo3';
import { Demo4 } from './demo/Demo4';
import { Demo5 } from './demo/Demo5';
import { Demo6 } from './demo/Demo6';
import { Demo7 } from './demo/Demo7';
import { Demo8 } from './demo/Demo8';

export class Section3 extends Component {


    render() {
        return (
            <div>
                <div className="section" id="section3">
                    <h1>API and Demo</h1>
                    <hr />

                    <div>
                        <Demo1/><hr className="hr" />
                        <Demo2/><hr className="hr" />
                        <Demo3/><hr className="hr" />
                        <Demo4/><hr className="hr" />
                        <Demo5/><hr className="hr" />
                        <Demo6/><hr className="hr" />
                        <Demo7/><hr className="hr" />
                        <Demo8/>
                    </div>

                </div>
            </div>
        );
    }
}