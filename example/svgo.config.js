module.exports = {
  plugins: [
    'prefixIds',
    {
      name: 'preset-default',
      params: { overrides: { removeViewBox: false, convertColors: { currentColor: true } } },
    },
    'removeDimensions',
    'removeXMLNS',
  ],
}
