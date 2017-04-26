
$( document ).ready( function() {
	
	// Toggle navbar__nav	
	$('.navbar__icons--menu').on('click', function() {
		$('.navbar').toggleClass('height-fixed');
		$('.navbar__nav').toggleClass('height-auto');
	});
});