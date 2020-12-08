/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
console.log(isProduction);
module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'hidden-source-map' : 'eval',

  entry: './src/index',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@state': path.resolve(__dirname, 'src/state'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          { loader: 'file-loader', options: { outputPath: 'static/images' } },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[name].[hash].js' : isDevelopment && 'bundle.js',
    chunkFilename: isProduction
      ? '[name].[hash].chunk.js'
      : isDevelopment && '[name].chunk.js',
    publicPath: '/',
  },
  optimization: {
    minimize: isProduction,
    minimizer: [],
    splitChunks: {
      chunks: 'initial',
    },
  },

  plugins: [
    new webpack.ProvidePlugin({ React: 'react' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : {},
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
};
