
$(document).ready(function(){
	$(window).ready(function(){

		var doc = $(document).height();
		var win = $(window).height();
		if (doc < win) {
			console.log('it works');
			$('#footer').css('position', 'fixed');
			}
		else {
			$('#footer').css('position', 'relative');
		}
	$(window).resize(function(){
		console.log('this one too!');
		if (doc < win) {
			$('#footer').css('position', 'fixed');
			}
		else {
			$('#footer').css('position', 'relative');
		}
})

})

})

$(document).ready(function(){
	$('#mainNav.li').hover(
		function() {
			console.log('this one works!');
		$('this').addClass('onhover');
	},
		function() {
			$('this').removeClass('onhover');
		}
	);
});

// $(document).ready(function(){
// 	$('#mainNav.li').click(
// 		function() {
// 			console.log('this one works!');
// 		$('this').addClass('onhover');
// 	},
// 		function() {
// 			$('this').removeClass('onhover');
// 		}
// 	);
// });