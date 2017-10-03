import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './startPage.less';

const mapDispatchToProps = {

};

const mapStateToProps = state => ({

});

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="start-page">
        <div className="preview">
          <div className="header">
            <h1>Узнай кто ты из стриммеров!</h1>
          </div>
          <div className="body">
            Описание
          </div>
          <div className="footer">
            <Link to="/test"> Начать тест! </Link>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
