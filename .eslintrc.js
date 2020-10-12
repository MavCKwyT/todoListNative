module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb-base/legacy"
  ],
  parserOptions: {
    sourceType: "module"
  },
  plugins: [],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2]
  }
};
