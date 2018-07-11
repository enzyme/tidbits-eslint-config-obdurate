# eslint-config-obdurate
A stubborn, hardmode, lean-and-mean-js eslint config.

## Install

**pnpm**
`pnpm install eslint-config-airbnb eslint-import-resolver-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react @tidbits/eslint-config-obdurate`

**yarn**
`yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react @tidbits/eslint-config-obdurate`

**npm**
`npm install eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react @tidbits/eslint-config-obdurate`

## Details

Extends: **AirBnb** and adds:

```js
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
  'max-lines-per-function': ['error', {'max': 12, 'skipBlankLines': true, 'skipComments': true}],
  'max-statements-per-line': ['error', { 'max': 1 }],
  'max-classes-per-file': ['error', 1]
}
```
