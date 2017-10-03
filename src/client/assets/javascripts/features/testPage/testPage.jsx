import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './testPage.less';
import {
  Questions
} from './components';

const mapDispatchToProps = {

};

const mapStateToProps = state => ({

});

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="test-page">
        <Questions />
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
