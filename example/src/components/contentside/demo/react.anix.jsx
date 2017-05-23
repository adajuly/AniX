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

export class Anix extends Component {

  constructor(props) {
    super(props);

    this.oldCache = {};

    this.prevChildren = [];
    this.currChildren = [];
    this.appearChildren = [];
    this.disAppearChildren = [];
  }

  componentWillMount() {
    this.appear = this.getAppear();
    this.disAppear = this.getDisAppear();
    this.normal = this.getNormal();

    this.normal.map(ani => __prefixAniObj(ani));
    this.oldCache.play = this.props.play;
  }

  componentDidMount() {
    this.currChildren = this.getChildren();
    __cloneArray(this.prevChildren, this.currChildren);
    //this.appear && this.anixChildren(this.appear);
  }

  componentWillReceiveProps(nextProps) {
    this.compareChildren(nextProps);
    this.aniPlayAppearAndDisAppear(nextProps);
    this.aniPlayNormal(nextProps);
  }
  
  compareChildren(nextProps) {
    this.currChildren = this.getChildren(nextProps.children);
    this.prevChildren = this.getChildren(this.props.children);
    
    
    this.appearChildren = this.currChildren.filter(
      cItem => !this.prevChildren.find(
        pItem => pItem.key === cItem.key
      )
    );

    this.disAppearChildren = this.prevChildren.filter(
      pItem => !this.currChildren.find(
        cItem => cItem.key === pItem.key
      ));
  }

  aniPlayAppearAndDisAppear(){
    if(this.appear){
      this.anixChildren(this.appear,this.appearChildren);
    }
  }

  getChildren(children) {
    children = children || this.props.children;
    return Array.isArray(children) ? children : [children];
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  //
  //  animation
  //
  ////////////////////////////////////////////////////////////////////////////////////////
  aniPlayNormal(nextProps) {
    if (nextProps.play && this.oldCache.play != nextProps.play) {
      this.normal.map((ani, i) => {
        if (ani.name === 'play') {
          this.anixChildren(ani);
        }
      });
    }

    this.oldCache.play = nextProps.play;
  }

  anixChildren(ani, children) {
    children = this.getChildren(children);
    children.map((child)=>{
      this.anix(child, ani);
    });
    
  }

  /** anix */
  anix(child, props) {
    console.log(child);
    let node = ReactDOM.findDOMNode(child);
    let time = props.time || 0.5;

    if (props.from && props.to) {
      AniX.fromTo(node, time, props.from, props.to);
    } else {
      setTimeout(() => AniX.to(node, time, __getPureProps(props)), 1);
    }
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
    return (
      <div>
        {React.Children.map(this.props.children, (element, index) => {
          return React.cloneElement(element, { ref: index });
        })}
      </div>
    );
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

/** get pure props */
let keywords = ['time', 'play', 'appear', 'disAppear'];
function __getPureProps(props) {
  let newProps = {};
  for (let key in props) {
    if (keywords.indexOf(key) < 0) {
      if (key === 'ease') {
        newProps['ease'] = AniX.ease[props[key]];
      } else {
        newProps[key] = props[key];
      }
    }
  }

  return newProps;
}

function __cloneArray(arr1, arr2) {
  arr1.length = 0;
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}