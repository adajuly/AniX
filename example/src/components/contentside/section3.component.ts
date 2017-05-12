import { Component } from '@angular/core';

@Component({
    selector: 'section3',
    template: `
    <div>
        <div class="section" id="section3">
            <h1>API and Demo</h1>
            <hr>
            <p>The following example is used in this way</p>
            <pre><code class="html">{{code}}</code></pre>

            <div>
              <demo1></demo1><hr class="hr">
              <demo2></demo2><hr class="hr">
              <demo3></demo3><hr class="hr">
              <demo4></demo4><hr class="hr">
              <demo5></demo5><hr class="hr">
              <demo6></demo6><hr class="hr">
              <demo7></demo7><hr class="hr">
              <demo8></demo8>
            </div>

        </div>
    </div>
    `,
    styles:[
      ".hr{height:1px;border:none;border-top:1px dashed #0066CC}"
    ]
})

export class Section3Component {

    private code = `
<button class="pointer btn btn-primary" (click)="animation(rect)">click animate</button>
<div class="rect" #rect></div>`;


}
