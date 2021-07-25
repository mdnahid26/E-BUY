$(function(){
   'use stirct';

   //slick
    $('.banner_slider').slick({
        prevArrow:'<i class="fas fa-chevron-left banner_arrow banner_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right banner_arrow banner_right"></i>',
    })

    $('.testimonial_slick').slick({
        slidesToShow:2,
        prevArrow:'<i class="fas fa-chevron-left testimonial_arrow testimonial_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right testimonial_arrow testimonial_right"></i>',
    })

    $('.latest_product_slick').slick({
        slidesToShow:4,
        prevArrow:'<i class="fas fa-chevron-left latest_arrow latest_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right latest_arrow latest_right"></i>',
    })


    //filterizr
    $('.featured_filter_container').filterizr({

    });

    //countdown js

   $('.cont_down').countdown('2021/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="col-sm-3"><div class="cont_down_item"><span>%d</span><span>days</span></div></div> '
      + '<div class="col-sm-3"><div class="cont_down_item"><span>%H</span><span>hour</span></div></div> '
      + '<div class="col-sm-3"><div class="cont_down_item"><span>%M</span><span>min</span></div></div> '
      + '<div class="col-sm-3"><div class="cont_down_item"><span>%S</span><span>secs</span></div></div> '

     ));
  });
        
    
})