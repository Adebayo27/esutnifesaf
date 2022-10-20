jQuery('document').ready(function($){

	// TeamSlider
	if( $('.team-slider').length) {
		$('.team-slider').each(function(){
			let settings = $(this).data('carousel');
			//console.log(settings);
			var owl = $('.team-slider').owlCarousel(settings);

		})
	}

	$("body").on("mouseover", ".our_experts_image_box .our_experts_share_button", function(){
		$(this).children(".our_experts_social_icon").addClass("active");
		$(this).addClass("ex_close");
	});
	
	$("body").on("mouseleave", ".our_experts_image_box .our_experts_share_button", function(){
		$(this).children(".our_experts_social_icon").removeClass("active");
		$(this).removeClass("ex_close");
	});
	

});