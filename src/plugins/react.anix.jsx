import React from 'react';
import TransitionGroup from './TransitionGroup';

export default function Tween({ children, style, ...props }) {
  return (
    <TransitionGroup
      styles={[
        {
          key: '0',
          style,
        },
      ]}
      {...props}
    >
      {styles => children(styles[0].style)}
    </TransitionGroup>
  );
}

Tween.propTypes = {
  children: React.PropTypes.func,
  style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};