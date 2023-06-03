// app.js
const { greeting, who, width, height, color, size } = require("./config/config");
const { downloadImage } = require("./Components/ImageDownloader");
const { mergeImages } = require("./Components/ImageMerger");
const { saveImage } = require("./util/FileWriter");

const firstUrl = `https://cataas.com/cat/says/${encodeURIComponent(
  greeting
)}?width=${width}&height=${height}&color=${color}&s=${size}`;
const secondUrl = `https://cataas.com/cat/says/${encodeURIComponent(
  who
)}?width=${width}&height=${height}&color=${color}&s=${size}`;

downloadImage(firstUrl)
  .then((firstBody) => {
    console.log(`Received response for first image`);

    return downloadImage(secondUrl).then((secondBody) => {
      console.log(`Received response for second image`);

      return mergeImages([
        { src: Buffer.from(firstBody, "binary"), x: 0, y: 0 },
        { src: Buffer.from(secondBody, "binary"), x: width, y: 0 },
      ]);
    });
  })
  .then((buffer) => {
    return saveImage(buffer);
  })
  .then(() => {
    console.log("The file was saved!");
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });
