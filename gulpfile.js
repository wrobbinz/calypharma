const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')


/* HTML: Minify */
gulp.task('html', () => {
  gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
})
/* JavaScript: Transpile > Concat > Minify */
gulp.task('scripts', () => {
  gulp.src('src/js/*.js')
    .pipe(babel()) // compile
    .pipe(concat('app.js')) // concat
    .pipe(rename('app.min.js'))
    .pipe(uglify()) // minify
    .pipe(gulp.dest('dist/js'))
})

/* Sass/CSS: Compile (CSS) > Minify > AutoPrefix > Concat */
gulp.task('styles', () => {
  gulp.src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'))
})
/* Images: Optimize */
gulp.task('images', () => {
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})
/* Files: Move 'em */
const files = [
  'src/favicon.ico',
  'src/robots.txt',
]
gulp.task('files', () => {
  gulp.src(files)
    .pipe(gulp.dest('dist'))
})

// gulp.task('semantic', () => {
//   gulp.src('semantic/**/*')
//     .pipe(gulp.dest('dist/semantic'))
// })

/* Build */
gulp.task('build', ['html', 'scripts', 'styles', 'images', 'files'])
/* Watch(build) */
gulp.task('watch', () => {
  gulp.watch('src/**', ['build'])
})
