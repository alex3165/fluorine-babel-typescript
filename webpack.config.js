/*eslint-disable */

var webpack = require('webpack')
var path = require('path')

var PRODUCTION = process.env.NODE_ENV === 'production'

if (!PRODUCTION) {
  require('dotenv').config()
}

var replace = {};
for (var key in process.env) {
  if (process.env.hasOwnProperty(key)) {
    replace["process.env." + key] = '"' + process.env[key] + '"';
  }
}

var plugins = [ new webpack.DefinePlugin(replace) ]
var productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]

var loaders = [
  {
    test: /\.ts|.tsx$/,
    loader: 'ts-loader',
    include: path.join(__dirname, 'src')
  },
  {
    test: /\.css$/,
    loaders: [ 'style', 'raw' ],
    include: path.join(__dirname, 'src')
  }
];

module.exports = {
  cache: !PRODUCTION,
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: [ '', '.js', '.ts' ]
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc'),
    emitError: true,
    emitWarning: true,
    failOnWarning: false,
    failOnError: false
  },
  entry: [
    './src/index.tsx'
  ],
  devtool: 'source-map',
  plugins: plugins.concat(PRODUCTION ? productionPlugins : []),
  module: {
    loaders: loaders
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/www/'
  }
}

