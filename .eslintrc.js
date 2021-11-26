module.exports = {
  root: true,
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'prettier'],
  parser: 'vue-eslint-parser',
  rules: {
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-useless-escape': 'off',
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }]
  }
}
