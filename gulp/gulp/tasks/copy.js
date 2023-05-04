// файлик для конкретних задач
// функція копіювання файлів з джерела в результати
export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
}
