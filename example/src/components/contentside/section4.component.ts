import { Component } from '@angular/core';
import { NgxAni } from '../../../../src';

@Component({
    selector: 'section4',
    template: `
    <div>
        <div class="section" id="section4">
            <h1>Future</h1>
            <hr>

            <div class="info">
                <h4 class="blur">Next Steps</h4>
                <p>
                NgxAni is not strongly dependent on angular2 and typescript.<br>
                The next step I want to bring it to <span class="color">React</span><a href="https://facebook.github.io/react/">https://facebook.github.io/react/</a>,
                so stay tuned!
                </p>
            </div>


        </div>
    </div>

    `,

    styles: ['.color{color:#ff0000;}']
})

export class Section4Component {

}
