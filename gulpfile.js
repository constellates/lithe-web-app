var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat');

gulp.task('browserify', function () {
	gulp.src('src/js/main.js')
	.pipe(browserify({transform: 'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    gulp.src('./src/css/main.scss')
        .pipe(sass({
        	outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist'));
    gulp.src('src/assets/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('build', ['browserify', 'sass', 'copy']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['build', 'watch']);