const gulp = require('gulp');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const del = require('del');
const webpack = require("webpack");
var gutil = require("gulp-util");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.js");

gulp.task('eslint', () => {
  gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach('compact', process.stderr));
});

/**
 *  Cleans up dist folder.
 */
gulp.task('clean:dist', () => {
  return del([
    'dist/**/*',
    '!dist/.gitignore'
  ]);
});

/**
 *  Moves all non-js files to dist folder.
 */
gulp.task('move:dist', () => {
  return gulp.src('src/**/!(*.js)')
    .pipe(gulp.dest('./dist'));
});

/**
 * Moves all js files, converts to es5 and moves to dist folder.
 */
gulp.task('build:dist', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ["es2015", "react", "stage-0"],
      plugins: ["syntax-jsx"]
    }))
    .pipe(gulp.dest('dist'));
});

/**
 * Runs webpack.
 */
gulp.task("webpack", function(callback) {
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});

gulp.task('default', () => {
  runSequence('eslint', 'clean:dist', 'move:dist', 'build:dist', 'webpack');
});