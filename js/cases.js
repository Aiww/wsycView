function movePage (id) {
  // 放大缩小窗口
  let win_h=$(window).height();
  let win_w=$(window).width();
  $('.con-item').css({height:win_h+'px'})
  const waterfallElement=document.querySelector('.waterfall')
  if(win_w>1200){
    $('.cases-list.fixedH .cases-item .img').css({height:win_w/5+'px'})
    if(waterfallElement) waterFall('.waterfall', '.cases-item')
  } else  if(win_w<=1200&&win_w>600){
    $('.cases-list.fixedH .cases-item .img').css({height:win_w/3-50+'px'})
    if(waterfallElement) waterFall('.waterfall', '.cases-item')
  }else{
    $('.cases-list.fixedH .cases-item .img').css({height:'auto'})
  }

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
  // footer
  if (window_height >=$('.footer').offset().top+150) {
      $('.footer').animate({top:0,opacity:1},800);
  }
}


$(function() {
  let win_h=$(window).height();
  let win_w=$(window).width();
  // console.log('窗口可视高度',win_h)
	$("#CASES").addClass("active");
  watchDirection()
	movePage()
  // animate
  $(".cases-label,.cases-list").css({'top':'50px',"opacity":0});
  $(".footer").css({opacity:0});

  // top
  setTimeout(()=>{
    $('.cases-label').animate({"top":0,'opacity':1},500);
  },100)
  setTimeout(()=>{
    $(".cases-list").animate({"top":0,"opacity": "1"},500);
  },600)

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
});