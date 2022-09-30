let myImageSlider = new Swiper('.image-slider',{
  

    slidesPerView:3,
    slidesPerGroup:1,
    centeredSlides:true,
    initialSlide:1,
    autoHeight:true,
    autoWidth:true,
    spaceBetween:10,


});

let myTextSlider = new Swiper('.text-slider',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    slidesPerView:1,
    slidesPerGroup:1,
    centeredSlides:true,
    initialSlide:1,
    autoHeight:true,
    autoWidth:true,
    spaceBetween:10,

});

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;
