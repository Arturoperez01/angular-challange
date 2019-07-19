const   del = require('del'),
        gulp = require('gulp'),
        runSequence = require('run-sequence'),
        sass    = require('gulp-sass');
        //sourcemaps = require('gulp-sourcemaps');
/*
const CacheBuster = require('gulp-cachebust');
const cachebust = new CacheBuster();
//*/

gulp.task('clean', function (cb) {
    del([
        'style'
    ], cb);
});

gulp.task('build-css', function() {
        
    return gulp.src('./app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
});

gulp.task('default',  function(done) {
        runSequence('clean', 'build-css', done);
    }
);
//*/