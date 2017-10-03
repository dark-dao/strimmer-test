import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import { selectAnswer, resetTest } from 'app/redux-module/actions/testData';

import './questions.less';
import Button from '../button/button';
import RadioButton from '../radioButton/radioButton';
import questionsMapper from './questionMapper';

const mapDispatchToProps = {
  selectAnswer,
  resetTest
};

const mapStateToProps = state => ({
  testData: state.testData.StrimmersData
});

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: props.testData,
      randomQuestions: this.getRandomQuestions(),
      answer: {},
      testStep: 0
    };
  }
  getRandomNumber(from, to) {
    return Math.random() - 0.5;
  }
  getRandomQuestions() {
    let questions = _.cloneDeep(questionsMapper);
    return questions.sort(this.getRandomNumber);
  }
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      testData: nextProps.testData
    });
  }
  handleSelectAnswer(id, weight) {
    console.log(id, weight);
    if(this.state.testStep < _.size(questionsMapper)) {
      this.setState({
        answer: {
          id: id,
          weight: weight
        }
      });
    }
  }
  nextStep() {
    const { testStep, answer } = this.state;
    if(testStep < _.size(questionsMapper) && _.size(answer)) {
      this.props.selectAnswer(answer);
      this.setState({
        testStep: testStep + 1,
        answer: {}
      });
    }
  }
  transitionToResults() {
    const { testData } = this.state;
    let max = 0;
    _.map(testData, item => {
      if(item.weight > max) { // ищем максимум
        max = item.weight;
      }
    });
    let repeatElems = _.filter(testData, item => {return item.weight == max});
    console.log(repeatElems);

    browserHistory.push('/result');
  }
  render() {
    const { randomQuestions, testStep, testData, answer } = this.state;
    return (
      <div className="questions-container">
        <div className="question-count">
          <span>
            Вопрос {testStep + 1} из {_.size(questionsMapper)}
          </span>
        </div>
        {_.map(randomQuestions, (item, i) => {
          if(i == testStep) {
            return (
              <div key={i} className="question">
                <div className="question-text">
                  {item.question}
                </div>
                <div className="answers">
                  {_.map(item.answers, (answerItem) => {
                    const isChecked = answer.id == answerItem.id;
                    return (
                      <RadioButton key={Math.random()}
                        name={answerItem.id}
                        value={answerItem.weight}
                        checked={isChecked}
                        onChange={(id, weight) => {this.handleSelectAnswer(id, weight);}}>
                        {answerItem.ans}
                      </RadioButton>
                    );
                  })}
                  {(testStep+1) == _.size(questionsMapper) ? (
                    <Button onClick={() => {this.transitionToResults();}} disable={!_.size(answer)}>Узнать результат!</Button>
                  ) : (
                    <Button key={Math.random()} onClick={() => {this.nextStep();}} disable={!_.size(answer)}>Дальше</Button>
                  )}
                </div>
              </div>
            );
          }
        })}
        <div className="debug">
          {_.map(testData, item => {
            return (
              <div key={Math.random()} className="debug-item">
                <span>{item.name} </span>
                <strong>{item.weight}</strong>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
