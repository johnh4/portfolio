$(document).ready(function(){
	$('nav.top-bar').find('a').on('click', function(){
		scrollToAnchor($(this));
	});
	$('#image-grid a').on('click', function(){
		scrollToAnchor($(this));
	});
	$('.images-link a').on('click', function(){
		scrollToAnchor($(this));
	});
	function scrollToAnchor(el){
		var href = el.attr('href');
		console.log('href: ' + href);
		var offset = $(href).offset();
		console.log('offset.left: ' + offset.left + ', offset.top: ' + offset.top);
		$('body,html').animate({ scrollTop: offset.top - '45' + 'px'});
	}

	//establish height of image-grid. 
	//if scroll occurs while window is within that height, 
	//scrollTop to the next element.

	var lastScrollTop = $(document).scrollTop();
	function gridScroll() {
		var imageOffset = $('#image-grid').offset();
		var docPos;
		var workOffset;
		var gridHeight;
		var workHeight;
		gridHeight = $('#image-grid').height();
		workOffset = $('#work').offset();
		workHeight = $('#work').height();

		$(window).scroll(function(){
			docPos = $(document).scrollTop();
			console.log('gridHeight', gridHeight);
			console.log('docPos', docPos);
			console.log('workOffset', workOffset.top);

			if(docPos < lastScrollTop) {
				//console.log('Scrolling up!');
				//upTogrid();
			} else {
				//console.log('Scrolling down');
				downToWork();
			}

			lastScrollTop = docPos;

		});
		function upTogrid(){
			if(docPos > workOffset.top-100 && docPos < workOffset.top + workHeight){
				console.log('Within work div!!!!!!!!!!!!!!!!!!!!!!!');
				$('body').animate({ scrollTop: imageOffset.top - '45' })
			}
		}
		function downToWork(){
			docPos = $(document).scrollTop();
			if(docPos < gridHeight * .9 && docPos > gridHeight * .25) {
				//console.log('docPos < gridHeight - 100');
				$('body').animate({ scrollTop: workOffset.top - '45' });
			}
		}
	}

	//gridScroll();

	//calc height of image-grid
	//calc position of document
	//calc height and position of work div
	
	//if scroll down occurs within height of image-grid
	//scroll to work div

	//if scroll up occurs within height of work div
	//scroll to image-grid


});