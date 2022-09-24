$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:1000,
		easting:'ease',
		infinite:true,
		initialSlide:2,
		autoplay:false,
		autoplaySpeed:1500,
		pauseOnFocuse:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:false,
		swipe:true,
		touchThreshold:10,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false,
		rows:1,
		slidesPerRov:1,
		vertical:false,
		verticalSwiping:false,
		asNavFor:".sliderbig",
		responsive:[
		{
			breakpoint:768,
			settings:{
				slidesToShow:2,
			}
		},
			{
			breakpoint:480,
			settings:{
				slidesToShow:1,
			}
		}],	
	});



	})
		$('.sliderbig').slick({
			arrows:false,
			fade:true,
			asNavFor:".slider"

	})

