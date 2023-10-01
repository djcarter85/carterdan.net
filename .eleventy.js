module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/assets/images/*.*");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};