//Downlad the necessary image
const request = require("request");


/**
 * Downloads an image from the specified URL.
 * @param {string} url - The URL of the image to download.
 * @returns {Promise<string>} - A promise that resolves with the downloaded image data (in binary format).
 */
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    //download an image
    request.get({ url, encoding: "binary" }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

//export the module
module.exports = {
  downloadImage,
};
