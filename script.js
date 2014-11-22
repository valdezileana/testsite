$(document).ready(function(){

// Fancybox Function
$(".fancybox").fancybox();

//Turn Nav Bar icons black when hovered over, temp solution (there may be a simpler way)
	$("#home").hover(function(){
		$("#home").attr("src", "Images/Nav/home-hover.png");
	});

	$("#home").mouseleave(function(){
		$("#home").attr("src", "Images/Nav/home.png");
	});

	$("#work").hover(function(){
		$("#work").attr("src", "Images/Nav/work-hover.png");
	});

	$("#work").mouseleave(function(){
		$("#work").attr("src", "Images/Nav/work.png");
	});

	$("#about").hover(function(){
		$("#about").attr("src", "Images/Nav/about-hover.png");
	});

	$("#about").mouseleave(function(){
		$("#about").attr("src", "Images/Nav/about.png");
	});

	$("#contact").hover(function(){
		$("#contact").attr("src", "Images/Nav/contact-hover.png");
	});

	$("#contact").mouseleave(function(){
		$("#contact").attr("src", "Images/Nav/contact.png");
	});

	$("#resume").hover(function(){
		$("#resume").attr("src", "Images/Nav/resume-hover.png");
	});

	$("#resume").mouseleave(function(){
		$("#resume").attr("src", "Images/Nav/resume.png");
	});


//Turn social fontawesome icons gray when hovered over

	// $(".fontawesome-").hover(function(){
	// 	$(".fontawesome-:before").css("display", "none");
	// 	$(this).css({"color","#939598"});
	// });

	// $("#social").mouseleave(function(){
	// 	$(this).css("color","black");
	// });

});

