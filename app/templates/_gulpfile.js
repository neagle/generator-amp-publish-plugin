/*jshint node:true*/
'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	fs = require('fs'),
	replace = require('gulp-replace'),
	connect = require('gulp-connect'),
	shell = require('gulp-shell');

// Sass
gulp.task('sass', function () {
	return gulp.src('src/scss/main.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(minifycss())
	.pipe(gulp.dest('build/css'))
	.pipe(notify({ message: 'Rebuilt Sass' }));
});

// JavaScript
gulp.task('javascript', function () {
	return gulp.src('src/js/main.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('default'))
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
	.pipe(notify({ message: 'Rebuilt JavaScript' }));
});

// Markup
gulp.task('markup', ['sass', 'javascript'], function () {
	return gulp.src('src/html/main.html')
	.pipe(replace('@@css', fs.readFileSync('build/css/main.css')))
	.pipe(replace('@@js', fs.readFileSync('build/js/main.js')))
	.pipe(gulp.dest('build'))
	.pipe(notify({ message: 'Rebuilt Markup' }));
});

gulp.task('default', function () {
	gulp.start('markup');
});

gulp.task('watch', function () {
	connect.server({
		host: '<%= _.slugify(name) %>',
		root: 'build',
		port: 8000
	});

	gulp.watch('src/scss/**', ['sass']);
	gulp.watch('src/js/**', ['javascript']);
	gulp.watch('src/html/**', ['markup']);
});

// Copy the contents of main.html to the clipboard (on Macs)
// so that it can be pasted directly in to AMP's textarea
gulp.task('copy', ['markup'], shell.task([
	'pbcopy < build/main.html'
]));
