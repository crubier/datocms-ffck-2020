require("dotenv").config();

module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  images: {
    domains: ["www.terredepagaies.fr", "www.datocms-assets.com"],
  },
};
