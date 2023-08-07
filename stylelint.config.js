module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['src/**/*.snap'],
  rules: {
    "color-hex-case": "upper",
    "property-no-unknown": [true, {
      "ignoreProperties": ["accent-color"]
    }]
  }
};
