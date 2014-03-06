$(document).ready(function() {
	$('.two').hide();
	$('.open').on('click', function() {
		$('.two').toggle();
		$('.open').hide();
	})
});