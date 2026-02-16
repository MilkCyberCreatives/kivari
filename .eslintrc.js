module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react/jsx-key": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/no-unescaped-entities": "off",
  },
};
