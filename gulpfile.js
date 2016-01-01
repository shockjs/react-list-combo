const gulp = require('gulp');
const eslint = require('gulp-eslint');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const del = require('del');

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


gulp.task('default', () => {
  runSequence('eslint', 'clean:dist', 'build:dist');
});