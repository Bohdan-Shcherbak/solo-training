// сборщик штмл файлів в 1
import fileinclude from "gulp-file-include";
// перероблює картинки в свг
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
// додає дату та час
import versionNumber from 'gulp-version-number';
// import pug from gulp-pug

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message %>'
        })))
        .pipe(fileinclude())
        // .pipe(pug({
        // зжимання штмл файлу
        // pretty:true,
        // показувати в терміналі який файл опрацьован
        // vebose:true
        // }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpHtmlNosvg()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}
