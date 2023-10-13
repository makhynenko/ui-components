module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['src/**/*.snap'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['accent-color'],
      },
    ],
  },
};
