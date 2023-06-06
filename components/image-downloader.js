//Downlad the necessary image
const request = require("request");

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    request.get({ url, encoding: "binary" }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

module.exports = {
  downloadImage,
};
