import React, { Component } from 'react';

export class Section2 extends Component {

    code = `
/////////////element can be used in four ways./////////////
//AniX.to
$(..).to(time: number, args: {ease?:string; delay?:number; [propName:string]:any;})

//AniX.fromTo
$(..).to(time: number, fromArgs: Object, toArgs: Object)

//AniX.kill
$(..).kill(complete?: boolean)

//AniX.get
$(..).getTransform(param: any)

//AniX.ease
$.ease.easeOut
`;

    render() {
        return (
            <div>
                <div className="section" id="section2">
                    <h1>Other Versions</h1>
                    <hr className="hr dashed-hr" />

                    <div className="info">
                        <h4 className="blur">JQuery Version - anix.jq.js</h4>
                        <p>
                            AniX, depends on <span className="color">css transtion</span>. So it can run on all modern browsers.It is faster than the javascript simulation of the animation.<br />
                            
It is very small and supports chain syntax.<br />
                        </p>

                    </div>
                    <pre><code className="javascript">{this.code}</code></pre>
                </div>
            </div>
        );
    }
}