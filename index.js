module.exports = {
  rules: {
      "array-bracket-spacing": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "no-constant-condition": ["error", {"checkLoops": false}],
      "no-loss-of-precision": "warn",
      "no-regex-spaces": "warn",
      "no-unreachable": "warn",
      "constructor-super": "error",
      "no-var": "error",
      "no-console": ["error", { "allow": ["warn", "error", "log", "table"] }],
      "max-lines": ["error", {"max": 2000, "skipComments": true}],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "computed-property-spacing": ["error", "never"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "constructor-super": "error",
      "linebreak-style": [
        "error"
    ],
      "max-classes-per-file": ["error", 1],
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
      "semi": [
          "error",
          "always"
      ],
      "no-unused-vars": [
        "error",
        { "vars": "all", "args": "after-used", "ignoreRestSiblings": false
        }
      ],
      "max-len": ["error", {
        "code": 250
      }],
      "max-lines-per-function": ["error", 50]
  }
}