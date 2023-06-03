const fs = require('fs');
const path = require('path');
const request = require('request');
const mergeImg = require('merge-img');
const { greeting, who, width, height, color, size } = require("./config/config");

const firstReq = {
  url: `https://cataas.com/cat/says/${encodeURIComponent(greeting)}?width=${width}&height=${height}&color=${color}&s=${size}`,
  encoding: 'binary',
};

const secondReq = {
  url: `https://cataas.com/cat/says/${encodeURIComponent(who)}?width=${width}&height=${height}&color=${color}&s=${size}`,
  encoding: 'binary',
};

request.get(firstReq, (err, res, firstBody) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Received response with status: ${res.statusCode}`);

  request.get(secondReq, (err, res, secondBody) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`Received response with status: ${res.statusCode}`);

    mergeImg([
      { src: Buffer.from(firstBody, 'binary'), x: 0, y: 0 },
      { src: Buffer.from(secondBody, 'binary'), x: width, y: 0 },
    ]).then((img) => {
      img.getBuffer('image/jpeg', (err, buffer) => {
        if (err) {
          console.error(err);
          return;
        }

        const fileOut = path.join(process.cwd(), 'cat-card.jpg');

        fs.writeFile(fileOut, buffer, 'binary', (err) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log('The file was saved!');
        });
      });
    });
  });
});
