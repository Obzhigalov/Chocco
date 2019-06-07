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



task('clean', () => {
    return src('prod/**/*', { read:false }).pipe(rm())
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
})

task('server', function() {
    browserSync.init({
        server: {
            baseDir: "index.html"
        }
    });
});

watch('sass/**/*.scss', series("compile"));

task("default", series("compile", "server"));