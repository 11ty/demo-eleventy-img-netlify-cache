const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageHtml(src, alt) {
  let imgSrc = path.join("node_modules/browser-logos/src/", src);

  let stats = await Image(imgSrc, {
    widths: [40],
    formats: ["avif", "png"],
    urlPath: "/img/generated",
    outputDir: "./_site/img/generated/",
  });

  return Image.generateHTML(stats, {
    alt: alt,
    sizes: "2.5em"
  });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("getImageHtml", imageHtml);
};