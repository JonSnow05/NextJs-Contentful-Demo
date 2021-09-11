/* module.exports = ({
    images:{
        domains:['images.ctfassets.net']
    }
  }) */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register:true,
    runtimeCaching,
  },
  env: {
    CONTENTFUL_SPACE_ID: `${process.env.CONTENTFUL_SPACE_ID}`,
    CONTENTFUL_ACCESS_KEY: `${process.env.CONTENTFUL_ACCESS_KEY}`,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
});
