function movePage (id) {
  // 放大缩小窗口
  let win_h=$(window).height();
  let win_w=$(window).width();
  $('.con-item').css({height:win_h+'px'})
  changeWindow(win_w,win_h)

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
}

function watchDirection(){
  // 监听浏览器的滚动事件 判断是向上滚动还是向下滚动
  var lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // console.log('向下滚动')
        $(".header-box").removeClass("show")
    } else {
        // console.log('向上滚动')
        $(".header-box").addClass("show")
    }
    lastScrollTop = scrollTop;
  });
}

// 拖动窗口时触发
window.onresize = resizeBannerImage;
function resizeBannerImage() {
	movePage()
}

function winScroll(win_h,scrollTop,window_height,win_w){

  let address=$('.address');
  if (window_height >=address.offset().top+150) {
    $(".address").animate({"opacity": "1"},500);
  }
  let time
  let join=$('.joinUs');
  // second——————
  if (window_height >=join.offset().top+200) {
    time=500
    for (let i = 0; i < $(".joinUs .join-box").length; i++) {
      time+=300
      $(".joinUs .join-box").eq(i).animate({top:0,opacity: "1"},time); 
    }
  }
  // footer
  if (window_height >=$('.footer').offset().top+150) {
      $('.footer').animate({top:0,opacity:1},800);
  }
}

function changeWindow(win_w,win_h){
  if(win_w>=1410){
    if($('.address').hasClass('wMax')){
        console.log('max');            
    }else{        
        changeW('address wMax','900')    
    }
  }else if(win_w<1410&&win_w>=1240){
    if($('.address').hasClass('w1410')){
        console.log('1240<x<1410');            
    }else{            
        changeW('address w1410','55%')   
    }
  }else if(win_w<1240&&win_w>=1045){
    if($('.address').hasClass('w1240')){
        console.log('1045<x<1240');            
    }else{            
        changeW('address w1240','600')   
    }
  }else if(win_w<1045&&win_w>=930){
    if($('.address').hasClass('w1045')){
        console.log('930<x<1240');            
    }else{            
        changeW('address w1045','500')   
    }
  }else{
    $('.address').removeClass().addClass('address');
  }
}
function changeW(className,width){
  $('.address').removeClass().addClass(className);
  accor($('#Accor0'), width, 500, true, false);
  if($(window).width>1000){        
      $('.details').css('width',width-80)
  }else{
      $('.details').css('width',width-50)
  }
}


$(function() {
  let win_h=$(window).height();
  let win_w=$(window).width();
  // console.log('窗口可视高度',win_h)
	$("#CONTACT").addClass("active");
  watchDirection()
	movePage()
  // animate
  $(".top-title h1,.address").css({"opacity":0});
  $(".top-title p,.joinUs .join-box").css({'top':'50px',"opacity":0});
  $(".footer").css({opacity:0});

  // top
  setTimeout(()=>{
    $('.top-title h1').animate({'opacity':1},500);
  },100)
  setTimeout(()=>{
    $(".top-title p").animate({"top":0,"opacity": "1"},500);
  },600)
  $(this).find('.joinUs .join-box.active .join-con').stop().slideDown();
  $('.joinUs .join-box').click(function(){
    $(this).parent().find('.join-box').removeClass('active');
    $(this).addClass('active');
    $(this).siblings().find('.join-con').stop().slideUp();
    $(this).find('.join-con').stop().slideDown();
  });
  // zp
  $(this).find('.join-box.active .join-list .join-item.active .detail').stop().slideDown();
  $('.joinUs .join-box.active .join-list .join-item').click(function(){
    $(this).parent().find('.join-item').removeClass('active');
    $(this).addClass('active');
    $(this).siblings().find('.detail').stop().slideUp();
    $(this).find('.detail').stop().slideDown();
  });

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
});