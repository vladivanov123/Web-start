var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var tinyPNG = require('gulp-tinypng-compress')


gulp.task('minify-css', function(done){
  gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
     compatibility:  'ie8'
}))
.pipe(gulp.dest('dist/css/'))

done();
});

gulp.task('move-js', function(done){
  gulp.src('./src/js/*.js')

.pipe(gulp.dest('dist/js/'))

done();
});

gulp.task('htmlmin', function(done){
  gulp.src('./src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true 
  }))
.pipe(gulp.dest('dist/'))

done();
});

gulp.task('fonts', function(done){
  gulp.src('./src/fonts/**/*')
.pipe(gulp.dest('dist/fonts'))

done();
});

gulp.task('tinypng',  function (done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinyPNG({
        key:  '2D2j58RbgKBB0c9Mj6LtPNWpwkhvsV15'
      }))
      .pipe(gulp.dest('dist/img/'))
      done();
});

gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', 'tinypng',  function(done) {

  done();
}));