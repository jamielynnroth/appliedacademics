// DOC READY FUNCTIONS 
// Check which page is loaded, indicate correct nav link 
// by triggering hover state
$(document).ready(function(){

	var url = window.location.href;
	$('a[href="'+url+'"]').find('h1').addClass('current');
	$('a[href="'+url+'"]').parent('li').addClass('current');


	//when hovering over just the sprite, trigger the hover state of the whole li 
	$('#mainNav').find('li:not(.current)').hover(
		function() {
		$(this).find('h1').addClass('current'); 
	}, function() {
		$(this).find('h1').removeClass('current');
		}
	); // hover
	}); // doc ready

$(document).ready(function(){
	$('#mainNav').find('#wwa').hover(
		function () {
		$(this).src ='assets/AA-WWA-Logo-Trans-G-45.png';
}, function () {
		$(this).src="assets/AA-WWA-Logo-Trans-B-45.png";
	});

}); // doc ready

// vertically center the #content block on window load
// only if content is less than height: 400px
//  $(document).ready(function(){
//  	// if ($(window).height() > 650 && $('#pagewrap').height() < 600) {

//  		var bodyHeight = ($(window).height()- $('#header').height() - $('#footer').height() - $('.content').height())

//  		if (bodyHeight > 0) {
//  			$('#pagewrap').css({ top: bodyHeight/2});
//  		} else  
//  			$('#pagewrap').css({top : 0})
//  	// }; //else
// }); // docready

// // RESIZE FUNCTIONS 
	
// 	//vertically center content block 
// 	$(window).resize(function() {
// // 		//vertically center content block 
// // 		//if ($(window).height() - $('#footer').height() < 650) {
// 		// if ($(window).height()  > 650 && $('.content').height() < 600) {
		
// 		var bodyHeight = ($(window).height()- $('#header').height() - $('#footer').height() - $('.content').height())

//  		if (bodyHeight > 0) {
//  			$('#pagewrap').css({ top: bodyHeight/2});
//  		} else 
//  			$('#pagewrap').css({top : 0})
//  	}; //else


// 	}); //resize