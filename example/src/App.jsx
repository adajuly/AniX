import React, { Component } from 'react';
import { HeadSide } from './components/headside/HeadSide';
import { ContentSide } from './components/contentside/ContentSide';

export default class App extends Component {

  render() {
    return (
      <div>
        <HeadSide />
        <ContentSide />
      </div>
    );
  }

}
