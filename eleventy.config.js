export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("pages");
    eleventyConfig.addPassthroughCopy({"src": "."});
};
