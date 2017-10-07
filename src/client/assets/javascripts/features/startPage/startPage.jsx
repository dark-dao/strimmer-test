import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import './startPage.less';
import { Button } from './components';

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
  transitionToStart() {
    browserHistory.push('/test');
  }
  render() {
    return (
      <div className="start-page">
        <div className="preview">
          <div className="header">
            <h1>Узнай кто ты из стриммеров</h1>
          </div>
          <div className="body">
            <div className="text">
              <span>Пройди этот тест и узнай кто ты из величайших стриммеров современности</span>
            </div>
            <Button onClick={() => { this.transitionToStart();}}> Пройти тест! </Button>
          </div>
          <div className="footer">
            <div className="creator">
              <div className="title">
                <span>Дизайн и концепция</span>
              </div>
              <div className="mail">
                <span>bautzendorf@gmail.com</span>
              </div>
              <Link target="_blank" to="https://vk.com/kensik"/>
            </div>
            <div className="creator">
              <div className="title">
                <span>Разработка и реализация</span>
              </div>
              <div className="mail">
                <span>dev.dark.dao@gmail.com</span>
              </div>
              <Link target="_blank" to="https://vk.com/dark_dao"/>
            </div>
            <div className="pay-container">
              <Link target="_blank" to="https://paypal.me/darkdao">Поблагодарить</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
