import React from 'react';
import classes from './Icon.css';

const TabBarIcon = props => {
  return (
    <div
      className={classes.TabBarIcon}
      style={{
        background: `url(${props.iconDir}) center center /  21px 21px no-repeat`
      }}
    />
  );
};

export default TabBarIcon;