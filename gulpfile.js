var gulp = require("gulp"),
    terser = require("gulp-terser"),
    rename = require("gulp-rename"),
    eslint = require('gulp-eslint'),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require('gulp-cssnano'),
    prettyError = require('gulp-prettyerror');
    
gulp.task('scripts', function(){
  return gulp.src('./js/main.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});

gulp.task("styles", function() {
    return gulp
      .src("./sass/style.scss")
      .pipe(prettyError()) 
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./build/css"));
  });


gulp.task('default', gulp.series('scripts', 'styles'));