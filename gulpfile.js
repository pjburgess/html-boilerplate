/**
 * NOTES:
 *
 * - SASS will only look in the top level assets/css folder for .scss files as
 *   opposed to scanning all folders.
 */

'use strict';

var gulp = require('gulp'),
	include = require('gulp-include'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('app/assets/css/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('scripts', function() {
	gulp.src('app/assets/js/*.js')
		.pipe(include()).on('error', console.log)
		.pipe(gulp.dest('public/assets/js/'));
});

gulp.task('watch', function() {
	gulp.watch('app/assets/css/**/*.scss', ['sass']);
	gulp.watch('app/assets/js/**/*.js', ['scripts']);
});

gulp.task('production', ['sass', 'scripts']);
