module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("content/**/*.md");
  
  return {
    dir: {
      input: "content",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};