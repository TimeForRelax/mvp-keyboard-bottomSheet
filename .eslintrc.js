module.exports = {
  env: {
    node: 1,
  },
  extends: ["@react-native", "plugin:@tanstack/eslint-plugin-query/recommended"],
  rules: {
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "never"],
    // "sort-imports": [
    //   "error",
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    //     allowSeparatedGroups: true,
    //   },
    // ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "prettier/prettier": "error",
        "no-shadow": "off",
        "no-undef": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
  root: true,
}
