var gulp=require('gulp'); //tworzy środowisko gulpa
var sass=require('gulp-sass');

var browserSync=require('browser-sync').create();

gulp.task('browserSync', function(){
    browserSync.init ({
        server :{
        baseDir: "app"
    },
    })
})



//na obiekcie gulpa wykonuje konkretna funkcje. Ma skompilowac pliki do sassa
gulp.task('sass', function (){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true
    }))
});
