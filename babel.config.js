module.exports = api => {
  api.cache(true);

  const presets = ['@babel/preset-env', 'minify'];
  const plugins = [];

  return {
    ignore: ['src/**/*.spec.js', 'src/**/*.test.js'],
    presets,
    plugins,
  };
};
