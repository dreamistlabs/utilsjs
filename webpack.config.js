const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modules = ['error'] || ['error', 'gimmejs', 'number'];

module.exports = modules.map(function(module) {
  const modulePath = `./packages/${module}`;
  return {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      [module]: `${modulePath}/src/index.ts`,
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
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: [/node_modules/, /__tests__/],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      minimize: false,
    },
    plugins: [new CleanWebpackPlugin()],
  };
});
