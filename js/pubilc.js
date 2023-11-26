$(function(){
  $(".header-box .menuBtn").on('click',function(){
      if(!$(this).hasClass('selected')){
          $(this).addClass('selected');
          $(".right").animate({"height":"100%"},500);
          $('.header-box .logo').addClass('whileColor');
      }else{
          $(this).removeClass('selected');
          $(".right").animate({"height":"0"},500);
          $('.header-box .logo').removeClass('whileColor');
      }
  })
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
  document.body.addEventListener('touchstart',function(){});
})
// 页面滑动加载
$(window).scroll(function(){
  if($('.header-box .menuBtn').hasClass('selected')){
      $('.header-box .menuBtn').removeClass('selected');
      $(".right").animate({"height":"0"},500);
      $('.header-box .logo').removeClass('whileColor');
  }
})

