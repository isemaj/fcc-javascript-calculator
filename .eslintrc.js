module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
    },
    "rules": {
    	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx" ]}],
      "react/require-default-props": [0, { forbidDefaultForRequired: true }],
      "no-shadow": ["off", { "builtinGlobals": false, "hoist": "never", "allow": [] }],
      "react/no-danger": [0],
    }
};