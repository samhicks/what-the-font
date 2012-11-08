
$(function() {
	
	$('.color-picker').on('click', 'button', function() { 
		
		if(colour = $(this).data('colour')) {
			// Remove all colour-* classes
    		$('html').removeClass( 
    			function (index, css) {
    		    	return (css.match(/\bcolor-\S+/g) || []).join(' ');
    			}
    		).addClass('color-' + colour); // Then add the new one
		}
		
	});
	
});
            