const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: { "body-max-line-length": () => [2, "always", 2] },
};

module.exports = Configuration;
