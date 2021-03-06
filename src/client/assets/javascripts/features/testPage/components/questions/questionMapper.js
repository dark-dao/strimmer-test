'use strict';
/*
  Маппер стримеров
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
    question: "Если игра немного 'песочница' в которой много разного 'хлама', то ты . . .",
    answers: [
      {ans: 'Соберу все дерьмо на карте', id: 3, weight: 0.5}, // Гитман
      {ans: 'Пробегу по сюжету, а в конце буду страдать из-за недостатка вещей для крафта', id: 2, weight: 0.5}, // Мэд
      {ans: 'Изучу "lore" игры, буду восхищаться каждой локацией', id: 10, weight: 0.5}, // Юзя
      {ans: 'Буду пить пиво и орать в монитор', id: 4, weight: 0.5}] // Хован
  },
  {
    question: "Чтобы ты делал если бы попал в сказочную страну?",
    answers: [
      {ans: 'Переспал бы с Принцессой Пич', id: 9, weight: 0.5}, // Нюк
      {ans: 'Наконец бы собрал себе огромную коллекцию из блестящих монет', id: 7, weight: 0.5}, // Факер
      {ans: 'Тупа настругал бы на лицо Белоснежке', id: 6, weight: 0.5}, // Валакас
      {ans: 'Подумал что я опять под грибами и лег спать', id: 10, weight: 0.5}] // Юзя
  },
  {
    question: "Какой тип поведение на вечеринке ты бы себе присвоил?",
    answers: [
      {ans: 'А что есть варианты? Конечно бы бухал!', id: 8, weight: 0.5}, // Ласка
      {ans: 'Развлекал бы народ и думал чем помочь хозяину вечеринки', id: 7, weight: 0.5}, // Факер
      {ans: 'Я бы рофлил над всеми и сожрал бы всю еду', id: 6, weight: 0.5}, // Валакас
      {ans: 'Закрылся бы в ванне и плакал, ведь ты с биполярочкой', id: 10, weight: 0.5}] // Юзя
  },
  {
    question: "У тебя выдался выходной, после тяжелой недели, чем бы ты занялся? ",
    answers: [
      {ans: 'Целый день смотрел бы Грибабаса и Джона', id: 8, weight: 0.5}, // Ласка
      {ans: 'Висел бы целый день на турнике, говорят хорошо для роста', id: 7, weight: 0.5}, // Факер
      {ans: 'Провел все время со своей "ласточкой"', id: 6, weight: 0.5}, // Валакас
      {ans: 'Пошел бы в салон красоты', id: 5, weight: 0.5}] // Виловгей
  },
  {
    question: "Какой актер тебе больше нравится? ",
    answers: [
      {ans: 'Пьер Ришар', id: 2, weight: 0.5}, // Мэд
      {ans: 'Кузьма', id: 4, weight: 0.5}, // Хованский
      {ans: 'Питер Динклэйдж', id: 7, weight: 0.5}, // Факер
      {ans: 'Боб Хоскинс и Джон Легуизамо', id: 9, weight: 0.5}] // Нюк
  },
  {
    question: "Девушка твоей мечты это . . .",
    answers: [
      {ans: 'Бурятка', id: 2, weight: 0.5}, // Мэд
      {ans: 'Девушка старше 18ти лет, которая весит не больше 40 кг.', id: 4, weight: 0.5}, // Хованский
      {ans: 'Блондика с силиконовой грудью', id: 7, weight: 0.5}, // Факер
      {ans: 'Девушка моей мечты это парень', id: 5, weight: 0.5}] // Виловгей
  },
  {
    question: "Мечта всей твоей жизни",
    answers: [
      {ans: 'Переехать в Москву', id: 1, weight: 0.5}, // Кекс
      {ans: 'Лежать на диване и ничего не делать', id: 2, weight: 0.5}, // Мэд
      {ans: 'Пить пиво', id: 4, weight: 0.5}, // Хован
      {ans: 'Пройти все платформеры', id: 3, weight: 0.5}] // Гитман
  },
  {
    question: "Сверхчеловек это -  . . .",
    answers: [
      {ans: 'Человек - полторашка', id: 4, weight: 0.5}, // Хован
      {ans: 'Пожилой шахтер', id: 6, weight: 0.5}, // Валакас
      {ans: 'Фусадзиро Ямаути', id: 9, weight: 0.5}, // Нюк
      {ans: 'BlackSilverUfa', id: 10, weight: 0.5}] // Юзя
  },
  {
    question: "Если бы вас пригласили играть в спектакле, то какую бы роль получил ты? ",
    answers: [
      {ans: 'Злого антагониста', id: 3, weight: 0.5}, // Гитман
      {ans: 'Незнакомца второго плана', id: 9, weight: 0.5}, // Нюк
      {ans: 'Хулигана', id: 8, weight: 0.5}, // Ласка
      {ans: 'Опытного стрелка', id: 1, weight: 0.5}] // Кекс
  }
];

export default questionsMapper;
