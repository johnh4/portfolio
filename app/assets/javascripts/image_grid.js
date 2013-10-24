$(document).ready(function(){

	/*
	$('#project-one').mouseenter(function(){
		console.log('in #project-one');
		$('#project-one').addClass('highlight');
	}).mouseleave(function(){
		console.log('out of #project-one');
		$('#project-one').removeClass('highlight');
	});
	*/

	$('#image-grid').find('span').addClass('darken');
	$('#image-grid').find('span').hover(function(){
		//$(this).find('span').removeClass('darken');
		$(this).removeClass('darken');
	}, function(){
		$(this).addClass('darken');
	});
});