//Merge 2 Images
const mergeImg = require("merge-img");


/**
 * Merges the provided images using mergeImg library and returns a promise that resolves with the merged image buffer.
 * @param {Array} images - An array of image objects containing src, x, and y coordinates.
 * @returns {Promise<Buffer>} - A promise that resolves with the merged image buffer.
 */
function mergeImages(images) {
  return new Promise((resolve, reject) => {
    try {
      // Merge the images using mergeImg library
      mergeImg(images).then((img) => {
        img.getBuffer("image/jpeg", (err, buffer) => {
          if (err) {
            reject(err);
          } else {
            resolve(buffer);
          }
        });
      });
    } catch (err) {
      reject(err); // If an error occurs during image merging, reject the promise with the error
    }
  });
}

//export the module
module.exports = {
  mergeImages,
};
