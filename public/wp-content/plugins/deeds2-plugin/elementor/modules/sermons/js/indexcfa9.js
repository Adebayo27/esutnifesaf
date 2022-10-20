jQuery('document').ready(function($){

	// Sermon Player

	if( $('.jp-jplayer').length) {
		$('.jp-jplayer').each(function(ind, ele){
			var config = $(this).data('config');
			var ready_config = {title: 'Bubble'};
			ready_config[config.supplied] = config.audio
			$(this).jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", ready_config);
				},
				cssSelectorAncestor : config.ancestor,
				supplied: config.supplied,
				wmode: "window",
				useStateClassSkin: true,
				autoBlur: false,
				smoothPlayBar: true,
				keyEnabled: true,
				remainingDuration: true,
				toggleDuration: true
			});
		})
	}

	// Sermon Slider
	if( $('.owl-carousel').length) {
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    nav:true,
		   	items: 1,
		   	dots: false
		});
	}


	datepicker = {
		date1: '',
		date2: ''
	}

	/**
	 * @param  {[type]}
	 * @param  {[type]}
	 * @return {[type]}
	 */
	function datepickerBind(event,obj) {
		var settings = $(this).parents('.sermon-search-bar').data('settings')
		datepicker.date1 = obj.date1
		datepicker.date2 = obj.date2

		let keyword = $('.sermon-search-input').val()

		if( obj.date1 && obj.date2 ) {
			var wrapper = $(this).parents('.elementor-element');
			wrapper.addClass('ajax-loading date-selected');
			$.ajax({
				url:  webinane_elementor_util.ajaxurl,
				data: {action: 'webinane_elementor_sermons', nonce: webinane_elementor_util.nonce, style: 4, date1: obj.date1, date2: obj.date2, settings: settings, keyword:keyword},
				type: 'post',
				success: (res) => {
					// datePickerInit()

					if( res.data ) {
						let content = $(res.data).find('.sermon-style4-content')
						wrapper.find('.sermon-style4-content').replaceWith(content)
					}
					wrapper.removeClass('ajax-loading')
				}
			})
		}
		/* This event will be triggered when second date is selected */

		// obj will be something like this:
		// {
		// 		date1: (Date object of the earlier date),
		// 		date2: (Date object of the later date),
		//	 	value: "2013-06-05 to 2013-06-07"
		// }
	}
	
	function datePickerInit() {
		// DatePicker
		if( $('.datepicker').length) {
			$('.datepicker').dateRangePicker()
			.bind('datepicker-change', datepickerBind)
			.bind('datepicker-apply',function(event,obj)
			{
				/* This event will be triggered when user clicks on the apply button */
				
			})
		}
	}
	datePickerInit()

	function searchbox(){

		//setup before functions
		var typingTimer;                //timer identifier
		var doneTypingInterval = 1000;  //time in ms, 5 second for example
		var $input = '.sermon-search-input';

		//on keyup, start the countdown
		$('body').on('keyup', $input, function () {
		  clearTimeout(typingTimer);
		  typingTimer = setTimeout(() => {
		  	doneTyping(this)
		  }, doneTypingInterval);
		});

		//on keydown, clear the countdown 
		$('body').on('keydown',$input, function () {
		  clearTimeout(typingTimer);
		});

		//user is "finished typing," do something
		function doneTyping (obj) {
		  //do something
		  	let value = $(obj).val();

		  	var settings = $(obj).parents('.sermon-search-bar').data('settings')
			
			var wrapper = $(obj).parents('.elementor-element');
			wrapper.addClass('ajax-loading');
			$.ajax({
				url: webinane_elementor_util.ajaxurl,
				data: {
					action: 'webinane_elementor_sermons', 
					nonce: webinane_elementor_util.nonce,
					style: 4, 
					date1: datepicker.date1, date2: datepicker.date2, settings: settings, keyword: value},
				type: 'post',
				success: (res) => {
					// datePickerInit()
					if( res.data ) {
						let content = $(res.data).find('.sermon-style4-content')
						let current_dom = wrapper.find('.sermon-style4-content')

						current_dom.replaceWith(content)
					}
					wrapper.removeClass('ajax-loading')
				}
			})
		
		}
	}
	searchbox();

})