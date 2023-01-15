module.exports = {
    rules: {
        "no-constant-condition": ["error", {"checkLoops": false}],
        "no-loss-of-precision": "warn",
        "no-regex-spaces": "warn",
        "no-unreachable": "warn",
        "constructor-super": "error",
        "no-var": "error",
        "no-console": ["error", { "allow": ["warn", "error", "log", "table"] }],
        "max-lines": ["error", {"max": 100, "skipComments": true}],
        "linebreak-style": [
            "error",
            "unix"
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
          "code": 100
        }]
    }
}