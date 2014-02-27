'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    console.log('Page loaded');

	$('.likeBtn').click(function(){
		console.log('Button clicked');
		ga("send", "event", "like", "click");
	});
	
}

