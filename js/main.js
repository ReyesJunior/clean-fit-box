
$( document ).ready( function() {
	
	// Toggle navbar__nav	
	$('.c-header__icons--menu').on('click', function() {
		$('.c-header__navbar').toggleClass('height-fixed');
		$('.c-header__nav').toggleClass('height-auto');
	});
});