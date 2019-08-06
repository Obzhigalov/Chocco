const { src, dest, task, series, watch } = require('gulp')

const rm = require( 'gulp-rm' );
const sass = require("gulp-sass");
const concat = require("gulp-concat")
const browserSync = require('browser-sync').create();
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');


task('clean', () => {
    return src('./prod/**/*', { read:false }).pipe(rm())
})

sass.compiler = require('node-sass');

task("compile", () => {
    return src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(concat("main.scss"))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('css'));
});

task("copyHtml", () => {
    return src('index.html').pipe(dest('./prod/'))
})

task("copyStyle", () => {
    return src('css/*.css').pipe(dest('./prod/css'))
});

task("copyImg",() => {
    return src('img/**/*').pipe(dest('./prod/img/'))
})

task("copyJs",() => {
    return src('js/**/*').pipe(dest('./prod/js/'))
})

task("copyVideo",() => {
    return src('video/**/*').pipe(dest('./prod/video/'))
})

task('icons', function() {

});

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./prod"
        }
    });
});

watch('sass/**/*.scss', series("compile"));

task("default", series("clean","copyHtml", "copyStyle", "copyImg", "copyJs","copyVideo", "compile", "server"));