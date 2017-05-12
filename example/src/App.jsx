import React, { Component } from 'react';
import { HeadSide } from './components/headside/HeadSide';

export default class App extends Component {

  render() {
    return (
      <div>
        <HeadSide />
        <content-side></content-side>
      </div>
    );
  }

}
