'use strict';
$(document).ready(function() {
    var portfolioFilter = $('.js_portfolio__filter');
    //dinamic grid
    $('.js_portfolio__grid').isotope({
        itemSelector: '.grid__item',
        layoutMode: 'masonry'
      });
    //   filter isotop
      $(portfolioFilter).on('click', 'button', function() {
           
        var filterValue = $(this).data('filter');
        
        $('.portfilio__btn')
          .removeClass('portfilio__btn--active');

        $(this)
          .addClass('portfilio__btn--active')
          .siblings()
          .removeClass('portfilio__btn--active');
          
        $('.js_portfolio__grid').isotope({ filter: filterValue });

      });

      

});

