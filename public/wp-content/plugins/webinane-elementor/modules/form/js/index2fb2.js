jQuery(document).ready(function($){

	$('.elementor-widget-form').on('submit', 'form', function(e){
		e.preventDefault();
		var form = new FormData($(this)[0]);
		var $this = $(this);
		// var fields = $(this).serialize();
		// var file = $(this).find('input[type="file"]');
		var error = $(this).data('error')
		//fields += '&action=webinane_elementor_form_handler';
		//console.log(file);
		// form.append('file', file[0].files[0])
		form.append('action', 'webinane_elementor_form_handler');
		$(this).parent().find( '.form-loader' ).show();
		$.ajax({
			url: webinane_elementor_util.ajaxurl,
			type: 'post',
			data: form,
			async: false,
			cache: false,
			contentType: false,
			enctype: 'multipart/form-data',
			processData: false,
			beforeSend: () => {
				$(this).find( '.elementor-field' ).attr( 'disabled', 'disabled' );
				$(this).parent().find( '.form-loader' ).show();
			},
			success: (res) => {
				if ( res.success ) {
					$(this).before( '<p class="alert alert-success">' + res.data.message + '</p>' );
				} else {
					$(this).before( '<p class="alert alert-danger">' + res.data.message + '</p>' );
				}
			},
			fail: (res) => {
				if ( res.success === false ) {
					$(this).before( '<p class="alert alert-danger">' + res.data.message + '</p>' );
				}
			},
			complete: (res) => {

				if( res.status === 500 ) {
					$(this).before( '<p class="alert alert-danger">' + error + '</p>' );
				}

				$(this).find( '.elementor-field' ).removeAttr( 'disabled' );
				$(this).parent().find( '.form-loader' ).fadeOut();

				setTimeout(() => { 
					// $(this).parent().find('.alert').remove(); 
				}, 3000);
			}
		})
	})
})