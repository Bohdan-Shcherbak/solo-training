var mainSlider = document.getElementById('main-slider');
// var valuesForSlider = [25, 50, 100, 250, 500, 1000, 2000, 5000];
var newStyles = document.querySelector('.noUi-rtl .noUi-value-horizontal');
// var newStyles = document.querySelector('.noUi-value .noUi-value-horizontal .noUi-value-large');

var uuu = document.querySelector('.noUi-pips .noUi-pips-horizontal');
var lll = document.querySelector('.noUi-rtl');
var ltl = document.querySelector('.container-main-slider');
var body = document.querySelector('.body');
// function rrrrrrrrrrr() {
//     lll.addEventListener('click', (event) => {
//         lll.classList.add('newcolor');
//     });
// };
// rrrrrrrrrrr()

// var format = {
//     to: function (value) {
//         return valuesForSlider[Math.round(value)];
//     },
//     from: function (value) {
//         return valuesForSlider.indexOf(Number(value));
//     }
// };
// function dollar(value) {
//     return value + "%"
// }


var range = {
    'min': [25],
    '14,3%': [50],
    '28,6%': [100],
    '42,9%': [250],
    '57,2%': [500],
    '71.5%': [1000],
    '85,8%': [2000],
    'max': [5000]
};
// let newnumber;


function funcRange() {
    for (let i in range) {
        // console.log(range[i]);
        // range[i].push(newnumber);
        let number = newnumber.push(range[i])
        // console.log(Number(newnumber));

        // return Number(newnumber)
    }
    // console.log(newnumber);
    // return newnumber
}
// funcRange()
// console.log(newnumber);
// console.log(range);
// funcRange();

// var format = {
//     to: function (value) {
//         return valuesForSlider[Math.round(value)];
//     },
//     from: function (value) {
//         for (const i in range) {
//             if (i.hasOwnProperty(value)) {
//                 console.log('yes');
//             }
//             else {
//                 console.log('no');

//             }
//         }
//         // if (value == range) {
//         //     newStyles.classList.add('newcolor');
//         // }
//         // return valuesForSlider.indexOf(Number(value));
//     }
// };
// function dollar() {
//     for (const i in range) {
//         if (i.hasOwnProperty([100]) == true) {
//             console.log('yes');

//         }
//         else {
//             console.log('no');

//         }
//         // console.log(i);
//     }
// }; dollar()
// console.log(range.hasOwnProperty([25]));
if (mainSlider) {
    noUiSlider.create(mainSlider, {
        // A linear range from 0 to 15 (16 values)
        // range: { min: 0, max: 5000 },
        range: range,
        start: [8],
        pips: {
            mode: 'range',
            density: 3
        },
        // steps of 1
        step: 1,
        tooltips: false,
        // connect: true,
        connect: 'lower',

        direction: 'rtl',
        behaviour: 'drag',
        // handleAttributes: [
        //     { 'aria-label': 'lower' },
        // ],


        // llslsslss: this.value,
        // format: format,
        // pips: { mode: 'steps', format: format },
        // format: format,
    });
    mainSlider.noUiSlider.on('update', function (values) {
        // console.log(values);
        // console.log(newnumber);
        // for (let i = 0; i < newnumber.length; i++) {
        // const element = ;
        // console.log(array[i]);
        // if (values == array[i]) {
        // if (values > 100) {
        //     body.classList.add('newcolor');
        // }
        // (newf => {
        // for (let i in range) {
        // let
        // return range[i]
        // }
        // })) {

        // } else if (newnumber.includes(values) === false) {
        //     body.classList.add('newcolor');

        // }
        // if (newnumber.includes(values)) {
        //     body.classList.add('newcolor');
        // }

        if (values == 25) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values == 50) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values < 100) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values == 250) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values == 500) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values == 1000) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }
        if (values == 2000) {
            body.classList.add('newcolor');
        } else {
            body.classList.remove('newcolor');
        }

    });
};

// function dollars() {
//     if (range["min"]) {
//         newStyles.classList.add('newcolor');
//     }
// }
// dollars()

// The display values can be used to control the slider

// mainSlider.noUiSlider.set(['7', '28']);
// function llslssls() {
// console.log(noUiSlider.llslsslss);
// if (mainSlider.value == 25) {
//     console.log('yes');
// } else { console.log('no'); }
// }
// llslssls()

// function functionnn() {
//     if (mainSlider.value > 25) {
//         console.log('yes');
//     } else { 'no' }
// }

// function jjjjjjjjj() {
//     for (const i in range) {
        // console.log(range[i]);
    // }
// } jjjjjjjjj()