import React, { Component } from 'react';

export default class Section2 extends Component {

    code = `
/////////////element can be used in four ways./////////////
//1. ElementRef.
@ViewChild('child') child: ElementRef;
this.ngxAni.to(child, 1, {left : "100px"});

//2. local variable.
//<div #div1></div>
this.ngxAni.to(div1, 1, {left : "100px"});

//3. nativeElement.
this.ngxAni.to(this.elementRef.nativeElement, 1, {left : "100px"});

//4. jquery element.
this.ngxAni.to($(".child1"), 1, {left : "100px"});
//or
this.ngxAni.to($(".child1")[0], 1, {left : "100px"})`

    render() {
        return (
            <div>
                <div class="section" id="section2">
                    <h1>Reference</h1>
                    <hr />

                    <div class="info">
                        <h4 class="blur">Features</h4>
                        <p>
                            NgxAni, depends on <span class="color">css transtion</span>. So it can run on all modern browsers.It is faster than the javascript simulation of the animation.<br />
                            It is easier to use than the official animation system<a href="https://angular.io/docs/ts/latest/guide/animations.html">https://angular.io/docs/ts/latest/guide/animations.html</a> on the browser.<br />
                        </p>

                    </div>
                    <pre><code class="typescript">{this.code}</code></pre>
                </div>
            </div>
        );
    }
}