module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-object-rest-spread',
  ];
  return { presets, plugins };
};
