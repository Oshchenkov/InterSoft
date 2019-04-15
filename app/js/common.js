
	
$(document).ready(function(){

	// Hero scroll down to section-deliveryChoice

	$("#heroScrollDown").click(function() {
		$('html, body').animate({
			scrollTop: $("#section-deliveryChoice").offset().top
		}, 2000);
	});

	// deliveryChallenge-mob-slider functionality
	
	var deliveryChallenge_mob_slider = $("#deliveryChallenge-mob-slider");
	deliveryChallenge_mob_slider.owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		dotsClass: "navDots",
		dotClass: "navDots__dot",
	})

	$('.owlNav-dot').on('click', 'li', function(e) {
		deliveryChallenge_mob_slider.trigger('to.owl.carousel', [$(this).index(), 300]);
		$('.owlNav-dot li').removeClass( 'active' );
		$(this).addClass( 'active' );
	});
	
	deliveryChallenge_mob_slider.on('changed.owl.carousel', function(event) {
		let sliderIndex      = event.item.index -2;

		$('.owlNav-dot__li').each(function(index){
			if(index == sliderIndex){
				$(this).addClass("active");
			}else if((sliderIndex == 4)&&(index == 0)){
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
			}
		});
	})

	// 

});

