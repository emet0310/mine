(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

function icon() {
    document.getElementById("icon1").style.zIndex = "100";
}

function remove2() {
    document.getElementById("icon1").style.zIndex = "-1";
}

function remove() {
    document.getElementById("icon1").style.zIndex = "-1";
}









var swiper = new Swiper('.swiper', {
	slidesPerView: 15,
	direction: getDirection(),
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	on: {
	  resize: function () {
		swiper.changeDirection(getDirection());
	  },
	},
  });

  function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

	return direction;
  }