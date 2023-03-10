for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

function fun1() {
  var styledSlider = document.getElementById('styled-slider');
  //rng - это Input
  var conclusion = document.getElementById('number-conclusion');
  // var range = document.querySelector('.range');
  const radio1 = document.getElementById('01');
  const radio2 = document.getElementById('02');
  const radio3 = document.getElementById('03');
  const radio4 = document.getElementById('04');
  const radio5 = document.getElementById('05');
  const allradio = document.querySelector('radio-container');
  const stylevalue = styledSlider.value
  if (styledSlider.value != 2500) {
    conclusion.value = 5000 - styledSlider.value
  } else {
    conclusion.value = styledSlider.value
  }
  // switch (styledSlider.value) {
  //   case < 1000:
  //     // radio2.classList.remove('radio-checked');
  //     radio1.classList.add('radio-checked');
  //     break;
  //   case < 2000:
  //     radio1.classList.remove('radio-checked');
  //     radio2.classList.add('radio-checked');
  //     break;
  //   case 2000:
  //     radio2.classList.remove('radio-checked');
  //     radio3.classList.add('radio-checked');
  //     break;
  // }
  if (styledSlider.value < 1000) {
    allradio.classList.remove('radio-checked');
    radio1.classList.add('radio-checked');

  };
  if (styledSlider.value > 1000 && styledSlider.value < 2000) {
    allradio.classList.remove('radio-checked');
    radio2.classList.add('radio-checked');
  };
  if (styledSlider.value > 2000 && styledSlider.value < 3000) {
    allradio.classList.remove('radio-checked');
    radio3.classList.add('radio-checked');


  }
};


// var conclusion = document.querySelector('.conclusion');

// p - абзац
// conclusion.innerHTML = range.value;
// conclusion.value = styledSlider.value;
// if (styledSlider.value == 0) {
//   radio1.classList.add('radio-checked');
// }


// }

function fun2() {
  styledSlider.value = conclusion.value;
}
