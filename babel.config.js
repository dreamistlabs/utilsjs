module.exports = api => {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = ['@babel/plugin-proposal-class-properties'];

  return {
    ignore: ['src/**/*.spec.js', 'src/**/*.test.js'],
    presets,
    plugins,
  };
};
