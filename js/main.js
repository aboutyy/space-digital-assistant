jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 900){
    jQuery('#main-nav').addClass('navbar-fixed-top');
  } else {
    jQuery('#main-nav').removeClass('navbar-fixed-top');
  }
});

jQuery(document).ready(function($) {
  "use strict";
  $('#main-nav .nav').onePageNav({
    currentClass: 'active',
    scrollOffset: 69,
  });  
});

$(document).ready(function(){
   
  //.parallax(xPosition, speedFactor, outerHeight) options:
  //xPosition - Horizontal position of the element
  //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
  //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
  $('#top').parallax("50%", 0.4);
  $('#testimonial').parallax("50%", 0.4);
  $('#download').parallax("50%", 0.4);
})

$(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });

    jQuery(function( $ ){
          $('#download-app1').localScroll({
            duration:1200
          });
           $('#download-app2').localScroll({
            duration:1000
          });
        });

$(document).ready(function(){
  // 添加平滑滚动到所有链接
  $("a").on('click', function(event) {
    // 确保 this.hash 有值后才能覆盖默认行为
    if (this.hash !== "") {
      // 防止默认的锚点点击行为
      event.preventDefault();

      // 存储 hash
      var hash = this.hash;

      // 使用 jQuery 的 animate() 方法添加平滑滚动效果
      // 可选的 number (800) 指定滚动的毫秒数
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // 添加 hash (#) 到 URL，但不会造成页面跳转
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function() {
  $('.feature-tabs nav ul li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('.feature-tabs nav ul li').removeClass('active');
    $('.tab-pane').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });

  // 点击卡片时翻转
  $('.card-inner').click(function() {
    $(this).toggleClass('is-flipped');
  });
});
