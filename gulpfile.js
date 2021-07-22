const { gulp, src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');


const jsPath = 'javascript/*.js';
const scssPath = 'src/css/*.scss';

function copyHtml() {
    return src('src/*.html').pipe(dest('./dist'));
}

function imgTask() {
    return src('src/images/*').pipe(imagemin()).pipe(dest('dist/images'));
}

function jsTask() {
    return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/js'));
}

function scssTask() {
    return src(scssPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/style'));
}


function watchTask() {
    watch([scssPath, jsPath], { interval: 1000 }, parallel(scssTask, jsTask));
}
exports.default = series(parallel(copyHtml, imgTask, jsTask, scssTask), watchTask);