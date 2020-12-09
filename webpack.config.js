/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',

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

  optimization: {
    minimizer: prod
      ? [
          new OptimizeCSSAssetsPlugin(),
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // 콘솔 로그 제거
              },
            },
          }),
        ]
      : [],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.ProvidePlugin({ React: 'react' }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
  ],
};
