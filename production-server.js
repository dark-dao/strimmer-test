const path = require('path');
const express = require('express');

const app = express();
const helmet = require('helmet');
const robots = require('express-robots-txt');

const host = 'localhost';
const port = 8080;

app.use(helmet());
app.use(robots([
  {
    UserAgent: '*',
    Allow: '/'
  },
  {
    UserAgent: 'Googlebot',
    Allow: '/'
  },
  {
    UserAgent: 'Bingbot',
    Allow: '/'
  },
  {
    UserAgent: 'Yandex',
    Allow: '/'
  }
]));

app.use(express.static(path.join(__dirname, './build/client')));
app.use('/images', express.static(path.join(__dirname, `./build/client/images`)));
app.use('/css', express.static(path.join(__dirname, `./build/client/css`)));
app.use('/js', express.static(path.join(__dirname, `./build/client/js`)));

const middleWare = (req, res, next) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  ip = ip.split(',')[0];
  ip = ip.split(':').slice(-1);
  ip = `${ip}`;
  let time = new Date();
  let month = time.getMonth() + 1;
  let data = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let milliseconds = time.getMilliseconds();
  console.log(`[${month}.${data} - ${hours}:${minutes}:${seconds}:${milliseconds}] - IP: [ ${ip} ]`);
  next();
};

app.get('*', middleWare, function(req, res) {
  res.sendFile(path.join(__dirname, './build/client/index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`[front-end] production build is start on ${host}:${port}`);
});
