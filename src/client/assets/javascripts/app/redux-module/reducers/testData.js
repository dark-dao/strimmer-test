'use strict';
import _ from 'lodash';
import { TEST_DATA } from '../actions/testData';

// --------------------------- Reducer function --------------------------
import StrimmersData from '../strimmersMapper';
const initialState = {StrimmersData};

export default function testData(state = initialState, action = {}) {
  switch (action.type) {
    case TEST_DATA.SELECT_ANSWER: {
      const answer = action.selectedAnswer; //strimmerInfo = {id: number, weight: number}
      let newState = _.cloneDeep(state);
      newState.StrimmersData = _.map(newState.StrimmersData, item => {
        if(item.id == answer.id) {
          let newItem = {
            id: item.id,
            name: item.name,
            title: item.title,
            image: item.image,
            urls: item.urls,
            weight: item.weight + answer.weight
          };
          return newItem;
        } else {
          return item;
        }
      });
      return {
        ...newState
      };
    }
    case TEST_DATA.RESET: {
      let newState = _.cloneDeep(state);
      newState.StrimmersData = _.map(StrimmersData, item => item);
      return {
        ...newState
      };
    }
    case TEST_DATA.SET_DISPUT_ANSWERS: {
      let newState = _.cloneDeep(state);
      newState.disputAnswers = action.disput;
      return {
        ...newState
      };
    }

    default:
      return state;
  }
}
