console.log('hello');

$('.morePara').hide();
$('.hideBtn').hide();



$(document).ready(function(){

	$('.fas').click(function(){
		$('nav').toggleClass('active');
})

// $('#close').click(function(){
// 	$('nav').hide();
// })



//  $('.showBtn').click(function(){
// 	 $('.morePara').show();
// 	 $('hideBtn').show();
// 	 $(this).hide();
//
//
// })
//
// $('.hideBtn').click(function(){
// 	$('.morePara').hide();
// 	$(this).hide();
// 	$('showBtn').show();
// })

$('.showBtn').click(function(){
	$('.morePara').fadeToggle();
})

$('.variables').click(function() {
	$('html,body').animate({
		scrollTop: $('#list1').offset().top }, 3000);
	})

})
