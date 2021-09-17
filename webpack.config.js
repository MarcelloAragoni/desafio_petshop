const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/style.scss',
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  plugins:[new MiniCssExtractPlugin({
    filename:'style.css'
  })],
  module:{
    rules:[
      {
        test:/\.scss$/i,
        use:[
          MiniCssExtractPlugin.loader,"css-loader","sass-loader"
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};