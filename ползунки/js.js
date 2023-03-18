const ppColor = document.querySelector('.pp');
// const range = document.querySelector('.range');
// const conclusion = document.querySelector('.conclusion');
console.log(ppColor);
// const newClass = (event) => {
function newClass() {
    ppColor.classList.remove('pp');
    ppColor.classList.add('color');
}
// ppColor.addEventListener('click', (event) => {
//     ppColor.classList.add('color');

// })
ppColor.addEventListener('click', newClass)

function fun1() {
    var range = document.getElementById('range');
    //rng - это Input
    var conclusion = document.getElementById('conclusion');
    // var range = document.querySelector('.range');


    // var conclusion = document.querySelector('.conclusion');

    // p - абзац
    // conclusion.innerHTML = range.value;
    conclusion.value = range.value;
};
function fun2() {
    range.value = conclusion.value;
}

