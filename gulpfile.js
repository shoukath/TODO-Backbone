'use strict'

// Include gulp
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var path = require('path');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('less', function () {
  return gulp.src('./src/styles/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minify({keepBreaks: false}))
    .pipe(concat('all.css'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
	watch('./src/styles/**/*', function() {
		gulp.run('less');
	});
});
 // Default Task
gulp.task('default', ['less']);
