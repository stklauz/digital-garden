const path = require('path');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {

  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    filename: 'app.js',    
    path: '/dist',
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};