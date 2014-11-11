$(document).ready(function(){

// Fancybox Function
$(".fancybox").fancybox();

Nav Bar action
$(".menu-icons").hover(function(){
	$(this).animate({height:"60px"}, "fast");
	$(this).css("margin", "0 1.2% 0 1.2%");
});

$(".menu-icons").mouseleave(function(){
    $(this).animate({height:"52px"}, "fast");
    $(this).css("margin", "0 6% 0 6%");
});

});

