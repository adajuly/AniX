import React, { Component } from 'react';
import './Demo8.css';

export class Demo8 extends Component {

    code = `
//////////////////// AniX ////////////////////
//use css transtionend event
AniX.useTranstionEvent = true;
//Compatible with old browsers, old browsers do not have animation
AniX.compatible = true;
//debug mode
AniX.debug = true;
//(readonly) has css Transition?
console.log(AniX.support);

//////////////////// CssX ////////////////////
import { CssX } from 'anix';
//is support css translate3d?
CssX.has3d();
//get css prefix
CssX.getPrefix();
//set transformOrigin to  center center;
CssX.setOriginCenter(ele);
`;

    render() {
        return (
            <div>
                <h4 id="demo8">others</h4>
                <pre><code className="javascript">{this.code}</code></pre>
            </div>
        );
    }
}
