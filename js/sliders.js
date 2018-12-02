'use strict';
$(document).ready(function(){
    
    $('.js_team__slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
              
    });

    $('.js_testimonials-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
              
    });
  });