$(document).ready(function(){

//Turn nav Bar icons black when hovered over, temp solution (there may be a simpler way)
$("#home").hover(function(){
	$("#home").attr("src", "http://ashleywu.me/img/nav/home-hover.png");
});

$("#home").mouseleave(function(){
	$("#home").attr("src", "http://ashleywu.me/img/nav/home.png");
});

$("#work").hover(function(){
	$("#work").attr("src", "http://ashleywu.me/img/nav/work-hover.png");
});

$("#work").mouseleave(function(){
	$("#work").attr("src", "http://ashleywu.me/img/nav/work.png");
});

$("#about").hover(function(){
	$("#about").attr("src", "http://ashleywu.me/img/nav/about-hover.png");
});

$("#about").mouseleave(function(){
	$("#about").attr("src", "http://ashleywu.me/img/nav/about.png");
});

$("#resume").hover(function(){
	$("#resume").attr("src", "http://ashleywu.me/img/nav/resume-hover.png");
});

$("#resume").mouseleave(function(){
	$("#resume").attr("src", "http://ashleywu.me/img/nav/resume.png");
});


// Fancybox Functions

// paintings
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

// class projects
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

