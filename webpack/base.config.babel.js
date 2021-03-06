import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';

import writeStats from './utils/write-stats';
import postcssConfig from '../postcss.config';

import { TITLE } from '../src/constants/app.js';

const ROOT_PATH = path.resolve(__dirname, '..');

const JS_REGEX = /\.jsx?$/;
const CSS_REGEX = /\.s?css$/;
const IMAGES_REGEX = /\.(jpe?g|png|gif|svg)?$/;

const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const IMAGES_PATH = path.resolve(ROOT_PATH, 'src', 'images');
const WEBAPP_ICONS_PATH = path.resolve(ROOT_PATH, 'src', 'images', 'favicons');

const POSTCSS_PLUGINS = postcssConfig.plugins;

const LOADER_POSTCSS = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [...postcssConfig.plugins],
  },
};

const LOADER_SASS = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    importer: jsonImporter,
  },
};

// https://webpack.github.io/docs/configuration.html
const webpackConfig = {
  devtool: 'source-map',

  entry: ['babel-polyfill', './src/client/'],

  output: {
    path: DIST_PATH,
    filename: '[name]-[hash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /manifest.json$/,
        loader: 'file-loader?name=manifest.json!web-app-manifest-loader',
        // options: {
        //   name: 'manifest.json',
        // }
      },
      {
        test: JS_REGEX,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  plugins: [
    function writeStatsWhenPluginsDone() {
      this.plugin('done', writeStats);
    },
  ],
};

export {
  webpackConfig as default,
  CSS_REGEX,
  IMAGES_REGEX,
  DIST_PATH,
  SRC_PATH,
  WEBAPP_ICONS_PATH,
  IMAGES_PATH,
  LOADER_POSTCSS,
  LOADER_SASS,
};
