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
  }

  children() {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  }

  componentWillMount() {
    this.appear = this.getAppear();
    this.disAppear = this.getDisAppear();
    this.normal = this.getNormal();

    this.normal.map(ani => prexifAniObj(ani));
    this.oldCache.play = this.props.play;
  }

  componentDidMount() {
    this.appear && this.animateAllChild(this.appear);
  }

  componentDidUpdate(nextProps) {
    console.log(2222, nextProps.children);

    this.normal.map((ani, i) => {
        this.animateAllChild(ani);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.play && this.oldCache.play != nextProps.play) {
      this.normal.map((ani, i) => {
        if (ani.name === 'play') {
          this.animateAllChild(ani);
        }
      });
    }

    this.oldCache.play = nextProps.play;
  }

  animateAllChild(ani) {
    let children = this.children();

    for (let key in children) {
      this.animate(this.refs[key], ani);
    }
  }


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


  /** animate */
  animate(child, props) {
    let node = ReactDOM.findDOMNode(child);
    let time = props.time || 0.5;

    if (props.from && props.to) {
      AniX.fromTo(node, time, props.from, props.to);
    } else {
      setTimeout(() => { AniX.to(node, time, getPureProps(props)); }, 1);
    }
  }

  render() {
    console.log(this.props.children);
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


/** prefix function */
function prexifAniObj(ani) {
  if (!ani.name) ani.name = 'play';
}

/** get pure props */
let keywords = ['time', 'play', 'appear', 'disAppear'];
function getPureProps(props) {
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
