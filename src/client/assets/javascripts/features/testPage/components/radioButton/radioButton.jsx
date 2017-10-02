'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './radioButton.less';

class RadioButton extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    const { name, value } = this.props;
    this.props.onChange( name, value );
  }
  render() {
    const { checked, name, value, className } = this.props;
    const classes = classnames({
      "radio-btn-answer": true,
      "checked": checked,
      [this.props.className]: className
    });
    return (
      <div className={classes}>
        <label onClick={ () => {this.handleClick();} }>
          <input type="radio"
            name={name}
            value={value}
            checked={checked}/>
          {this.props.children}
        </label>
      </div>
    )
  }
};

export default RadioButton;
