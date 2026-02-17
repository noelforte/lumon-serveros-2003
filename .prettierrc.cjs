const discoursePrettierConfig = require("@discourse/lint-configs/prettier");

/** @type {import('prettier').Config} */
const prettierConfig = {
  ...discoursePrettierConfig,
};

module.exports = prettierConfig;
