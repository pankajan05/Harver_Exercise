// fileWriter.js
const fs = require("fs");
const path = require("path");

function saveImage(buffer) {
  return new Promise((resolve, reject) => {
    const fileOut = path.join(process.cwd(), "cat-card.jpg");
    fs.writeFile(fileOut, buffer, "binary", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  saveImage,
};
