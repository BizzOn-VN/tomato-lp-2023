$('.ui.dropdown')
  .dropdown()
;
$(".page-header .toggle-menu").click(function(){
    $(".page-header .main-menu").toggleClass("active");
});
$(".page-header .main-menu ul li a").click(function(){
    $(".page-header .main-menu").removeClass("active");
});
$(".md-section-1").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-1 .md-psp").offset().top - 90},
        'slow');
});
$(".md-section-2").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-1 .md-sps").offset().top - 90},
        'slow');
});
$(".md-section-3").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-4").offset().top - 90},
        'slow');
});
$(".md-section-4").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-3").offset().top - 90},
        'slow');
});
$(".md-section-5").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-6").offset().top - 90},
        'slow');
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.page-header .container-header').addClass('scroll-top');
    }
    else {
        $('.page-header .container-header').removeClass('scroll-top');
    }                 
});
$( window ).on( "load", function() {
    var h3height = 0;
     $('.section-1 .main-content .content').each(function() {
         if(h3height < $(this).height()){
           h3height = $(this).height();
         };
     });
     $('.section-1 .main-content .content').height(h3height);
});
 

  var onresize = function() {
   $('.section-1 .main-content .content').css("height","auto");
           var h3height = 0;
           $('.section-1 .main-content .content').each(function() {
               if(h3height < $(this).height()){
                 h3height = $(this).height();
               };
           });
           $('.section-1 .main-content .content').height(h3height);
   };
  window.addEventListener("resize", onresize);

  $( window ).on( "load", function() {
             var h4height = 0;
             $('.section-4 .main-content .content').each(function() {
                 if(h4height < $(this).height()){
                   h4height = $(this).height();
                 };
             });
             $('.section-4 .main-content .content').height(h4height + 30);
  });
// $('.section-4 .main-content .content').height(h4height); 
  var onresize = function() {
     $('.section-4 .main-content .content').css("height","auto");
             var h4height = 0;
             $('.section-4 .main-content .content').each(function() {
                 if(h4height < $(this).height()){
                   h4height = $(this).height();
                 };
             });
             $('.section-4 .main-content .content').height(h4height + 30);
     };
  window.addEventListener("resize", onresize);








// $("#modal-sucess").fancybox().trigger('click');
// $("#modal-sucess-1").fancybox().trigger('click');

// $('.section-2 .owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:false,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },  
//         1000:{
//             items:4
//         }
//     }
// });

$('.slide-images').click({
    dots: false,
    infinite: true,
    slidesToShow : 2,
    slidesToScroll:2,
    nextArrow : '<button><i class="fas fa-arrow-square-right"></i></button>',
    prevArrow : '<button><i class="fas fa-arrow-square-left"></i></button>',
  });

