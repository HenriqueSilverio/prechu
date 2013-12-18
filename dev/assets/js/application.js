;$( function() {
	$( '.banner' ).cycle( {
		slides: '.slide',
		fx: 'scrollHorz',
		speed: 800,
		timeout: 4000,
		prev: '#prev',
		next: '#next'
	} );
} );