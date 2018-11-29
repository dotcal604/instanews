const gulp = require('gulp'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    bsync = require('browser-sync'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyError = require('gulp-prettyerror');
    
gulp.task('scripts', function(){
  return gulp.src('./js/main.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('styles', function() {
    return gulp
      .src('./sass/style.scss')
      .pipe(prettyError()) 
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ['last 2 versions']
        })
      )
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
  });


gulp.task('bwatch', function () {
    bsync.init({
        server: {
            baseDir: './'
        }
    });

    gulp
    .watch(['*.html', 'js/*.js', 'sass/*.scss'])
    .on('change', bsync.reload);
});

gulp.task('default', gulp.series('scripts', 'styles', 'bwatch'));