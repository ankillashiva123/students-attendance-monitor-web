'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var modRewrite = require('connect-modrewrite');
var util = require('util');
var middleware = require('./proxy');
var fs = require("fs");
var url = require("url");
var path = require("path");
var historyApiFallback = require('connect-history-api-fallback');

var config = require('./config');

/**
 * Build project, start watching for all changes and serve it using Browsersync.
 * @gulptask serve
 */
gulp.task('serve', ['watch'], function () {
  initBrowsersync([
    config.paths.serve,
    config.paths.src,
  ]);
});

/**
 * Build production version and serve it using Browsersync.
 * @gulptask serve:dist
 */
gulp.task('serve:dist', ['build'], function () {
  initBrowsersync(config.paths.dist);
});

/**
 * Initialize Browsersync.
 * @see https://browsersync.io/docs
 * @param {string|Array} baseDir
 * @return {void}
 */
function initBrowsersync(baseDir) {
  var routes = null;

  // Rewrite path to `bower_components` if serving sources.
  if (baseDir === config.paths.src ||
    (util.isArray(baseDir) && baseDir.indexOf(config.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components',
    };
  }

  var folder = path.resolve(__dirname, "../");

  browserSync.init({
    port: 8080,
    middleware: [ historyApiFallback() ],
    server: {
      baseDir: baseDir,
      routes: routes,
    },
    startPath: '/',
  });
}
