import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import './testResultPage.less';
import { resetTest } from 'app/redux-module/actions/testData';

const phrasesMapper = [
  "Мошним, мошним ...",
  "Кормим Кекса ...",
  "Кекс накормлен ...",
  "Гладим Лорика ...",
  "Роллим ...",
  "Рофлим ...",
  "Реролл !",
  "Опять реролл !",
  "Так, посмотрим ...",
  "Ну такое себе ...",
  "Ищем подземных людей ...",
  "Meh ..."
];

const maxTicks = 11;
const mapDispatchToProps = {
  resetTest
};

const mapStateToProps = state => ({
  stats: state.testData.StrimmersData
});

class TestResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ticksSum: 0,
      randomPhrases: this.getRandomPhrases(),
      phrase: '',
      stats: props.stats,
      result: ''
    };
  }
  getRandomNumber(from, to) {
    return Math.random() - 0.5;
  }
  getRandomPhrases() {
    let phrases = _.cloneDeep(phrasesMapper);
    return phrases.sort(this.getRandomNumber);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({stats: nextProps.stats});
  }
  getResult() {
    const { stats } = this.state;
    let info = {};
    let max = 0;
    _.map(stats, (item, i) => {
      if(item.weight > max) { // ищем максимум
        max = item.weight;
        info = {
          name: item.name,
          title: item.title
        };
      }
    });
    return info;
  }
  hideLoader() {
    const { ticksSum, randomPhrases } = this.state;
    if(ticksSum < maxTicks) {
      this.setState({
        ticksSum: ticksSum + 1,
        phrase: randomPhrases[ticksSum]
      });
      this.runTimer();
    } else {
      this.setState({
        isLoading: false,
        result: this.getResult()
      });
    }
  }
  runTimer() {
    let rand = 1000 - 0.5 + Math.random() * (2000 - 1000 + 1);
    rand = Math.round(rand);
    setTimeout(() => {
      this.hideLoader();
    }, rand);
  }
  componentDidMount() {
    let isPassed = _.size(_.filter(this.props.stats, item => {return item.weight == 0})) == _.size(this.props.stats);
    if(!isPassed) {
      this.runTimer();
    } else {
      browserHistory.push('/');
    }
  }
  handleTransition() {
    this.props.resetTest();
  }
  render() {
    const { isLoading, phrase, stats, result } = this.state;
    return (
      <div className="test-result-page">
        <div className="result">
          {isLoading ? (
            <div className="loader-container">
              <div className="loader"/>
              <span className="loader-phrase">{phrase}</span>
            </div>
          ) : (
            <div className="result-container">
              <div className="name">
                <span>Ты {result.name}</span>
              </div>
              <div className="image-container">
                <div className="strimmer-image"/>
              </div>
              <div className="title-container">
                <span>{result.title}</span>
              </div>
              <div className="footer-container">
                <Link to="/" onClick={this.handleTransition}>Возможно я другой стриммер?</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResultPage);
