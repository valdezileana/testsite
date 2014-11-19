$(document).ready(function(){

// Fancybox Function
$(".fancybox").fancybox();

//Turn Nav Bar icons black when hovered over, temp solution (there may be a faster way)
	$("#home").hover(function(){
		$("#home").attr("src", "Images/Nav/home-black.png");
	});

	$("#home").mouseleave(function(){
		$("#home").attr("src", "Images/Nav/home-dark.png");
	});

	$("#work").hover(function(){
		$("#work").attr("src", "Images/Nav/work-black.png");
	});

	$("#work").mouseleave(function(){
		$("#work").attr("src", "Images/Nav/work-dark.png");
	});

	$("#about").hover(function(){
		$("#about").attr("src", "Images/Nav/about-black.png");
	});

	$("#about").mouseleave(function(){
		$("#about").attr("src", "Images/Nav/about.png");
	});

	$("#contact").hover(function(){
		$("#contact").attr("src", "Images/Nav/contact-black.png");
	});

	$("#contact").mouseleave(function(){
		$("#contact").attr("src", "Images/Nav/contact-dark.png");
	});

	$("#resume").hover(function(){
		$("#resume").attr("src", "Images/Nav/resume-black.png");
	});

	$("#resume").mouseleave(function(){
		$("#resume").attr("src", "Images/Nav/resume-dark.png");
	});

//How do I make the icon unclickable once you're on the page?


//Turn social fontawesome icons gray when hovered over

	// $(".fontawesome-").hover(function(){
	// 	$(".fontawesome-:before").css("display", "none");
	// 	$(this).css({"color","#939598"});
	// });

	// $("#social").mouseleave(function(){
	// 	$(this).css("color","black");
	// });

});

