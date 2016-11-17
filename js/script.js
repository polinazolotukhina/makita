
$(document).ready(function(){
$('.drill').css('opacity', 0);
$('.drill').waypoint(function() {
	$('.drill').addClass('animated slow fadeIn');
}, { offset: '70%' });

$('.animation').css('opacity', 0);
$('.animation').waypoint(function() {
	$('.animation').addClass('animated slow bounceIn');
}, { offset: '100%' });

var icons = ['#icon1', '#icon2', '#icon3'];
$.each(icons, function(key, value){
	$(value).css('opacity', 0);
	$(value).waypoint(function() {
		$(value).addClass('animated fadeInDown');
	}, { offset: '70%' });

});

$('#comf').css('opacity', 0);
$('#comf').waypoint(function() {
	$('#comf').addClass('animated slow fadeInDown');
}, { offset: '100%' });

$('#adv').css('opacity', 0);
$('#adv').waypoint(function() {
	$('#adv').addClass('animated slow fadeInUp');
}, { offset: '100%' });

$('.part2').css('opacity', 0);
$('.part2').waypoint(function() {
	$('.part2').addClass('animated slow fadeInRight');
}, { offset: '100%' });


function blinker(selector,time) {
	setInterval(function(){
    	selector.fadeIn(500);
    }, time + 1000);
}



$('.blink').waypoint(function() {
	$('.blink').fadeOut(500);
duration = 100;
$('.blink').each(function(){
	selector = $(this);
	blinker(selector, duration);
	duration = duration + 500
})

}, { offset: '100%' });


$('.onHover').hover(
   function(){ $(this).addClass('animated pulse') },
   function(){ $(this).removeClass('animated pulse') }
)

$('#num').waypoint(function() {
	$('#num').animateNumber({ number: 115 },2000);
}, { offset: '60%' });
});





