//инициализируем слайдер
let myImageSlider = new Swiper('.image-slider',{
    //стрелки
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    //навигация
    //буллеты, текущее положение, прогрессбар
    // pagination:{
    //     el:'.swiper-pagination',
    // //     //буллеты
    // //     clickable:true,
    // //    //жинамические буллеты
    // //     dynamicBullets:true,
    // //     //кастомные буллеты
    // //     renderBullet: function (index, className){
    // //         return '<span class="' + className +'">' + (index + 1) + '</span>';
    // //     },
    // // },
        
    //     //Фракция
    //     type: 'fraction',
    //     // //Кастомный вывод Фракции
    //     renderFraction: function (currentClass, TotalClass){
    //         return 'Фото <span class="' + currentClass + '"></span>' + 
    //         ' из ' + 
    //         '<span class="' + TotalClass + '"></span>';
    //     },
    //   /*  //прогрессбар
    //     type: 'progressbar'*/
    // },
    // //скролл
    //     scrollbar:{
    //     el: '.swiper-scrollbar',
    //     //Возможность перетаскивать скролл
    //     draggable: true,
    // },

    // //Включение/отключение
    // //перетаскивание на пк
    // simulateTouch:true,
    // //Чувствительность свойства
    // touchRatio: 1,
    // // угол срабатывания свойства
    // touchAngle: 45,
    // // курсор перетаскивания
    // grabCursor: true,

    // // переключение при клике на слайд
    // slideToClickedSlide: true,

    // // навигация по хешу
    // hashNavigation:{
    //     // отслеживать состояние
    //     watchState:true,
    // },

    // // укправление клавиатурой
    // keyboard:{
    //     // включить/выключить
    //     enabled:true,
    //     // включить/выключить
    //     // только когда слайдер
    //     // в пределах вьюпорта
    //     onlyInViewport:true,
    //     // включить/выключить
    //     // управление клавишами
    //     // pageUp/pageDown
    //     pageUpDown:true,
    // },

    // укправление колесом мыши
    // mousewheel:{
    //     // чувствительность колеса мыши
    //     sensitivity:1,
    //     // класс обьекта на котором
    //     // будет срабатывать прокрутка мышью
    //     eventsTarget: ".image-slider"
    // },

    // автовісота
    autoHeight:false,

    // колличество слайдов для показа
    slidesPerView:3,

    // отключение слайдера 
    // если слайдов меньше чем нужно
    watchOverflow:true,

    // Отступ между слайдами
    spaceBetween:30,

    // колличество пролистываемых слайдов
    slidesPerGroup:1,

    // активный слайд по центру
    centeredSlides:false,

    // cтартовый слайд
    initialSlide:0,

    // мультирядность
   grid:{
       rows:1
   },

    //бессконечный слайдер
    loop:false,
    // для автоматического кол-ва слайдеров выираем кол-во дублирующих
    // loopedSlides:3,

    // Свободный режим
    freeMode:false,

    // Автопрокрутка
    // autoplay:{
    //     // пауза между прокруткой
    //     delay:1000,
    //     // закончить на последнем слайде
    //     stopOnLastSlide:false,
    //     // отключитьпосле ручного переключения
    //     disableOnInteraction:false,
    // },

    // скорость прокрутки
    speed:1000,

    // вертикальній слайдер
    // direction:'vertical',

    // эффуекты переключения
    // листание
     effect:'slide',

    // эффуекты переключения
    // смена прозрачности
    // effect:'fade',

    // дополнения к fade
    // fadeEffect:{
        // параллельная
        // смена прозрачности
        // crossFade: true,
    // },

    // эффуекты переключения
    // переворот
    // effect:'flip',

    // дополнения к flip
    // flipEffect: {

    //     тень
    //     slideShadows:true,
    //     // показ только активного слайда
    //     limitRotation:true,
    // },

    // эффуекты переключения
    // куб
    // effect:'cube',

    // дополнения к cube
    // cubeEffect:{
    //     настройки тени
    //     slideShadows:true,
    //     shadow:true,
    //     shadowOffset:20,
    //     shadowScale:0.94,
    // },

    // эффуекты переключения
    // эффект потока
    //     effect:'coverflow',

    // дополнения к coverflow
    // coverflowEffect:{
    //     // угол
    //     rotate:20,
    //     // наложение
    //     stretch:50,
    //     // тень
    //     slideShadows:true,
    // },

    // Брейк поинты (Адаптив)
    // Ширина экрана
    // breakpoints:{
    //     // '@0.75' - соотношение сторон - высота деленная на ширину
    //     320:{
    //         slidesPerView:1,
    //     },
    //     // '@1.00'
    //     480:{
    //         slidesPerView:2,
    //     },
    //      // '@1.50'
    //     992:{
    //         slidesPerView:3,
    //     }
    // },

    // zoom картинки
    // zoom: {
    //     // максимальное увеличение
    //     maxRatio:5,
    //     // минимальное увеличение
    //     minRatio:5,
    // },

// Миниатюры, превью
// thumbs:{
//     // свайпер с миниатюрами и его настройки
//     swiper:{
//         el:'.image-mini-slider',
//         slidesPerView:5,
        

//     }

//     },

});

let myTextSlider = new Swiper('.text-slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    slidesPerView:1,
    spaceBetween:30,
    speed:1000,
});

// передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;

