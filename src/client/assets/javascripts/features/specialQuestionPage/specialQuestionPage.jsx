import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import { setDisputAnswers, selectAnswer } from 'app/redux-module/actions/testData';
import { RadioButton, Button } from './components';

import './specialQuestionPage.less';

/*
  Маппер стриммеров
  1 - Кекс
  2 - Мэд
  3 - Гитман
  4 - Хован
  5 - Виловгей
  6 - Валакас
  7 - Факер
  8 - Ласка
  9 - Нюк
  10 - Юзя
*/
const specialAnswers = [
  {id: 1, ans: "Я вижу большой сырный бургер"},
  {id: 2, ans: "Я вижу медведей дающих друг другу 'пять'"},
  {id: 3, ans: "Я вижу платформер"},
  {id: 4, ans: "Я вижу две полторашки"},
  {id: 5, ans: "Я вижу двух симпотичных парней"},
  {id: 6, ans: "Я вижу лицо, которое стоит за двумя медведями"},
  {id: 7, ans: "Я вижу огромную гору золотых монет"},
  {id: 8, ans: "Я вижу нормальную такую тему"},
  {id: 9, ans: "Я вижу трассу для 'Mario cart'"},
  {id: 10, ans: "Я вижу новое дополнение для 'Happy wheels'"},
];

const mapDispatchToProps = {
  selectAnswer,
  setDisputAnswers
};

const mapStateToProps = state => ({
  testData: state.testData.StrimmersData,
  strimmersIds: state.testData.disputAnswers
});

class SpecialQuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: props.testData,
      strimmersIds: props.strimmersIds,
      selectAnswer: {}
    };
  }
  componentDidMount() {
    let isPassed = !!_.size(this.props.strimmersIds);
    if(!isPassed) {
      browserHistory.push('/');
    }
  }
  handleSelectAnswer(id, weight) {
    this.setState({
      selectAnswer: {
        id: id,
        weight: weight
      }
    });
  }
  transitionToResults() {
    const { selectAnswer } = this.state;
    this.props.selectAnswer(selectAnswer);
    browserHistory.push('/result');
  }
  render() {
    const { strimmersIds, testData, selectAnswer } = this.state;
    console.log(strimmersIds,testData,selectAnswer);
    return (
      <div className="special-questions-container">
        <div className="question">
          <div className="body">
            <div className="header">
              <span>
                Биполярный вопрос на миллион
              </span>
            </div>
            <div className="question-text">
              <div className="image"></div>
              <div className="text">
                <span>
                  Что ты видишь на картинке?
                </span>
              </div>
            </div>
            <div className="answers">
              <div className="answers-items">
                {_.map(specialAnswers, (item) => {
                  let isFinded = false;
                  _.map(strimmersIds, id => {
                    if(id == item.id) {
                      isFinded = true;
                    }
                  });
                  console.log(isFinded);
                  if(isFinded) {
                    const isChecked = selectAnswer.id == item.id;
                    console.log(isChecked);
                    return (
                      <RadioButton key={Math.random()}
                        name={item.id}
                        value={item.id}
                        checked={isChecked}
                        onChange={(id, weight) => {this.handleSelectAnswer(id, 1);}}>
                        {item.ans}
                      </RadioButton>
                    );
                  }
                })}
              </div>
              <div className="button-container">
                {_.size(selectAnswer) ? (
                  <Button onClick={() => {this.transitionToResults();}}>Узнать результат!</Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialQuestionPage);
