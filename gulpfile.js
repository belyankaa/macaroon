const less = require('gulp-less');
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


exports.default = function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
}

exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series('default'))
}
