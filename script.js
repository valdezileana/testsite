$(document).ready(function(){

    // MUST REFACTOR THIS

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

    // ------- FANCYBOX ------------ //


    // paintings
    $("#taz").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#drinks").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#lips").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#kevin").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#summer-party").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#tea").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#spice").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });

    $("#bbq").fancybox()
        .attr('rel', 'gallery')
        .fancybox({
            padding : 1
        });


    
});

