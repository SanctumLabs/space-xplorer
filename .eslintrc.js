module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    globals: {
        document: true,
        navigator: true,
        window: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2020,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        },
        sourceType: 'module'
    },
    plugins: [
        'react',
        'cypress',
        'import',
        'prettier',
        'react-hooks',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
            createClass: 'createClass'
        }
    },
    rules: {
        strict: 0,
        'import/no-named-as-default': 0,
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-param-reassign': ['off', { props: false }],
        'prettier/prettier': 'warn',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/no-did-update-set-state': 0,
        'no-unused-expressions': 0,
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                varsIgnorePattern: 'error',
                argsIgnorePattern: '^own[p|P]rops$|^prev[s|S]tate$|^e$|^_$'
            }
        ],
        'class-methods-use-this': 0,
        'import/extensions': [
            'error',
            'never',
            {
                packages: 'always'
            }
        ],
        'linebreak-style': 0,
        'no-console': 0,
        'no-restricted-globals': 'warn',
        'prefer-destructuring': ['warn', { object: true, array: false }],
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'jsx-a11y/label-has-associated-control': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.tsx', '.ts']
            }
        ],
        'react/prefer-stateless-function': [
            1,
            {
                ignorePureComponents: true
            }
        ],
        'react/display-name': [
            0,
            {
                ignoreTranspilerName: true
            }
        ],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 0,
                custom: 0
            }
        ]
    }
}