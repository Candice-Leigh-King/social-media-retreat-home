
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu

				$(window).scroll( function(){
					$('.fadein').each( function(i){
								var bottom_of_element = $(this).offset().top + $(this).outerHeight();
								var bottom_of_window = $(window).scrollTop() + $(window).height();
								if( bottom_of_window > bottom_of_element ){
									$(this).animate({'opacity':'1'},1000);
									}
								});
							});
						});

$(document).ready(function(){
	$('.fade-home1').slick({
	 autoplay: true,
	 infinite: true,
	 autoplaySpeed: 1900,
	 speed: 1000,
	 fade: true,
	 cssEase: 'linear',
	 prevArrow: false,
	 nextArrow: false,
	});
});

$(document).ready(function(){
	$('.fade-home2').slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3100,
		speed: 1000,
		fade: true,
		cssEase: 'linear',
		prevArrow: false,
		nextArrow: false,
		});
});
