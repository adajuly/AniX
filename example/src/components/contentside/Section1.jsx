import React, { Component } from 'react';

export class Section1 extends Component {

    code = `
//1. import module
import { NgxAniModule } from 'ngxani';

//2. set ngModule
@NgModule({
    imports: [BrowserModule, NgxAniModule]
    ... ...

//3. import service
import { NgxAni } from 'ngxani';

//4. constructor
constructor(private ngxAni: NgxAni) { }

//5. use
//<button (click)="animation(rect)">click animate</button>
//<div className="rect" #rect></div>
private animation(dom: ElementRef) {
  this.ngxAni.to(dom, 1, {
      width: "200px",
      height: "100px"
  });
}
`;

    render() {
        return (
            <div>
                <div className="section" id="section1">
                    <h1>Overview</h1>
                    <hr />

                    <div className="info">
                        <h4 className="blur">About NgxAni</h4>
                        <p>NgxAni is an animation plugin for AngularJS2+.

                It is very simple and convenient to use. At the same time it has very good compatibility.
                <br />
                            NgxAni is written by <span className="color">typescript</span> and can be easily put into your angular2+ project!

                NgxAni is a <span className="color">Service className</span> which do not rely on any className. You can use it in any <span className="color">Component</span> or <span className="color">Directive</span>.
                </p>
                    </div>

                    <h3>Quick Start</h3>
                    <p>Install and manage NgxAni with <a href="https://www.npmjs.com/package/ngxani">npm</a>.
            </p>
                    <pre><code className="javascript">
                        $ npm install ngxani</code></pre>


                    <p>import and use the NgxAni library.</p>
                    <pre><code className="ts">{this.code}</code></pre>
                </div>
            </div>
        );
    }
}