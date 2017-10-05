import React, { Component, PropTypes } from 'react';
import { FacebookButton, FacebookCount } from "react-social";
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import './testResultPage.less';
import { Button } from './components';
import { resetTest } from 'app/redux-module/actions/testData';
import { config } from 'app/config';

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
    const sizeOfDrop = 2 - 0.5 + Math.random() * (arrSize/2 - 2 + 1);
    console.log(sizeOfDrop);
    const maxTicks = Math.ceil(sizeOfDrop);

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
          id: item.id,
          name: item.name,
          title: item.title,
          image: item.image,
          urls: item.urls
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
          url: 'https://etozhetest.ru',
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
    const strimmerImage = {
      backgroundImage: `url(${result.image})`
    };
    let leprekonMode = false;
    console.log(result);
    if(result.id == 7) {
      leprekonMode = true;
    }
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
            <div className={leprekonMode ? "result-container leprekon-mode" : "result-container"}>
              <div className="name">
                <span>Ты {result.name}</span>
              </div>
              <div className="image-container">
                <div className="strimmer-image" style={strimmerImage}/>
              </div>
              <div className="title-container">
                <span>{result.title}</span>
                <div className="strimmer-url">
                  <span className="header">Посмотреть на себя можешь тут: </span>
                  {_.map(result.urls, item => {
                    return (<Link key={item.url} target="_blank" to={item.url} className={item.title} />);
                  })}
                </div>
              </div>
              <div className="footer-container">
                <Button onClick={() => { this.handleTransition();}}>Возможно я другой стриммер?</Button>
                <div className="social-buttons-container">
                  <div className="header">
                    <span>Поделиться</span>
                  </div>
                  <div className="BUTTONS">
                    <div className="VK_BUTTON">
                      <button id="vk_share_button" />
                    </div>
                    <div className="FACEBOOK_BUTTON">
                      <FacebookButton sharer={true} id="facebook_share_button" url='https://etozhetest.ru' appId={`${config.id1}${config.id2}${config.id3}`} message="my message"/>
                    </div>
                  </div>
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
