module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://strapi-thabo-test.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
