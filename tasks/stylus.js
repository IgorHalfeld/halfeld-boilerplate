
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const stylus = require('gulp-stylus')
const browserSync = require('browser-sync')

/**
 * Compile CSS
 */
module.exports = () => {

  return gulp.task('stylus', () => {
    gulp.src('app/src/stylus/main.styl')
      .pipe(plumber())
		  .pipe(stylus({
			  compress: true
		  }))
		  .pipe(gulp.dest('_site/assets/css/'))
		  .pipe(browserSync.reload({ stream: true }))
		  .pipe(gulp.dest('app/assets/css'))
  })
}