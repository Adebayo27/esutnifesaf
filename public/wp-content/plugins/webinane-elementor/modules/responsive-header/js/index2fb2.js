jQuery(document).ready(function ($) {
    'use strict';

    //===== Responsive Nav Dropdowns =====//
    $('.resp-btn').on('click', function () {
    	$('.responsive-menu-ele').addClass('slidein');
    	return false;
    });
    $('.close-menu > i').on('click', function () {
    	$('.responsive-menu-ele').removeClass('slidein');
    	return false;
    });
    $('.responsive-menu-ele ul li.menu-item-has-children > a').on('click', function () {
    	$(this).parent().siblings().children('ul').slideUp();
    	$(this).parent().siblings().removeClass('active');
    	$(this).parent().children('ul').slideToggle();
    	$(this).parent().toggleClass('active');
    	return false;
    });

    //===== Responsive Search=====//
    $('.search-btn').on('click', function () {
        $('.res-search-form').toggleClass('active');
        return false;
    });
    
}); 
