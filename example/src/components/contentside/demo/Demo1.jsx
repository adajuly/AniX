import React, { Component } from 'react';
import { Util } from '../../../utils/Util';
import { Anix } from '../../../../../dist/cjs';
import './Demo1.css';

export default class Demo1 extends Component {

    code = `
 animation(rect){
  AniX.to(rect, 1, {
      width: Math.random() * 500 + "px",
      height: (Math.random() * 60 + 40) + "px",
      backgroundColor: this.getRandomColor()
  });
}
`;
    
    animation(refs) {
        let w = Math.min(Util.getWidth() - 80, 500);

        AniX.to(refs, .85, {
            width: Math.random() * w + "px",
            height: (Math.random() * 80 + 20) + "px",
            backgroundColor: Util.getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <h4 id="demo1">AniX.to(element, time, toArgs)</h4>
                <button class="pointer btn btn-primary" onClick={this.animation.bind(this, this.ref.rect)}>click animate</button>
                <div class="container">
                    <div class="rect" refs="rect"></div>
                </div>
                <pre><code class="javascript">{this.code}</code></pre>
            </div>
        );
    }
}