/**
* React - AniX
* 
  <anix 
  anis={[
  { left:'20px', time:.5, delay:3, play:this.state.play },
  { color:'#ffcccc', time:.5, onComplete:this.aniComplete.bind(this), appear:true },
  { color:'#ffcccc', time:.5, ease:'easeInOutBack', disAppear:true },
  { time:.5, appear:true ,from:{ width:'20px' }, to: { width:'220px', delay:.1 }}
  ]}

  ani={{ left:'20px', time:.5, play:this.state.play }}
  >
  ...
  </anix>
* 
* @tiptext
*
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class anix extends Component {

  componentWillEnter(done) {
    if (animUtil.isEnterSupported(this.props)) {
      this.anix('enter', done);
    } else {
      done();
    }
  }

  componentWillAppear(done) {
    if (this.props.appear) {
      this.anix('appear', done);
    } else {
      done();
    }
  }

  componentWillLeave(done) {
    if (animUtil.isLeaveSupported(this.props)) {
      this.anix('leave', done);
    } else {
      done();
    }
  }

  anix() {
    const node = ReactDOM.findDOMNode(this);
  }

  render() {
    return this.props.children;
  }

  static propTypes = {
    children: PropTypes.any,
  }

}
