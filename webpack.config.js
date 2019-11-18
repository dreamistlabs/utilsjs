const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modules = ['credit', 'currency', 'error', 'number'];

module.exports = modules.map(function(module) {
  const modulePath = module === 'gimmejs' ? './packages/gimmejs' : `./packages/gimmejs-${module}`;
  const library = module === 'gimmejs' ? 'Gimme' : `Gimme${module.toUpperCase()}`;

  return {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      [module]: `${modulePath}/index.ts`,
    },
    output: {
      path: path.resolve(__dirname, `${modulePath}/dist`),
      filename: chunkData => {
        return chunkData.chunk.name === 'gimmejs' ? '[name].js' : 'gimmejs-[name].js';
      },
      libraryExport: 'default',
      libraryTarget: 'umd',
      globalObject: "typeof self !== 'undefined' ? self : this",
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
