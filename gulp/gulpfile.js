// основний модуль
// імпортуємо сам галп з пакету галпа
import gulp from 'gulp';
// імпортуємо наши шляхи
import { path } from './gulp/config/path.js';
// глобально викорисотвувати шляхи та галп, не тільки тут
import { plugins } from './gulp/config/plugins.js';
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// імпорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';


// наблюдач за зміненнями в файлах
function watcher() {
    // шлях,дія яку виконає з тими, за якими наблюдає
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);

}
// послідовна обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
// сценарій виконання задач, тоютопослідовно чи одночасно
// series виконує послідовно
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// тимчасово зробити задачу за замовчуванням, щоб робила
gulp.task('default', dev);