module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: ['src/**/*.snap', 'src/**/*.tsx'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['accent-color'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
