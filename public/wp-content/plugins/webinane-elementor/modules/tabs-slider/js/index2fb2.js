jQuery(document).ready(function($){

	if ( $('.tabs-slider-wrapper .owl-carousel').length ) {
		$('.tabs-slider-wrapper .owl-carousel').owlCarousel({
			items: 1,
			loop: false,
			thumbs: true,
			dots: false,
			thumbImage: false,
			thumbContainerClass: 'owl-thumbs',
			animateIn: 'fadeIn',
			animateOut: 'fadeOut'
		});
	}

});