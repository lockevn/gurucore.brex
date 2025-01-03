import antfu from '@antfu/eslint-config'
import globals from 'globals'
import AutoImportGlobals from './src/types/.eslintrc-auto-import.json' with { type: 'json' }

export default antfu(
  {
    stylistic: false,
    typescript: true,
    vue: true,
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.worker,
        ...globals.webextensions,
        ...AutoImportGlobals.globals,
      },
    },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      '**/*.js',
      '**/*.d.ts',
      'public',
      'build',
      'coverage',
      'tests',
      'cypress',
      'src/types/**/*',
      'eslint.config.mjs',
    ],
  },
  {
    rules: {
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-restricted-globals': 'warn',
      'import/order': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',

      '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
      'ts/explicit-function-return-type': 'off',

      // lockevn added
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-exports': 'off',
      'jsonc/sort-keys': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
    },
  }
)
