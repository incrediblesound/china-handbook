$(document).ready(function() {
	$('.two').hide();
	$('.pic').hide();
	$('.open').on('click', function() {
		$('.two').toggle();
		$('.open').hide();
	})
	$('.image').on('click', function() {
		var classes = $(this).attr("class");
		var keyArray = classes.split(' ');
		var key = keyArray[keyArray.length-1];
		$(this).hide();
		$('#'+key).toggle();
	})
	$('.pic').on('click', function() {
		var key = $(this).attr("id");
		$(this).toggle();
		$('.'+key).toggle();
	})
});