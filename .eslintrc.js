module.exports = {
    "extends": "airbnb",
    "rules": {
        "global-require": [0],
        "react/prefer-stateless-function": [0, {"ignorePureComponents": "off" }]
    },
    "globals": {
        "window": true,
        "document": true
    }
};