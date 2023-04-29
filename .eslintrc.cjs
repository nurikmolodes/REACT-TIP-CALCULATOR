module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [1, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    "linebreak-style": 1,
  },
  "react/function-component-definition": [
    2,
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
};
