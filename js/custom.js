jQuery(document).ready(function () {
  var windowWidht = jQuery(window).width();

  /*open menu*/
  jQuery('.main-header .toggle-mobile').click(function(){
    jQuery(this).toggleClass('opened');
    jQuery('.main-header__mobile').toggleClass('show');
  });

  /*scroll to section projects*/
  jQuery('.banner-search__bottom .arrow-bottom').click(function(){
    jQuery('html,body').animate({
      scrollTop: jQuery("#projects").offset().top - 200
    }, 'slow');
  });

  /*scroll to page top*/
  jQuery('.scroll-top').click(function(){
    jQuery('html,body').animate({
      scrollTop: jQuery("html").offset().top
    }, 'slow');
  });

  /*slider woks*/
  jQuery('.hero ').each(function() {
    jQuery(this).slick({
        arrows: false,
        dots:true,
        infinite:true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
  }); 

  /*slider about*/
  jQuery('.about__slick').slick({
    dots: false,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    prevArrow: jQuery('.arrows-slick .slick-prev'),
    nextArrow: jQuery('.arrows-slick .slick-next'),
    responsive: [
      {
          breakpoint: 980,
          settings: {    
              infinite:false, 
              variableWidth: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              speed: 300,
              rows: 2
          }
      },
        {
            breakpoint: 768,
            settings: {    
                infinite:false, 
                variableWidth: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow: 1,
                speed: 300,
                rows: 2
            }
        }
    ]
  });

  /*slider skills*/
  if(windowWidht <= 767){
    jQuery('.skills .bottom-info').slick({ 
      arrows:false,
      dots:false, 
      infinite:true, 
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }

  /*gallery block*/
  jQuery('.gallery-block').each(function() {
    jQuery(this).slick({
        arrows: false,
        dots:true,
        infinite:true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

  /*scroll to page slow*/
  jQuery('#nav-bar-spy a').click(function(){
    var link = jQuery(this).attr('href');
    jQuery('html,body').animate({
      scrollTop: jQuery(link).offset().top + 100
    }, 'slow');
  });

  jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();
    var header = jQuery('.main-header').outerHeight();
    if(scroll >= header){
      jQuery(".main-header").addClass('bk');
    }
    else{
      jQuery(".main-header").removeClass('bk');
    }
  });
});

