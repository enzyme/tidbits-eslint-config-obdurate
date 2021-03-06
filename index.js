module.exports = {
  'env': {
    'browser': true,
  },
  'parserOptions': {
    'ecmaVersion': 9,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'extends': 'airbnb',
  'rules': {
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 1 }],
    'no-magic-numbers': ['error', { 'enforceConst': true }],
    'array-bracket-newline': ['error', { 'multiline': true, 'minItems': 2 }],
    'array-element-newline': ['error', { 'multiline': true, 'minItems': 2 }],
    'camelcase': ['error'],
    'capitalized-comments': ['error', 'always'],
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
    'complexity': ['error', { 'max': 3 }],
    'max-depth': ['error', 1],
    'max-lines': ['error', {'max': 200, 'skipBlankLines': true, 'skipComments': true}],
    'max-lines-per-function': ['error', {'max': 20, 'skipBlankLines': true, 'skipComments': true}],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'max-classes-per-file': ['error', 1],
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line', 'enforceForArrowConditionals': true, }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', ".jsx"] }]
  }
};
