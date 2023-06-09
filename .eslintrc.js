module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "sort-keys-custom-order",
    "simple-import-sort",
    "import",
    "unused-imports",
    "tailwindcss",
  ],
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    // "no-undef": "error",
    "react/prop-types": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": ["error", {
      "orderedKeys": [
        "id",
        "name",
        "title"
      ]
    }],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": ["error", {
      "orderedKeys": [
        "id",
        "name",
        "title"
      ]
    }],
    "unused-imports/no-unused-imports": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      // レスポンシブの記述をまとめる
      groupByResponsive: false,
      // 独自のクラスでエラーを出さなくする
      // whitelist: [""],
    }
  },
};

