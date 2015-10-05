$(document).ready(function(){

//Turn nav Bar icons black when hovered over, temp solution (there may be a simpler way)
$("#home").hover(function(){
	$("#home").attr("src", "img/nav/home-hover.png");
});

$("#home").mouseleave(function(){
	$("#home").attr("src", "img/nav/home.png");
});

$("#work").hover(function(){
	$("#work").attr("src", "img/nav/work-hover.png");
});

$("#work").mouseleave(function(){
	$("#work").attr("src", "img/nav/work.png");
});

$("#about").hover(function(){
	$("#about").attr("src", "img/nav/about-hover.png");
});

$("#about").mouseleave(function(){
	$("#about").attr("src", "img/nav/about.png");
});

$("#contact").hover(function(){
	$("#contact").attr("src", "img/nav/contact-hover.png");
});

$("#contact").mouseleave(function(){
	$("#contact").attr("src", "img/nav/contact.png");
});

$("#resume").hover(function(){
	$("#resume").attr("src", "img/nav/resume-hover.png");
});

$("#resume").mouseleave(function(){
	$("#resume").attr("src", "img/nav/resume.png");
});


// Fancybox Functions
$("#single_1").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

$("#single_2").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

$("#single_3").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

$("#single_4").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

$("#being-first").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });

$("#ebola").fancybox()
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
    });


});

