// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '');

module.exports = env => (merge(common, {
  entry: `${APP_DIR}/index.jsx`,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],
}));
