(function($){
	/* Tweets ------*/
	function timeSince(date) {

	    var seconds = Math.floor((new Date() - date) / 1000);

	    var interval = Math.floor(seconds / 31536000);

	    if (interval > 1) {
	        return interval + " years";
	    }
	    interval = Math.floor(seconds / 2592000);
	    if (interval > 1) {
	        return interval + " months ago";
	    }
	    interval = Math.floor(seconds / 86400);
	    if (interval > 1) {
	        return interval + " days ago";
	    }
	    interval = Math.floor(seconds / 3600);
	    if (interval > 1) {
	        return interval + " hours ago";
	    }
	    interval = Math.floor(seconds / 60);
	    if (interval > 1) {
	        return interval + " minutes ago";
	    }
	    return Math.floor(seconds) + " seconds ago";
	}

	var reston = {
	    count: 0,
	    tweets: function (options, selector) {

	        options.action = 'twitter_ajax';
	        options.subaction = 'fetch_twitter_tweets';

	        $.ajax({
	            url: webinane_elementor_util.ajaxurl,
	            type: 'POST',
	            data: options,
	            success: function (res) {

	                var reply = res;
	                var owl_classes = (options.owl !== 'no') ? ' owl-carousel' : '';
	                var html = '<ul class="twitter-widget'+owl_classes+'">';

	                $.each(reply, function (k, element) {
	                    var date = new Date(element.created_at);
	                    html += '<li><i class="fa fa-twitter"></i><div class="twiter-meta">';
	                    html += '<span><a href="' + element.user.url + '">@' + element.user.name + '</a>';
	                    html += '<i>' + timeSince(date) + '</i></span>';
	                    html += '<p>' + element.text + '</p>';
	                    html += '<a href="' + element.user.url + '">' + element.user.url + '</a>';
	                    html += '</li></div>';

	                });

	                html += '</ul>';

	                $(selector).append(html);

	                if (options.owl !== 'no') {
	                    // $(options.owl + ' .twitter-widget').owlCarousel('refresh');
	                }

	                $(selector).trigger('twitter_tweets_rendered');
	            }
	        });

	    },
	};

	$.fn.tweets = function (options) {

	    var settings = {
	        screen_name: 'wordpress',
	        count: 3,
	        data: ''
	    };
	    options = $.extend(settings, options);

	    reston.tweets(options, this);
	};
})(jQuery);

jQuery(document).ready(function($){
	/* Likes -----*/
	$(document).on('click', '.post-liks a', function(e){
		e.preventDefault();

		let loader = $('body').find('.theme-layout > .pageloader');
		let id = $(this).data('id');
		let nonce = $(this).data('nonce');
		loader.fadeIn();

		$.ajax({
			url:  webinane_elementor_util.ajaxurl,
			type: 'post',
			data: {action: 'webinane_elementor_post_likes', id: id, nonce: nonce},
			success: (res) => {
				if( res.success ) {
					$(this).parent().find('span > em').text(res.data.count)
				} else {
					alert(res.message)
				}
			},
			complete: (res) => {
				loader.fadeOut()
			}
		})
	});

});
