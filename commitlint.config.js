const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-length": () => [2, "always", 72],
    "header-max-length": () => [2, "always", 72],
  },
};

module.exports = Configuration;
