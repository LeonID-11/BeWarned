$(document).ready(function() {
	//
	var width1 = $(".user").outerWidth(true),
	width = $(".wrap").outerWidth(true);
	$(".search").outerWidth(width-width1);
	


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


});
