var slider = document.getElementById('slider');
// function numbers() {
//     if (slider.value < 4) {
//         // step: 1;
//         return 1;

//     }
//     if (slider.value >= 4) {
//         step: 2;
//         // return 2;
//     }
// }
// const valueval = slider.noUiSlider.on('update', function (values, handle) {
//     console.log(values);
//     if (values < 20) {
//         return 1;
//     } else {
//         return 2;
//     }
// })
// function rfr() {
//     slider.noUiSlider.on('update', function (values, handle) {
//         console.log(values);
//         if (values < 20) {
//             return 1;
//         } else {
//             return 2;
//         }
//     })
// }
// var format = {
//     to: function (value) {
//         return slider[Math.round(value)];
//     },
//     from: function (value) {
//         if (value > 20) {
//             return step + 1;
//             // return slider.indexOf(Number(value));

//         }
//         // else {
//         //     return step + 1;
//         // }
//     }

// }
// const number = () => {
//     if (slider.noUiSlider.on('update', function (values => {return values} > 20) {
//         console.log('yes');
//     }
// };
// const fff = slider.noUiSlider.toFixed(1);
// const rrrr = number.Math.round(slider.noUiSlider);
// function rrrr(fff) {
// const gg = fff.toFixed(1)
// const hh = Math.round(gg)
// console.log(gg);

//     if (fff) {
//         return 1
//     }
// }
var format = {
    to: function (value) {
        return valuesForSlider[Math.round(value)];
    },
    from: function (value) {
        if (value < 20) {
            return step = 1;

        }
        if (value > 20) {
            return step = 2;
        }
    }
};
const uuuu = format.to
const newf = (uuuu) => {
    if (value < 20) {
        return step = 1;

    }
    if (value > 20) {
        return step = 2;
    }
}

noUiSlider.create(slider, {
    start: [20],
    connect: false,
    range: {
        'min': 0,
        'max': 100
    },
    direction: 'rtl',

    // step: numbers(),

    // step: rrrr(),
    format: format,

    step: 1,

    tooltips: true,
});
// console.log(slider.noUiSlider.value);
