// 防止其他代码修改header高度
$(document).ready(function() {
    $('#top').css('height', '');
});

$(document).ready(function(){
  $(".video-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});
