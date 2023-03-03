const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';
const ALWAYS = 'always';
const ALWAYS_MULTILINE = 'always-multiline';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/interface-over-type-literal': OFF,
    '@typescript-eslint/jsx-no-lambda': OFF,
    '@typescript-eslint/no-empty-interface': OFF,
    '@typescript-eslint/no-parameter-properties': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    '@typescript-eslint/object-literal-sort-keys': OFF,

    'react/default-props-match-prop-types': OFF,
    'react/display-name': ERROR,
    'react/jsx-filename-extension': [
      WARN,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/prop-types': OFF,
    'react/sort-comp': OFF,

    'arrow-body-style': OFF,
    'comma-dangle': [ERROR, ALWAYS_MULTILINE],
    curly: ERROR,
    'no-console': ERROR,
    'no-debugger': ERROR,
    'no-empty-function': OFF,
    'no-extra-semi': ERROR,
    'no-plusplus': OFF,
    'no-useless-constructor': OFF,
    semi: [ERROR, ALWAYS],
    'semi-spacing': ERROR,
  },
};
