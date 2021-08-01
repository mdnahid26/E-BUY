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

        responsive:[
           {   breakpoint:992,
               settings:{
                 slidesToShow:3,
                 slidesToScroll:1,
               }
           },
           {   breakpoint:576,
            settings:{
              slidesToShow:2,
              slidesToScroll:1,
            }
        },
           {   breakpoint:400,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
            }
        }
          
        ]
    })


    //filterizr
    $('.featured_filter_container').filterizr({

    });

    //countdown js

   $('.cont_down').countdown('10/10/2022', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="col-3"><div class="cont_down_item"><span>%d</span><span>days</span></div></div> '
      + '<div class="col-3"><div class="cont_down_item"><span>%H</span><span>hour</span></div></div> '
      + '<div class="col-3"><div class="cont_down_item"><span>%M</span><span>min</span></div></div> '
      + '<div class="col-3"><div class="cont_down_item"><span>%S</span><span>secs</span></div></div> '

     ));
  });
      
})

$(function(){
  $(window).on('scroll',function(){
    if($(window).scrollTop()>0){
      $('#mynav').addClass('stickynav')
    }else{
      $('#mynav').removeClass('stickynav')
    }
  })
})