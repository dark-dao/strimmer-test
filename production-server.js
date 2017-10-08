const path = require('path');
const express = require('express');

const app = express();
const helmet = require('helmet');
const robots = require('express-robots-txt');
const fs = require('fs');

const host = 'localhost';
const port = 5088;
const logsPath = `${__dirname}/logs/logs.txt`;
const countPath = `${__dirname}/logs/count.txt`;

const getTimeString = () => {
  let time = new Date();
  let month = time.getMonth() + 1;
  let data = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let milliseconds = time.getMilliseconds();
  return `[${month}.${data} - ${hours}:${minutes}:${seconds}:${milliseconds}]`;
};
const writeToLogFile = (ip) => {
  return new Promise ((resolve, reject) => {
    fs.stat(`${logsPath}`, (err, stat) => {
      const logString = `${getTimeString()} - IP ${ip} \n`;
      console.log(logString);
      if(err == null) {
        fs.appendFile(logsPath, logString, (err) => {
           if (err) {
             reject(err);
           } else {
             resolve('success');
           }
        });
      } else {
        fs.writeFile(logsPath, logString, (err) => {
          if(err) {
            reject(err);
          } else {
            resolve('success');
          }
        });
      }
    });
  });
};
const addCount = () => {
  return new Promise((resolve, reject) => {
    let countNumber;
    fs.readFile(countPath, 'utf8', (err, number) => {
      console.log(typeof(number));
      console.log('NUMBER', number);
      if(err) {
        reject(err);
      } else {
        countNumber = parseInt(number) + 1;
        fs.writeFile(countPath, countNumber, (err) => {
          if(err) {
            reject(err);
          } else {
            resolve('success');
          }
        });
      }
    });
  });
};
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
  writeToLogFile(ip).then((success) => {return;}, (error) => {console.log(error)});
  addCount().then((success) => {return;}, (error) => {console.log(error)});
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
