const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Add collections
  eleventyConfig.addCollection("weekly", function(collection) {
    const items = collection.getFilteredByGlob("./src/posts/weekly/*.md");
    console.log("Weekly posts found:", items.length);
    return items;
  });

  eleventyConfig.addCollection("daily", function(collection) {
    const items = collection.getFilteredByGlob("./src/posts/daily/*.md");
    console.log("Daily posts found:", items.length);
    console.log("Daily posts paths:", items.map(item => item.inputPath));
    return items;
  });

  // Add a test collection to see all content
  eleventyConfig.addCollection("all", function(collection) {
    const items = collection.getAll();
    console.log("All items found:", items.length);
    console.log("All item paths:", items.map(item => item.inputPath));
    return items;
  });

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Format date to show full day name
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Filter for dates before or equal to today
  eleventyConfig.addFilter("dateIsBeforeOrToday", (collection) => {
    const today = DateTime.now().startOf('day');
    return collection.filter(item => {
      const postDate = DateTime.fromJSDate(item.data.date, { zone: "utc" }).startOf('day');
      return postDate <= today;
    });
  });

  // Limit filter
  eleventyConfig.addFilter("limit", (collection, limit) => {
    return collection.slice(0, limit);
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
