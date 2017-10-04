import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import './testResultPage.less';
import { Button } from './components';
import { resetTest } from 'app/redux-module/actions/testData';

import mad from '../../../images/mad.jpg';
import angry_man from '../../../images/angry_man.png';
import toha from '../../../images/toha.png';
import ten from '../../../images/ten.png';

const phrasesMapper = [
  "Мошним, мошним . . .",
  "Кормим Кекса . . .",
  "Гладим Лорика . . .",
  "Роллим . . .",
  "Рофлим . . .",
  "Реролл !",
  "Ищем шаверму для Хована . . .",
  "Опять реролл !",
  "Так, посмотрим . . .",
  "Ну такое себе . . .",
  "Где этот артефакт етить его в корень . . .",
  "Ищем подземных людей . . .",
  "Meh . . ."
];

const loaderImageUrls = [
  mad,
  angry_man,
  toha,
  ten
];

const mapDispatchToProps = {
  resetTest
};

const mapStateToProps = state => ({
  stats: state.testData.StrimmersData
});

class TestResultPage extends Component {
  constructor(props) {
    super(props);
    const arrSize = _.size(phrasesMapper);
    const sizeOfDrop = arrSize/2 - 0.5 + Math.random() * (arrSize - arrSize/2 + 1);
    const maxTicks = Math.round(sizeOfDrop);

    let randomIndex = 0 - 0.5 + Math.random() * (_.size(loaderImageUrls) - 1 + 1);
    randomIndex = Math.round(randomIndex) + 0;
    const randomImage = loaderImageUrls[randomIndex];
    const loaderBackground = {
      backgroundImage: `url(${randomImage})`
    };

    this.state = {
      isLoading: true,
      ticksSum: 0,
      randomPhrases: this.getRandomPhrases(),
      phrase: '',
      stats: props.stats,
      result: '',
      maxTicks,
      loaderBackground
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
    const { ticksSum, randomPhrases, maxTicks } = this.state;
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
      document.getElementById('vk_share_button').innerHTML =
        VK.Share.button({
          url: 'https://dark-dao.com',
          title: `Я ${this.state.result.name}. Узнай кто ты из стриммеров!`
        }, {
          type: 'custom', text: '<img id="vk_button_link"/>'
        });
    }
  }
  runTimer() {
    let randTimer = 1000 - 0.5 + Math.random() * (2000 - 1000 + 1);
    randTimer = Math.round(randTimer);
    setTimeout(() => {
      this.hideLoader();
    }, randTimer);
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
    const { isLoading, phrase, stats, result, loaderBackground } = this.state;
    return (
      <div className="test-result-page">
        <div className="result">
          {isLoading ? (
            <div className="loader-container">
              <div className="header">Вычисляем результат</div>
              <div className="loader-block">
                <div className="loader" style={loaderBackground}/>
              </div>
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
                <Button onClick={() => { this.handleTransition();}}>Возможно я другой стриммер?</Button>
                <div className="social-buttons-container">
                  <div className="header">
                    <span>Поделиться</span>
                  </div>
                  <button id="vk_share_button" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResultPage);
