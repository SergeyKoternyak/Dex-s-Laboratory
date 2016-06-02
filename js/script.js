$(function() {
	function checkAnimate(){
		if ($(window).scrollTop() > 0){
			$('.likes-block').addClass('likes-block-animate');
			setTimeout (function(){
				$('.iphone-display').addClass('dexter-animate');
			}, 1000);
			setTimeout (function(){
				$('.dexter-idea').addClass('dexter-idea-animate');
			}, 2400);
		};

		if ($(window).scrollTop() > 350){
			$('.accidents').addClass('accidents-animate');
			$('.rocket .icon').addClass('rocket-animate');
			setTimeout (function(){
				$('.rocket .icon').addClass('visible-rocket');
				$('.rocket .icon').addClass('spurt-animate');
			}, 1500);
		};

		 if ($(window).scrollTop() > 750){
			$('.ginger').addClass('ginger-animate');
		};
		 if ($(window).scrollTop() > 1150){
			$('.fighting').addClass('fighting-animate');
		};
		 if ($(window).scrollTop() > 1550){
			$('.characters').addClass('characters-animate');
		};
	};

	$(window).scroll(checkAnimate);
});