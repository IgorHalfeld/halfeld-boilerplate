
const gulp = require('gulp')

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
module.exports = () => {
  return gulp.task('watch', () => {
  	gulp.watch('app/src/stylus/**/*.styl', ['stylus']);
  	gulp.watch('app/src/js/**/*.js', ['js']);
  	gulp.watch('app/src/img/**/*.{jpg,png,gif,svg}', ['imagemin']);
  	gulp.watch([
      'app/**/*.html',
      'app/index.html',
      'app/_includes/**/*.html',
      'app/_layouts/**/*.html',
      'app/_posts/**/*'
    ], ['jekyll-rebuild']);
  });
}
