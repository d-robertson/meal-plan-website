module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("content/**/*.md");
  
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};