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
		//This function makes the greyed out logos fade when hovered over
		$('.connect-btn').hover(
			function(){ 
				$(this).css({
					'-webkit-filter': 'grayscale(0%)',
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

		//Switch between thor and spidey picture
		$('#unix').click(function() {
			var _this = $(this);
			var current = _this.attr('src');
			var swap = _this.attr('swap');
			_this.attr('src',swap).attr('swap',current);
		});

});
