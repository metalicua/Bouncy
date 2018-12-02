'use strict';
$(document).ready(function(){
    $('.js_bottom__link').click(function(){
        event.preventDefault();
        $('html, body')
            .animate({scrollTop:$('.portfolio')
            .position().top}, 3000);
 });

 $('.js_team-contact__link').click(function(){
    event.preventDefault();
    $('html, body')
        .animate({scrollTop:$('.contact')
        .position().top}, 3000);
});

    $('.js_navigation__list a').on('click', function() {
        
        $('.navigation__link')
            .removeClass('navigation__link--avtive')

        $(this)
            .addClass('navigation__link--avtive')
            .siblings()
            .removeClass('navigation__link--avtive');
        
    });

    $('.js_navigation__list a').on('click', function(){
        event.preventDefault();
        var buttonValue = $(this).attr('data-btn');
        $('html, body')
            .animate({scrollTop:$(buttonValue)
            .position().top}, 1000);

    });
});