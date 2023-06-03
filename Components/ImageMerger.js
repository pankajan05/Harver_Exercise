//Merge 2 Images
const mergeImg = require("merge-img");

function mergeImages(images) {
  return new Promise((resolve, reject) => {
    mergeImg(images).then((img) => {
      img.getBuffer("image/jpeg", (err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer);
        }
      });
    });
  });
}

module.exports = {
  mergeImages,
};
