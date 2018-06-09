'use strict';

/**
 * Imports
 */
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const prefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const config = require(path.join(__dirname, 'config'));

/**
 * Styles
 * 
 * @outputStyle compact,compressed,expanded,nested
 */
gulp.task('styles', () => {
  gulp.src(config.sass.files)
    .pipe(sourcemaps.init())
    .pipe(prefixer())
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(config.dist.path, 'css')));
});

gulp.task('sass-watcher', () => {
  gulp.watch(config.sass.files, ['styles']);
});

/**
 * Javascript
 */
gulp.task('js', () => {
  gulp.src(config.src.files)
    .pipe(concat(config.dist.name + '.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.join(config.dist.path, 'js')));
});

gulp.task('js-watcher', () => {
  gulp.watch(config.src.files, ['js']);
});

gulp.task('dev', ['sass-watcher', 'js-watcher']);
gulp.task('default', ['styles', 'js']);
