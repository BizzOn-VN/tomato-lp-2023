  
    
$('.section-1 .main-content .content').height(h3height); 
  var h3height = 0;
      $('.section-1 .main-content .content').each(function() {
          if(h3height < $(this).height()){
            h3height = $(this).height();
          };
      });
  $('.section-1 .main-content .content').height(h3height); 
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

  $('.section-4 .main-content .content').height(h3height); 
    var h3height = 0;
        $('.section-4 .main-content .content').each(function() {
            if(h3height < $(this).height()){
              h3height = $(this).height();
            };
        });
    $('.section-4 .main-content .content').height(h3height); 
    var onresize = function() {
       $('.section-4 .main-content .content').css("height","auto");
               var h3height = 0;
               $('.section-4 .main-content .content').each(function() {
                   if(h3height < $(this).height()){
                     h3height = $(this).height();
                   };
               });
               $('.section-4 .main-content .content').height(h3height);
       };
    window.addEventListener("resize", onresize);


$('.ui.dropdown')
  .dropdown()
;

$(".page-header .toggle-menu").click(function(){
    $(".page-header .main-menu").toggleClass("active");
});
$(".page-header .main-menu ul li a").click(function(){
    $(".page-header .main-menu").removeClass("active");
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 5) {
        $('.page-header .container-header').addClass('scroll-top');
    }
    else {
        $('.page-header .container-header').removeClass('scroll-top');
    }                 
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

$('.section-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },  
        1000:{
            items:4
        }
    }
});

$('.slide-images').click({
    dots: false,
    infinite: true,
    slidesToShow : 2,
    slidesToScroll:2,
    nextArrow : '<button><i class="fas fa-arrow-square-right"></i></button>',
    prevArrow : '<button><i class="fas fa-arrow-square-left"></i></button>',
  });

