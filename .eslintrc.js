module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/require-default-props': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@api', './src/api'],
          ['@common', './src/common'],
          ['@hooks', './src/hooks'],
          ['@pages', './src/pages'],
          ['@store', './src/store'],
          ['@themes', './src/themes'],
          ['@utils', './src/utils'],
          ['@public', './public'],
        ],
      },
    },
  },
};
