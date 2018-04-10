const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')


const jsDest = 'dist/js'

gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    .pipe(babel()) // compile
    .pipe(gulp.dest(jsDest))
    .pipe(concat('app.js')) // concat
    .pipe(gulp.dest(jsDest))
    .pipe(rename('app.min.js'))
    .pipe(uglify()) // minify
    .pipe(gulp.dest(jsDest))
})

gulp.task('styles', () => {
  gulp.src('src/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('build', ['scripts', 'styles'])

gulp.task('watch', () => {
  gulp.watch('src/**', ['build'])
})
