/**
* React - AniX
* 
  <Anix 
  anis={[
  { left:'20px', time:.5, delay:3, play:this.state.play },
  { color:'#ffcccc', time:.5, onComplete:this.aniComplete.bind(this), appear:true },
  { color:'#ffcccc', time:.5, ease:'easeInOutBack', disAppear:true },
  { color:'#ffcccc', time:.5, play:'disAppear' },
  { time:.5, appear:true ,from:{ width:'20px' }, to: { width:'220px', delay:.1 }}
  ]}

  ani={{ left:'20px', time:.5, play:this.state.play }}

  appear={{ left:'20px', time:.5 }}
  >
  ...
  </Anix>
* 
* @tiptext
*
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AniX } from '../../../../../dist/anix';

let __keywords = ['time', 'play', 'appear', 'disAppear'];

export class Anix extends Component {

  constructor(props) {
    super(props);

    this.state = {
      children: this.getChildren(this.props.children)
    }

    this.oldCache = {};

    this.appearChildren = [];
    this.disAppearChildren = [];
    this.nextProps = null;
  }

  componentWillMount() {
    this.appear = this.getAppear();
    this.disAppear = this.getDisAppear();
    this.normal = this.getNormal();

    this.normal.map(ani => __prefixAniObj(ani));
    this.oldCache.play = this.props.play;
  }

  componentDidMount() {
    //this.appear && this.anixChildren(this.appear);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.children !== this.props.children) {
      this.aniPlayAppearAndDisAppear();
    }
  }

  componentWillReceiveProps(nextProps) {
    let allChildren = this.mergeChildren(this.props.children, nextProps.children);
    this.setState({ children: allChildren });
    this.compareChildren(nextProps, allChildren);
    this.aniPlayNormal(nextProps);

    this.nextProps = nextProps;
  }

  mergeChildren(prevChildren, nextChildren) {
    if (this.disAppear) {
      let children = [];
      prevChildren = this.getChildren(prevChildren);
      nextChildren = this.getChildren(nextChildren);
      __cloneArray(children, prevChildren);

      nextChildren.map(child => {
        if (!prevChildren.find(nChild => nChild.key === child.key)) {
          children.push(child);
        }
      });

      return children;
    } else {
      return this.getChildren(nextChildren);
    }
  }

  compareChildren(nextProps, allChildren) {
    let nextChildren;
    let prevChildren;

    this.appearChildren.length = 0;
    this.disAppearChildren.length = 0;

    if (this.appear) {
      nextChildren = allChildren;
      prevChildren = this.getChildren(this.props.children);

      nextChildren.map((cItem, index) => {
        if (!prevChildren.find(pItem => pItem.key === cItem.key)) {
          this.appearChildren.push(index);
        }
      });
    }

    if (this.disAppear) {
      nextChildren = this.getChildren(nextProps.children);
      prevChildren = allChildren;

      prevChildren.map((pItem, index) => {
        if (!nextChildren.find(cItem => cItem.key === pItem.key)) {
          this.disAppearChildren.push(index)
        }
      });
    }

  }

  aniPlayAppearAndDisAppear() {
    this.appear && this.anixChildren(this.appear, this.appearChildren, 'appear');
    this.disAppear && this.anixChildren(this.disAppear, this.disAppearChildren, 'disAppear');
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  //
  //  animation
  //
  ////////////////////////////////////////////////////////////////////////////////////////
  aniPlayNormal(nextProps) {
    if (nextProps.play && this.oldCache.play !== nextProps.play) {
      this.normal.map((ani, i) => {
        if (ani.name === 'play') {
          this.anixChildren(ani);
        }
      });
    }

    this.oldCache.play = nextProps.play;
  }

  anixChildren(ani, refs, type) {
    refs.length && refs.map((ref, index) => {
      if (type === 'disAppear' && index >= refs.length - 1)
        this.anix(this.refs[ref], ani, 'complete');
      else
        this.anix(this.refs[ref], ani);
    });
  }

  /** anix */
  anix(element, props, complete) {
    let node = ReactDOM.findDOMNode(element);
    let time = props.time || 0.5;

    if (props.from && props.to) {
      AniX.fromTo(node, time, props.from, this.getPureProps(props.to, complete));
    } else {
      setTimeout(() => AniX.to(node, time, this.getPureProps(props, complete)), 1);
    }
  }

  getPureProps(props, complete) {
    let newProps = {};

    for (let key in props) {
      if (__keywords.indexOf(key) < 0) {
        if (key === 'ease') {
          newProps['ease'] = AniX.ease[props[key]];
        } else {
          newProps[key] = props[key];
        }
      }
    }

    if (complete) {
      let onComplete = newProps['onComplete'];
      newProps['onComplete'] = () => {
        onComplete && onComplete.call(null);
        setTimeout(() => {
          this.setState({ children: this.getChildren(this.nextProps.children) });
        }, 10);
      }
    }

    return newProps;
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  //
  //  get ani props
  //
  ////////////////////////////////////////////////////////////////////////////////////////
  /** get appear conf */
  getAppear() {
    let appear;

    if (this.props.anis) {
      for (let i = 0; i < this.props.anis.length; i++) {
        let ani = this.props.anis[i];
        if (ani.appear || ani.play === 'appear') {
          appear = ani;
        }
      }
    }

    if (this.props.ani && (this.props.ani.appear || this.props.ani.play === 'appear')) {
      appear = this.props.ani;
    }

    if (this.props.appear) {
      appear = this.props.appear;
    }

    return appear;
  }


  /** get normal conf */
  getNormal() {
    let normal = [];

    if (this.props.anis) {
      for (let i = 0; i < this.props.anis.length; i++) {
        let ani = this.props.anis[i];

        if (!(ani.appear || ani.play === 'appear') && !ani.disAppear || ani.play === 'disAppear') {
          normal.push(ani);
        }
      }
    }

    if (this.props.ani
      && !(this.props.ani.appear || this.props.ani.play === 'appear')
      && !(this.props.ani.disAppear || this.props.ani.play === 'disAppear')
    ) {
      normal.push(this.props.ani);
    }

    return normal;
  }


  /** get disAppear conf */
  getDisAppear() {
    let disAppear;

    if (this.props.anis) {
      for (let i = 0; i < this.props.anis.length; i++) {
        let ani = this.props.anis[i];
        if (ani.disAppear || ani.play === 'disAppear') {
          disAppear = ani;
        }
      }
    }

    if (this.props.ani && (this.props.ani.disAppear || this.props.ani.play === 'disAppear')) {
      disAppear = this.props.ani;
    }

    if (this.props.disAppear) {
      disAppear = this.props.disAppear;
    }

    return disAppear;
  }

  render() {
    let children = this.state.children;


    return (
      <div>
        {
          children.map((child, index) => {
            return React.cloneElement(child, { ref: index });
          })
        }
      </div>
    );
  }

  getChildren(children) {
    children = children || this.props.children;
    return Array.isArray(children) ? children : [children];
  }
}

Anix.propTypes = {
  children: PropTypes.any,
  anis: PropTypes.array,
  ani: PropTypes.object,
  appear: PropTypes.object,
  disAppear: PropTypes.object,
  play: PropTypes.any
}

////////////////////////////////////////////////////////////////////////////////////////
//
//  Utils
//
////////////////////////////////////////////////////////////////////////////////////////
/** prefix function */
function __prefixAniObj(ani) {
  if (!ani.name) ani.name = 'play';
}

function __cloneArray(arr1, arr2) {
  arr1.length = 0;
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}