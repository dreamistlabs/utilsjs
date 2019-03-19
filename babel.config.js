module.exports = api => {
  api.cache(true);

  // @todo Minify only in production.
  const presets = [['minify', { builtIns: false, mangle: false }], '@babel/preset-env'];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'];

  return {
    ignore: ['src/**/*.spec.js', 'src/**/*.test.js'],
    presets,
    plugins,
  };
};
