const webpack = require("webpack");
const path = require('path');
const merge = require('webpack-merge');
const MiniProgramPlugin = require('mini-program-webpack-loader').plugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = (file) => path.resolve(__dirname, '../', file);
global.context = resolve('src/miniprogram');

const baseConfig = require('./webpack.config.base');
const BUILD_ENV = process.env.BUILD_ENV

module.exports = merge(baseConfig, {
  context: global.context,
  entry: resolve('src/miniprogram/app.json'),
  output: {
    path: resolve(`dist/${BUILD_ENV}`)
  },
  plugins: [
    // 图片的复制
		new CopyWebpackPlugin([
			{
				from: resolve('src/miniprogram/sitemap.json'),
				to: resolve(`dist/${BUILD_ENV}/sitemap.json`),
			},
			{
				from: resolve('src/miniprogram/images/**'),
				to: resolve(`dist/${BUILD_ENV}`),
			}
		]),
    new MiniProgramPlugin({
      extfile: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        'BUILD_ENV': JSON.stringify(BUILD_ENV)
      }
    })
  ]
});

