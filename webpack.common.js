const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/pages/home/index.js',
    'dropdown-menu': './src/pages/dropdown-menu/index.js',
    'image-carousel': './src/pages/image-carousel/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/pages/home/index.html',
      filename: 'home.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/dropdown-menu/index.html',
      filename: 'dropdown-menu.html',
      chunks: ['dropdown-menu'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/image-carousel/index.html',
      filename: 'image-carousel.html',
      chunks: ['image-carousel'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
