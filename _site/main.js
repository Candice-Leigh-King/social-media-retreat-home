
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
			$(document).ready(function() {
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

		// faqs

		$(".accordion1").click(function(){

			$(this).toggleClass('active');
			$(".panel1").slideToggle();
			})

		$(".accordion2").click(function(){

			$(this).toggleClass('active');
			$(".panel2").slideToggle();
			})

		$(".accordion3").click(function(){

			$(this).toggleClass('active');
			$(".panel3").slideToggle();
			})

		$(".accordion4").click(function(){

			$(this).toggleClass('active');
			$(".panel4").slideToggle();
			})

		$(".accordion5").click(function(){

			$(this).toggleClass('active');
			$(".panel5").slideToggle();
			})

		$(".accordion6").click(function(){

			$(this).toggleClass('active');
			$(".panel6").slideToggle();
			})

		$(".accordion7").click(function(){

			$(this).toggleClass('active');
			$(".panel7").slideToggle();
			})

		$(".accordion8").click(function(){

			$(this).toggleClass('active');
			$(".panel8").slideToggle();
			})


// epic gallery

    $('[data-fancybox="gallery"]').fancybox({
         loop: true,
           buttons: [
              "zoom",
             "slideShow",
             "thumbs",
             "close"
             ],
           animationEffect: "zoom",
        transitionEffect: "zoom-in-out",
         });



 });

// end accordian

$(document).ready(function() {
		$(window).scroll( function(){
			$('.fadeinone').each( function(i){
						var bottom_of_element = $(this).offset().top + $(this).outerHeight();
						var bottom_of_window = $(window).scrollTop() + $(window).height();
						if( bottom_of_window > bottom_of_element ){
							$(this).animate({'opacity':'1'},500);
						}
				});
		});
});

		$(document).ready(function() {
				$(window).scroll( function(){
					$('.fadeintwo').each( function(i){
								var bottom_of_element = $(this).offset().top + $(this).outerHeight();
								var bottom_of_window = $(window).scrollTop() + $(window).height();
								if( bottom_of_window > bottom_of_element ){
									$(this).animate({'opacity':'1'},1000);
								}
						});
				});
		});

				$(document).ready(function() {
						$(window).scroll( function(){
							$('.fadeinthree').each( function(i){
										var bottom_of_element = $(this).offset().top + $(this).outerHeight();
										var bottom_of_window = $(window).scrollTop() + $(window).height();
										if( bottom_of_window > bottom_of_element ){
											$(this).animate({'opacity':'1'},1500);
										}
								});
						});
				});

// slide in from right

 $(document).ready(function() {
		$(window).scroll( function(){
			$('.slideinright').each( function(i){
				var bottom_of_element = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_element ){
						$(this).animate({'margin-left':'0px'},2500);
				}
				});
			});
	});


// on right end

// slide in from left

$(document).ready(function() {
$(window).scroll( function(){
$('.slideinleft').each( function(i){
var bottom_of_element_left = $(this).offset().top;
var bottom_of_window = $(window).scrollTop() + $(window).height();
if( bottom_of_window > bottom_of_element_left ){
$(this).animate({'margin-left':'0px'},2000);
}
});
});
});
