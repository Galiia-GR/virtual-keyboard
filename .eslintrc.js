module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base',
  'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-globals': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
      },
    ],
  },
};
