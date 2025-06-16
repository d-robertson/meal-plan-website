module.exports = function(eleventyConfig) {
  // Don't copy markdown files, let Eleventy process them
  // eleventyConfig.addPassthroughCopy("content/**/*.md");
  
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