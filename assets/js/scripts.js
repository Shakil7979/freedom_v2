$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	$('.expert_owl_carousel').owlCarousel({
		items:3,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		responsive : { 
			0 : { 
				items:1,
			}, 
			480 : {  
				items:2,
			}, 
			768 : { 
				items:2,
			},
			991 : { 
				items:3,
			}
		}
	});





});