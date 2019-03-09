const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path'); 

module.exports = {
  entry: {
    index: './index.ts',
  },
  externals: [nodeExternals()],
  mode: 'production',
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias : {
      src: path.resolve(__dirname, 'src/'),
      tests: path.resolve(__dirname, 'tests/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'template.yaml',
      to: 'template.yaml'
    }, {
      from: 'package.json',
      to: 'package.json'
    }, {
      from: 'yarn.lock',
      to: 'yarn.lock'
    }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  }
};

