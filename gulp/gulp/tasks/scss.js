import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

// зжимає цсс
import cleanCss from 'gulp-clean-css';
// webp зображення
import webpcss from 'gulp-webpcss';
// добавляє префікси
import autoPrefixer from 'gulp-autoprefixer'
// групування медіа запросів
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);
export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error <%= error.message %>'
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        // створює несжатий файл щоб подивитись
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}