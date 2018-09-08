module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
    },
    "rules": {
    	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx" ]}],
      "no-shadow": ["error", { "builtinGlobals": true, "hoist": "never"}]

    }
};