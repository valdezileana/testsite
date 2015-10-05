$(document).ready(function(){

//Turn Nav Bar icons black when hovered over, temp solution (there may be a simpler way)
$("#home").hover(function(){
	$("#home").attr("src", "img/Nav/home-hover.png");
});

$("#home").mouseleave(function(){
	$("#home").attr("src", "img/Nav/home.png");
});

$("#work").hover(function(){
	$("#work").attr("src", "img/Nav/work-hover.png");
});

$("#work").mouseleave(function(){
	$("#work").attr("src", "img/Nav/work.png");
});

$("#about").hover(function(){
	$("#about").attr("src", "img/Nav/about-hover.png");
});

$("#about").mouseleave(function(){
	$("#about").attr("src", "img/Nav/about.png");
});

$("#contact").hover(function(){
	$("#contact").attr("src", "img/Nav/contact-hover.png");
});

$("#contact").mouseleave(function(){
	$("#contact").attr("src", "img/Nav/contact.png");
});

$("#resume").hover(function(){
	$("#resume").attr("src", "img/Nav/resume-hover.png");
});

$("#resume").mouseleave(function(){
	$("#resume").attr("src", "img/Nav/resume.png");
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

