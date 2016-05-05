$(document).ready(function(){

    $('#work').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#fun-section').css('display','none');
        $('#about-section').css('display','none');
        $('#work-section').css('display','block');

        $('#work').addClass('selected-nav');
        $('#fun').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#fun').on('click',function() {
        $('.nav-item').css('color', '#adadad');
        $('#work-section').css('display','none');
        $('#about-section').css('display','none');
        $('#fun-section').css('display','block');

        $('#fun').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#about').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    $('#about').on('click', function(){
        $('.nav-item').css('color', '#adadad');
        $('#fun-section').css('display','none');
        $('#work-section').css('display','none');
        $('#about-section').css('display','block');

        $('#about').addClass('selected-nav');
        $('#work').removeClass('selected-nav');
        $('#fun').removeClass('selected-nav');
        $('.nav-item', this).css('color', '#000');
    });

    // if ($(window).width() < 995) {
    //     $('.col-xs-4').addClass('col-xs-6').removeClass('col-xs-4');
    // }

    // if ($(window).width() < 750) {
    //     $('.col-xs-6').addClass('col-xs-4').removeClass('col-xs-6');
    // }

    // $(window).resize(function() {
    //     if ($(window).width() < 995) {
    //         $('.col-xs-4').addClass('col-xs-6').removeClass('col-xs-4');
    //     } else if ($(window).width() < 750) {
    //         $('.col-xs-6').addClass('col-xs-4').removeClass('col-xs-6');
    //     } else {
    //         $('.col-xs-4').addClass('col-xs-4').removeClass('col-xs-6');
    //     }
    // });

});

