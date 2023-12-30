/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const eslintConfig = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:drizzle/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:react-prefer-function-component/recommended',
    'plugin:react/all',
    'plugin:@typescript-eslint/recommended'
  ],
  ignorePatterns: [
    '.next/**',
    '.vercel/**',
    'node_modules/**',
    'dist/**',
    'next.config.js',
    'coverage/**'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@tanstack/query',
    'prettier',
    'drizzle',
    'react-hooks',
    'react',
    'import',
    'simple-import-sort',
    'turbo'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off', // TODO: Add back
    '@typescript-eslint/no-explicit-any': 'off', // TODO: Add back
    '@typescript-eslint/no-non-null-assertion': 'off', // TODO: Add back
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'arrow-parens': ['error', 'always'],
    camelcase: 'error',
    'comma-dangle': ['error', 'only-multiline'],
    curly: ['error', 'all'],
    'drizzle/enforce-delete-with-where': ['error', { drizzleObjectName: ['db'] }],
    'func-names': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        bundledDependencies: false,
        devDependencies: [
          '**/onboardDemo/**',
          '**/integrationTests/**',
          '**/next.config.js',
          '**/jest.config.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.mock.ts'
        ],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/order': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'error',
    'no-continue': 'off',
    'no-loop-func': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/material/*', '!@mui/material/styles']
      }
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: "Don't declare enums",
        selector: 'TSEnumDeclaration'
      }
    ],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-handler-names': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        assignment: false,
        declaration: false
      }
    ],
    'react/no-set-state': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 0,
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    semi: 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    'sort-vars': 'error',
    'turbo/no-undeclared-env-vars': 'off' // TODO: Add back
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.svg', '.ts', '.tsx']
      },
      typescript: {}
    },
    react: {
      version: '18.2.0'
    }
  }
};

module.exports = eslintConfig;
