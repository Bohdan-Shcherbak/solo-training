// шукає і замінює, потрібен для того, щоб можно було замість вкладеності точки, використовувати @ 
import replace from "gulp-replace";
// обробляє помилки які виникають
import plumber from 'gulp-plumber';
// оповіщає про помилки
import notify from 'gulp-notify';
// локальний сервер
import browsersync from 'browser-sync';
// перевірка оновлення
import newer from 'gulp-newer';

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer
}