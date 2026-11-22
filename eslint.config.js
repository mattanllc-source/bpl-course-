import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/dist", "**/node_modules", "videos/**", "exports/**", "playwright-report", "test-results",
    // Course page script fragments are concatenated into one script by build.py; checked by its own Playwright checks.
    "scripts/course_site/app/**", "scripts/course_site/vendor/**", "scripts/course_site/next/**", ".claude/worktrees/**"] },
  { files: ["**/*.{ts,tsx,js}"], extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: { ecmaVersion: 2022, globals: { ...globals.browser, ...globals.node } } },
  { files: ["calculators/**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: { ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }] } },
);
