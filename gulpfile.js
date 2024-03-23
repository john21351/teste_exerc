
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin').default;

function compilaSass() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest('./dist/css')); 
}
function comprimeImagens () {
    return gulp.src('./imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
} 


exports.default = gulp.parallel(compilaSass, comprimeImagens);