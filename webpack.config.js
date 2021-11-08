const html = require('html-webpack-plugin')


module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new html({template: './public/index.html'})
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
