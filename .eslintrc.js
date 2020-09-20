module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended"],
  rules: {
    semi: "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    indent: ["error", 4],
    "operator-linebreak": ["error", "before"],
    "vue/html-indent": ["error", 4],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
  },
};
