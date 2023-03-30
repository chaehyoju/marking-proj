// prettier 은 기본적으로 .editorconfig 파일을 고려합니다. .prettierrc.js 에서 editorconfig : true로 제어가능
module.exports = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true, // JSX에서 singleQuote or doubleQuote
	endOfLine: 'lf',
	trailingComma: 'all', // comma 항상 붙이기
	bracketSpacing: false, // 객체리터럴에서 { } 사이에 공백을 넣을 것인지
	jsxBracketSameLine: false, // 여러줄의 JSX 요소가 있을때, > 를 마지막 줄의 끝부분에서 닫을 것인지
	arrowParens: 'always', // (x) => x : always | x => x : avoid
    rules: {
        "env": {
          "browser": true,
          "jest": true,
          "es6": true,
          "node": true
        },
        "plugins": ["prettier", "jsx-a11y"],
        "extends": ["airbnb","prettier/react", "eslint:recommended","plugin:prettier/recommended"],
        "parserOptions": {
          "ecmaVersion": 2018,
          "sourceType": "module",
          "ecmaFeatures": {
            "jsx": true
          }
        },
        "globals": {
          "Atomics": "readonly",
          "SharedArrayBuffer": "readonly"
        },
        "ignorePatterns": [
          "node_modules/"
        ],
        "rules": {
          "prettier/prettier": ["warn",{"endOfLine":"auto"}],
          "vue/jsx-filename-extension":
          ["error",
            { "extensions": [".js", ".jsx"] }
          ],
      
          // error case
          "object-shorthand": ["error", "always", { "avoidQuotes": true }],
          "no-extend-native": ["error", { "exceptions": ["Object"] }],
          // "max-len": ["error", { "code": 200, "tabWidth": 4 }],
          "arrow-body-style": "off",
          "brace-style": "error",
          "curly": "error",
          "eqeqeq": "error",
          // off
          "jsx-a11y/mouse-events-have-key-events": "off",
          "jsx-a11y/no-static-element-interactions": "off",
          "comma-dangle": "off",
          "prefer-destructuring": 0,
          "no-use-before-define": "off",
          "no-underscore-dangle": "off",
          "no-unused-vars": "off",
          "camelcase": "off",
          "no-undef": "off",
          "no-param-reassign": "off",
          "prefer-template": "off",
          "import/newline-after-import": "off",
          "import/no-dynamic-require": "off",
          "no-console": "off",
          "guard-for-in": "off",
          "no-restricted-syntax": "off",
          "arrow-parens": "off",
          "implicit-arrow-linebreak": "off",
          "consistent-return": "off",
          "import/no-extraneous-dependencies": "off",
          "import/no-unresolved": "off",
          "react/no-array-index-key": "off",
          "react/forbid-prop-types": "off",
          "react/jsx-props-no-spreading": "off",
          "jsx-a11y/click-events-have-key-events": "off",
          "import/no-absolute-path": "off",
          "import/extensions": "off",
          "import/prefer-default-export": "off",
          "jsx-a11y/img-redundant-alt": "off",
          "jsx-a11y/label-has-associated-control": "off",
          "jsx-a11y/control-has-associated-label": "off",
          "no-return-await": "off"
        }
      }
};