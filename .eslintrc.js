module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['@react-native-community', 'prettier'],
  plugins: ['react-native', 'import'],
  rules: {
    // code-style
    'no-console': 2,
    'no-use-before-define': 0,
    'max-lines': [2, { max: 150, skipBlankLines: true, skipComments: true }],
    'max-len': [1, 120, 2],
    'no-redeclare': 2,
    'no-duplicate-case': 2,

    // react
    'react/sort-comp': 'off',
    'react-native/no-unused-styles': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,

    //import
    'imports-first': 0,
    'import/extensions': 0,
    'import/order': [
      2,
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/ignore': 'node_modules/react-native/index.js',
    'import/resolver': {
      typescript: true,
      'babel-module': {},
    },
  },
}
