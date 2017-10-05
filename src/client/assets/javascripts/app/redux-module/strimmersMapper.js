'use strict';

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
import cake from '../../../images/strimmers/cake.png';
import mad from '../../../images/strimmers/mad.png';
import guit88man from '../../../images/strimmers/guit88man.png';
import uselessmouth from '../../../images/strimmers/uselessmouth.png';
import welovegames from '../../../images/strimmers/welovegames.png';
import nuke73 from '../../../images/strimmers/nuke73.png';
import mistafaker from '../../../images/strimmers/mistafaker.png';
import valakas from '../../../images/strimmers/valakas.png';
import lasqa from '../../../images/strimmers/lasqa.png';
import hovan from '../../../images/strimmers/hovan.png';

const imageUrls = {
  nuke73: nuke73,
  hovan: hovan,
  mad: mad,
  cake: cake,
  guit88man: guit88man,
  uselessmouth: uselessmouth,
  welovegames: welovegames,
  mistafaker: mistafaker,
  valakas: valakas,
  lasqa: lasqa
};

const Strimmers = [
  {
    id: 1,
    name: 'C_a_k_e',
    title: 'Поднимаю за тебя стакан кефира Сека!',
    image: imageUrls.cake,
    urls: [
      {url: 'https://www.twitch.tv/c_a_k_e', title: 'twitch'}
    ],
    weight: 0
  },
  {
    id: 2,
    name: 'Илья Мэддисон',
    title: 'Надевай корону, ведь ты теперь Король!',
    image: imageUrls.mad,
    urls: [
      {url: 'https://www.twitch.tv/honeymad', title: 'twitch'}
    ],
    weight: 0
  },
  {
    id: 3,
    name: 'guit88man',
    title: 'Гитман, ты серьзно? А ты неплох!',
    image: imageUrls.guit88man,
    urls: [
      {url: 'https://www.twitch.tv/guit88man', title: 'twitch'},
      {url: 'https://vk.com/guitman_stream', title: 'vk'}
    ],
    weight: 0
  },
  {
    id: 4,
    name: 'Хованcкий',
    title: 'Бэнг Бэнг Бэнг и ты батя',
    image: imageUrls.hovan,
    urls: [
      {url: 'https://www.twitch.tv/khovanskytoday', title: 'twitch'},
      {url: 'https://vk.com/hovan', title: 'vk'},
      {url: 'http://instagram.com/yurykhovansky', title: 'vnstagram'}
    ],
    weight: 0
  },
  {
    id: 5,
    name: 'WeLoveGames',
    title: 'Кхм, ты Денис, слушай, а ты случаем не этот?',
    image: imageUrls.welovegames,
    urls: [
      {url: 'https://www.twitch.tv/welovegames', title: 'twitch'},
      {url: 'https://vk.com/welovegames', title: 'vk'}
    ],
    weight: 0
  },
  {
    id: 6,
    name: 'Валакас',
    title: 'Поздравляю, ты дедушка! Тебе ведро принести? Хртьфу, сука...',
    image: imageUrls.valakas,
    urls: [
      {url: 'https://www.twitch.tv/gladiatorpwnz', title: 'twitch'},
      {url: 'https://vk.com/gladiatorpwnz', title: 'vk'},
      {url: 'https://www.instagram.com/valakasglad/', title: 'instagram'}
    ],
    weight: 0
  },
  {
    id: 7,
    name: 'Факер',
    title: 'Ух, ты да ты любишь золотые монетки! Ты самый дружелюбный Факер-лепрекон!',
    image: imageUrls.mistafaker,
    urls: [
      {url: 'https://www.twitch.tv/mistafaker', title: 'twitch'},
      {url: 'https://vk.com/mistafaker', title: 'vk'}
    ],
    weight: 0
  },
  {
    id: 8,
    name: 'Lasqa',
    title: 'Ну что ж Васян, поздравляю, ты Lasqa!',
    image: imageUrls.lasqa,
    urls: [
      {url: 'https://www.twitch.tv/lasqa', title: 'twitch'},
      {url: 'https://vk.com/lasqatv', title: 'vk'},
      {url: 'https://www.instagram.com/bvavilov/', title: 'instagram'}
    ],
    weight: 0
  },
  {
    id: 9,
    name: 'Nuke73',
    title: '',
    image: imageUrls.nuke73,
    urls: [
      {url: 'https://www.twitch.tv/nuke73', title: 'twitch'},
      {url: 'https://www.instagram.com/nuke73/', title: 'instagram'},
      {url: 'https://vk.com/nuke73', title: 'vk'}
    ],
    weight: 0
  },
  {
    id: 10,
    name: 'UselessMouth',
    title: 'Ты настоящий бесполезный рот. Теперь можешь заняться разгоном видеокарт!',
    image: imageUrls.uselessmouth,
    urls: [
      {url: 'https://www.twitch.tv/uselessmouth', title: 'twitch'},
      {url: 'https://vk.com/uselessmouthmlg', title: 'vk'}
    ],
    weight: 0
  }
];





export default Strimmers;
