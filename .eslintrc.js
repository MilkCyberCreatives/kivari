// .eslintrc.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This adapter allows using the old-style "extends" (like next/core-web-vitals)
// inside the new flat config system.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use Next.js recommended + Core Web Vitals
  ...compat.extends("next/core-web-vitals"),

  // You can add custom rules here
  {
    rules: {
      "react/jsx-key": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
