const path = require('path');

module.exports = {
  //  this allows us to run this from anywhere
  context: __dirname,
  entry: './js/ClientApp.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  //  looks for file extension
  resolve: {
    extension: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        //  if file name passes this extension test, then run the loader
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
