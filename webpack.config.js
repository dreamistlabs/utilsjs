const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const modules = ['error', 'gimmejs', 'number'];

module.exports = modules.map(function(module) {
  const modulePath = `./packages/${module}`;
  return {
    mode: 'production',
    entry: {
      [module]: `${modulePath}/src/index.js`,
    },
    output: {
      path: path.resolve(__dirname, `${modulePath}/dist`),
      filename: chunkData => {
        return chunkData.chunk.name === 'gimmejs' ? '[name].js' : 'gimmejs-[name].js';
      },
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
        },
      ],
    },
    optimization: {
      minimize: false,
    },
    plugins: [new CleanWebpackPlugin(`${modulePath}/dist`)],
  };
});
