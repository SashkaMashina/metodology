import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      'quotes': ['error', 'single'], // Одинарные кавычки
      'semi': ['error', 'always'], // Точка с запятой обязательна
      'no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
      'no-undef': 'error', // Ошибка для необъявленных переменных
      'no-var': 'error', // Запрет на использование var
      'prefer-const': 'error', // Предпочтение const вместо let
      'arrow-spacing': ['error', { before: true, after: true }], // Пробелы вокруг стрелочных функций
      'no-multiple-empty-lines': ['error', { max: 1 }], // Максимум одна пустая строка
      'eol-last': ['error', 'always'], // Пустая строка в конце файла
      'comma-dangle': ['error', 'always-multiline'], // Висячая запятая для многострочных объектов/массивов
    },
  },
  pluginJs.configs.recommended,
];
