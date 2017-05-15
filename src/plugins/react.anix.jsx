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
    if (animUtil.isAppearSupported(this.props)) {
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
