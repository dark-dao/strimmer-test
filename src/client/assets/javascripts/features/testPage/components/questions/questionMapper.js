'use strict';
/*
  Маппер стриммеров
  1 - Cека
  2 - Мэд
  3 - Гитман
  4 - Хован
  5 - Виловгей
*/
const questionsMapper = [
  {
    question: "Подставляешь ли ты коленку когда играешь?",
    answers: [
      {ans: 'Да. Еще и хлопаю по ней', id: 3, weight: 0.5}, //Гитман
      {ans: 'Только для того чтобы поставить на неё тарелку с едой', id: 1, weight: 0.5}, //Кекс
      {ans: 'Только если на неё сядет мой парень', id: 5, weight: 0.5}, // Виловгей
      {ans: 'За донат что хочешь подставлю', id: 2, weight: 0.5} // Мэд
    ]
  },
  {
    question: "Ты любишь торты?",
    answers: [
      {ans: 'Обожаю их "любить"', id: 2, weight: 0.5}, // Мэд
      {ans: 'Да, с кефиром отлично заходит', id: 1, weight: 0.5}, // Кекс
      {ans: 'Если этот торт из пива', id: 4, weight: 0.5}, // Хован
      {ans: 'Oh, yeah!', id: 5, weight: 0.5} // Виловгей
    ]
  },
  {
    question: "Если игра немного 'песочница' в которой много разного 'хлама', то ты ...",
    answers: [
      {ans: 'Соберу все дерьмо на карте', id: 3, weight: 0.5}, // Гитман
      {ans: 'Пробегу по сюжету, а в конце буду страдать из-за недостатка вещей для крафта', id: 2, weight: 0.5}, // Мэд
      {ans: 'Изучу лор игры, буду восхищаться каждой локацией', id: 6, weight: 0.5}, // Зануда
      {ans: 'Буду пить пиво и орать в монитор', id: 4, weight: 0.5}] // Хован
  },
  {
    question: "Вопрос4",
    answers: [
      {ans: 'Ответ1', id: 1, weight: 0.5},
      {ans: 'Ответ2', id: 2, weight: 0.5},
      {ans: 'Ответ3', id: 3, weight: 0.5},
      {ans: 'Ответ4', id: 4, weight: 0.5}
    ]
  },
  {
    question: "Вопрос5",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  },
  {
    question: "Вопрос6",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  },
  {
    question: "Вопрос7",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  },
  {
    question: "Вопрос8",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  },
  {
    question: "Вопрос9",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  },
  {
    question: "Вопрос10",
    answers: [{ans: 'Ответ1', id: 1, weight: 0.5}, {ans: 'Ответ2', id: 2, weight: 0.5}, {ans: 'Ответ3', id: 3, weight: 0.5}, {ans: 'Ответ4', id: 4, weight: 0.5}]
  }
];

export default questionsMapper;
