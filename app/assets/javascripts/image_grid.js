$(document).ready(function(){

	$('#image-grid').find('span').addClass('darken');
	$('#image-grid').find('span').hover(function(){
		$(this).removeClass('darken');
	}, function(){
		$(this).addClass('darken');
	});
	$('.image-two').hover(function(){

	});
});