$(document).ready(function () {
	
	
	var slides = $('.slider').children('.slide');
	slides.css('display', 'none');
	var current = $("input[type=radio]:checked").val()-1;
	$('.slide').eq(current).css('display', 'flex');

	
	$('.slider-pagg').on('click', function(){
	slides.css('display', 'none');	
	var current = $("input[type=radio]:checked").val()-1;
	$('.slide').eq(current).css('display', 'flex');
	});
	
	$('select option').hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "#fff");

});
		
		 $('select').niceSelect();
	
});