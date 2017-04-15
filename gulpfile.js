'use strict';

var gulp = require('gulp'),
	include = require('gulp-include'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('app/assets/css/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('scripts', function() {
	gulp.src('app/assets/js/app.js')
		.pipe(include()).on('error', console.log)
		.pipe(gulp.dest('public/assets/js/'));
});

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('production', ['sass', 'scripts']);
