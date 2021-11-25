const html = require('html-webpack-plugin')
const WebpackManifest = require('webpack-pwa-manifest')
const path = require('path')


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
    new html({template: './public/index.html'}),
    new WebpackManifest({
      name: 'Petbook, tu app de fotos de mascotas',
      shortname: 'Petbook 😸',
      start_url: '/index.html',
      description: 'Con petbook puedes encontrar animales tiernos',
      background_color: '#18191a',
      theme_color: '#242526',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
