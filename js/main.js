//js
let lastScroll = 0;
$(window).on('scroll', function(){
      let scrollTop = $(this).scrollTop();
      if(scrollTop > lastScroll) {
         //down
         $('header').removeClass('nav-up');
         $('header').addClass('nav-none')
      } else if (scrollTop == 0) {
         $('header').removeClass('nav-up')
         $('header').removeClass('nav-none')
      }
      else {
         // up
         $('header').addClass('nav-up');
         $('header').removeClass('nav-none')
      }
      lastScroll = scrollTop;
});

$('.site_wrap_btn button').click(function() {
   $('.site_wrap_btn button, .site_wrap_btn ul').toggleClass('open');
})
$('header #gnb .dep1').hover(function() {
   $('header #gnb .dep2').stop().show();
   $('header').addClass('open');
}, function() {
   $('header #gnb .dep2').stop().slideUp();
   $('header').removeClass('open');
})
$('header #gnb .dep2 li').click(function() {
   $(this).children('.dep3').toggleClass('depon')
})
$('header #gnb .dep1>li').mouseover(function () {
   $(this).addClass('over')
}),
$('header #gnb .dep1>li').mouseout(function () {
   $(this).removeClass('over')
})
$('header #gnb .dep2rec').click(function() {
   $(this).toggleClass('rot')
})
$('header #gnb .dep2sns').click(function() {
   $(this).toggleClass('rot')
})

$(window).scroll(function() {
   if($(window).scrollTop() >= 10) {
      $('.intro_banner_bg').addClass('banneron')
   }
   else {
      $('.intro_banner_bg').removeClass('banneron')
   }
})
$('.news_content li').mouseover(function() {
   num = $(this).index()
   $('.news_deco').eq(num).css({'opacity' : '1'})
}),
$('.news_content li').mouseout(function() {
   num = $(this).index()
   $('.news_deco').eq(num).css({'opacity' : '0'})
})
$('.youtube_go').mouseover(function() {
   num = $(this).index()
   $('.youtube_deco').eq(num).css({'opacity' : '1'})
}),
$('.youtube_go').mouseout(function() {
   num = $(this).index()
   $('.youtube_deco').eq(num).css({'opacity' : '0'})
})



/* right_menu */
$('.side_menu_btn').click(function() {
   $('.side_menu_wrap').css({'display' : 'flex'});
   $('.site_wrap_btn button').css({'display':'none'});
   $('html, body').css({'overflow':'hidden'});
})
$('#side_menu_close_btn').click(function() {
   $('.side_menu_wrap').hide();
   $('.site_wrap_btn button').css({'display':'flex'});
   $('html, body').css({'overflow':'auto'});
})
$('.side_menu_wrap .side_gnb .dep1>li>a').click(function () {
   $('.side_menu_wrap .side_gnb .dep2').stop().slideUp();
   $(this).next().stop().slideToggle();
})
$('.side_menu_wrap .side_gnb .dep2>li>a').click(function() {
   $(this).next().stop().slideToggle()
})


$('.intro_btn_wrap button').click(function() {
   n = $(this).index()
   $('.intro_mask').removeClass('active')
   $('.intro_mask').eq(n).addClass('active')
   $('.intro_txt').removeClass('txton')
   $('.intro_txt').eq(n).addClass('txton')
   $('.intro_btn_wrap button').removeClass('btnon')
   $('.intro_btn_wrap button').eq(n).addClass('btnon')
   let bgimg = $('.active').css('background-image')
   $('.intro_mask_wrap').css('background-image', bgimg)
   console.log($('.active').css('background-image'))
   let introTxt = $('.txton').css('display')
   $('intro_txt').css('display', introTxt)
   console.log($('.txton').css('display'))
})
$('.family_wrap button').click(function() {
   $('.family_wrap ul').toggleClass('fwOn');
   $(this).toggleClass('open');
})
const ceoSwiper = new Swiper('.ceo_intro_wrap .swiper', {
   autoplay: true,
   effect: 'fade'
})
const bullet = ['01. Ingredient', '02. Product','03. Technology' ];
const mainSwiper = new Swiper('.main_swiper', {
   direction: 'horizontal',
   autoplay: true,
   loop: true,
   speed: 1000,
   effect: 'slide',
   pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      type: 'bullets',
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + '<em>'+ bullet[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
      },
   },
   on: {
      slideChange: function () {
         $('.txt_change').removeClass('changeon');
         $('.txt_change').eq(this.realIndex).addClass('changeon');}
      }
})
