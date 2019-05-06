const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const libName = 'Gimme';

const outputTargets = ['node', 'web'];

const outputPackageBundler = () => {
  return outputTargets.map(outputTarget => {
    return {
      mode: devMode ? 'development' : 'production',
      target: outputTarget,
      entry: {
        gimme: `./src/index.js`
      },
      output: {
        path: path.resolve(__dirname, `./dist`),
        filename: outputTarget === 'node' ? '[name].node.js' : '[name].js',
        library: libName,
        libraryTarget: 'umd'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                sourceMaps: true
              }
            }
          }
        ]
      },
      plugins: [new CleanWebpackPlugin()],
      optimization: {
        minimize: devMode ? false : true
      },
      watchOptions: {
        ignored: ['node_modules']
      },
      externals: {},
      devtool: 'source-map'
    };
  });
};
module.exports = outputPackageBundler();
