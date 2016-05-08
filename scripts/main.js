$(document).ready(function() {
		// listen for click events originating from elements with href starting with #
		$('body').on('click.scroll-adjust', '[href^="#"]', function (e) {
			var $nav

			// make sure navigation hasn't already been prevented
			if ( e && e.isDefaultPrevented() ) return

			// get a reference to the offending navbar
			$nav = $('div.navbar')

			// check if the navbar is fixed
			if ( $nav.css('position') !== "fixed" ) return

			// listen for when the browser performs the scroll
			$(window).one('scroll', function () {
				// scroll the window up by the height of the navbar
				window.scrollBy(0, -$nav.height())
			});

		});

		// Following function from Chris Coyier (https://css-tricks.com/snippets/jquery/smooth-scrolling/) 
		$(function() {
 			$('a[href*="#"]:not([href="#"])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  	    if (target.length) {
    	    $('html, body').animate({
          	scrollTop: target.offset().top
        	}, 1000);
        	return false;
      	}
   			}
 		 });
		});
		// Following function from Cory Jbara (https://github.com/cjbara) 
		//This function makes the greyed out logos fade when hovered over
       $('.connect-button').hover(
       function(){ 
                     $(this).css({
                            '-webkit-filter': 'grayscale(0%)',
                            //'height': '95px'
                     });

                     var id = $(this).attr('id');
                     console.log('#'+id+'.text');

                     $('#'+id+'.text').css({
                            'display': 'block'
                     });

                     //for the copyright
                     $('#copyright').css({
                            'margin-top': '12px'
                     });
              }, function(){ 
                     $(this).css({
                            '-webkit-filter': 'grayscale(100%)',
                            //'height': '75px'
                     });

                     var id = $(this).attr('id');
                     console.log('#'+id+'.text');

                     $('#'+id+'.text').css({
                            'display': 'none'
                     });

                     //for the copyright
                     $('#copyright').css({
                            'margin-top': '100px'
                     });
              }
       );

});
