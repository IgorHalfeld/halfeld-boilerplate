
const gulp = require('gulp')
const tasks = require('./tasks')

tasks.runAll()

gulp.task('default', ['stylus', 'js', 'browser-sync', 'watch'])
