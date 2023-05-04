// Отримуєм ім'я папки проекту
// імпортуємо модуль path
import * as nodePath from 'path';
// за допомогою нього отримуємо назву папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

// шлях до папки з результатом
const buildFolder = `./dist`;
// шлях до папки з джерелами
const srcFolder = `./src`;

// зберігається вся інформація про шляхи до любого файлу або папки
export const path = {
    // обєект шляхів до результату папки
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        // результати будуть кидатись до папки з результатами до папки файли 
        files: `${buildFolder}/files/`
    },
    // обєект шляхів до джерела папки
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        // підключення картинок
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        // html: `${srcFolder}/*.pug`,
        html: `${srcFolder}/*.html`,
        // вказуємо, що початковий файл знаходитья в початковій папці, в папці файли та має будь-яку вкладеність,назву,розширення
        files: `${srcFolder}/files/**/*.*`,
    },
    // окремо вкажемо шляхи до файлів і папок за якими повинен стежити галп і при зміненнях виконувати дії
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif,webp}`,
        // html: `${srcFolder}/**/*.pug`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    // Властивості
    // видаляє в папці результат
    clean: buildFolder,
    // дорівнюж папці з результатом
    buildFolder: buildFolder,
    // шлях шляху
    srcFolder: srcFolder,
    // назва папки проекта
    rootFolder: rootFolder,
    // папка на віддаленому фтп сервері
    ftp: ``
}