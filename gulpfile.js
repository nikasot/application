let gulp = require('gulp');
var browserSync = require('browser-sync').create();

// gulp.task('hello', function(){
//     console.log('ololosha');
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// gulp.task('styles', function(){
//     return gulp.src('css/*.css')
//     .pipe(gulp.dest('production/css/')),
//     console.log('все стили успешно перенесены');
// })