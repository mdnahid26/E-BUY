$(function(){
   'use stirct';

   //slick
    $('.banner_slider').slick({
        prevArrow:'<i class="fas fa-chevron-left banner_arrow banner_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right banner_arrow banner_right"></i>',
    })

    $('.testimonial_slick').slick({
        slidesToShow:2,
    })

    $('.latest_product_slick').slick({
        slidesToShow:4,
    })

    $('.featured_filter_container').filterizr();
})