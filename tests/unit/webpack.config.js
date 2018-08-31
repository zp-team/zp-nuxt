const path = require('path')

module.exports = {
  externals: [require('webpack-node-externals')()],
  devtool:   'inline-cheap-module-source-map',

  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../../')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          transformToRequire: {
            video: '',
            source: '',
            img: '',
            image: ''
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'null-loader'
      }
    ]
  }
}