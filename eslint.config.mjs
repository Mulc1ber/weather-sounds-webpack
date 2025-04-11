import globals from "globals";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "dist/**",
      "**/*.min.js",
    ],
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      semi: ["error", "always"],
    },
  },
];
