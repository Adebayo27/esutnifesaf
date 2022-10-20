jQuery(document).ready(function ($) {
    'use strict';
        
    //===== Sticky Header =====//
    var menu_height = jQuery('header').height();
    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= menu_height) {
            jQuery('.sticky-header').addClass('sticky-active');
        } else {
            jQuery('.sticky-header').removeClass('sticky-active');
        }
    });

    //===== Isotope =====//
    var $grid = $('.masonry .gallery').isotope({
        itemSelector: '.masonry .gallery > figure',
    });
    if( $grid ) {
       // layout Isotope after each image loads
       $grid.imagesLoaded().progress( function() {
           $grid.isotope('layout');
       });
    }

   //===== Owl Carousel =====//
    if ($.isFunction($.fn.owlCarousel)) {

        //=== Testimonials Carousel ===//
        $('.testimonials-car').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            items: 1,
            dots: false,
            slideSpeed: 5000,
            autoplayHoverPause: true,
            nav: true,
            margin: 0,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });
    }
    
    //===== Perfect Scrollbar =====*/
    if ($('.responsive-menu-ele').length > 0) {
        var ps = new PerfectScrollbar('.responsive-menu-ele');
    }
    
    //===== Responsive Nav Dropdowns =====//
    $('.btn-area').on('click', function () {
    	$('.responsive-menu').addClass('slidein');
    	return false;
    });
    $('.close-menu > i').on('click', function () {
    	$('.responsive-menu').removeClass('slidein');
    	return false;
    });
    $('.responsive-menu ul li.menu-item-has-children > a').on('click', function () {
    	$(this).parent().siblings().children('ul').slideUp();
    	$(this).parent().siblings().removeClass('active');
    	$(this).parent().children('ul').slideToggle();
    	$(this).parent().toggleClass('active');
    	return false;
    });	

}); 


jQuery(window).on('load',function() {
    "use strict";
    jQuery(".pageloader").fadeOut("slow");
}); /*=== Window.on Load Ends Here ===*/


