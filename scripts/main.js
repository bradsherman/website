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

		// Function to make screen take navbar into account when scrolling to differenct sections
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

		//Switch between thor and spidey picture
		$('#unix').click(function() {
			var _this = $(this);
			var current = _this.attr('src');
			var swap = _this.attr('swap');
			_this.attr('src',swap).attr('swap',current);
		});

		// Make navbar disappear while scrolling
		
		var lastScroll = 0;

		$(window).scroll(function() {
			var currentScroll = $(this).scrollTop();
			if ( currentScroll < lastScroll - 5) {
				$('.navbar').fadeIn('fast');
			} else if ( currentScroll > lastScroll + 5) {
				$('.navbar').fadeOut('fast');
			}
			lastScroll = currentScroll;
		});


	$(window).scroll(function() {
  	if($(window).scrollTop() > $(document).height() - 900) {
			$('#mail').fadeIn();
			$('#github').fadeIn();
			$('#linkedin').fadeIn();
			$('#twitter').fadeIn();
			$('#facebook').fadeIn();
			$('#copyright').fadeIn();
			$('.connect-btn').css({
				'display': 'inline-block'
			});
		} else {
			$('#mail').fadeOut();
			$('#github').fadeOut();
			$('#linkedin').fadeOut();
			$('#twitter').fadeOut();
			$('#facebook').fadeOut();
			$('#copyright').fadeOut();
		}
	});
});
