'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './button.less';

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const classes = classnames({
      "btn-answer": true,
      [this.props.className]: this.props.className
    });
    return (
      <button className={classes} onClick={(e) => {this.props.onClick(e)}}>
        {this.props.children}
      </button>
    )
  }
};

export default Button;
