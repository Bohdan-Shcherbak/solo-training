const prev = document.getElementById('btn-prev'),
	  next = document.getElementById('btn-next'),
	  slides = document.querySelectorAll('.slide'),
	  dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
	console.log(n);
	for(slide of slides){
		slide.classList.remove('active');
	}
	for(dot of dots){
		dot.classList.remove('active');
	}
	slides[n].classList.add('active');
	dots[n].classList.add('active');
}
const nextSlide = () => {
	if(index == slides.length - 1){
		index = 0;
		activeSlide(index);
	}
	else{
		index++;
		activeSlide(index);

	}
}

const prevSlide = () => {
	if(index == 0){
		index = slides.length - 1;
	} 
	else{
		index--;
	}
	activeSlide(index);
}

const dotsActive = () =>{
	if(index == 0){
		// function prevSlide(index);
		
	} else if(index == 2){
		index--;
				activeSlide(index);

	}
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide)
dots.addEventListener('click', dotsActive)