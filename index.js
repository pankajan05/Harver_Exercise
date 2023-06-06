// Retrieve configuration from config module
const config = require("./config/config");

//import the necessary modules
const { downloadImage } = require("./components/image-downloader");
const { mergeImages } = require("./components/image-merger");
const { saveImage } = require("./util/file-writer");

const firstUrl = `https://cataas.com/cat/says/${encodeURIComponent(
  config.greeting
)}?width=${config.width}&height=${config.height}&color=${config.color}&s=${
  config.size
}`;
const secondUrl = `https://cataas.com/cat/says/${encodeURIComponent(
  config.who
)}?width=${config.width}&height=${config.height}&color=${config.color}&s=${
  config.size
}`;

/**
 * Generates a cat card by downloading the necessary images, merging them, and saving the result.
 * @returns {Promise<void>} - A promise that resolves when the cat card is generated.
 * @async
 * @function generateCatCard
 * @example
 * generateCatCard();
 * // => The file was saved!
 * @example
 * generateCatCard().then(() => {
 *  console.log("The file was saved!");
 * });
 * // => The file was saved!
 * @example
 * async function generateCatCard() {
 * await generateCatCard();
 * console.log("The file was saved!");
 * }
 *
 */
async function generateCatCard() {
  try {
    //download the first images
    const firstBody = await downloadImage(firstUrl);
    console.log(`Received response for first image`);

    //download the second images
    const secondBody = await downloadImage(secondUrl);
    console.log(`Received response for second image`);

    //merge the images
    const buffer = await mergeImages([
      { src: Buffer.from(firstBody, "binary"), x: 0, y: 0 },
      { src: Buffer.from(secondBody, "binary"), x: config.width, y: 0 },
    ]);

    //save the image
    await saveImage(buffer);
    console.log("The file was saved!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

//generate the cat card
generateCatCard();
