jQuery('document').ready(function($){

	// Sermon Player
	if( $('.dial').length) {
		$(".dial").knob({
		  'format' : function (value) {
		     return value + '%';
		  }
		});
	}

})