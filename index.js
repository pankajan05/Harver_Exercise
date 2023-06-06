// app.js
const { greeting, who, width, height, color, size } = require("./config/config");
const { downloadImage } = require("./components/image-downloader");
const { mergeImages } = require("./components/image-merger");
const { saveImage } = require("./util/file-writer");

const firstUrl = `https://cataas.com/cat/says/${encodeURIComponent(greeting)}?width=${width}&height=${height}&color=${color}&s=${size}`;
const secondUrl = `https://cataas.com/cat/says/${encodeURIComponent(who)}?width=${width}&height=${height}&color=${color}&s=${size}`;

async function generateCatCard() {
  try {
    const firstBody = await downloadImage(firstUrl);
    console.log(`Received response for first image`);

    const secondBody = await downloadImage(secondUrl);
    console.log(`Received response for second image`);

    const buffer = await mergeImages([
      { src: Buffer.from(firstBody, "binary"), x: 0, y: 0 },
      { src: Buffer.from(secondBody, "binary"), x: width, y: 0 },
    ]);

    await saveImage(buffer);
    console.log("The file was saved!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

generateCatCard();
