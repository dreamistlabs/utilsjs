module.exports = api => {
  api.cache(true);

  const presets = [
    'next',
    [
      'minify',
      {
        builtIns: false,
        evaluate: false,
        mangle: false
      }
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
