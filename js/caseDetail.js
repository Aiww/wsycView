function movePage (id) {
  // 放大缩小窗口
  let win_h=$(window).height();
  let win_w=$(window).width();

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

  let detail=$('.detail');
  if (window_height >=detail.offset().top+150) {
    $(".detail .title").animate({"opacity": "1"},500);
  }
  if (window_height >=detail.offset().top+350) {
    $(".detail .con").animate({"opacity": "1"},500);
  }
  let more=$('.more');
  if (window_height >=more.offset().top+200) {
    $(".detail .more").animate({top:0,"opacity": "1"},500);
  }
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
  $(".detail .more").css({'top':'100px',"opacity":0});
  $(".banner p").css({'left':'-50px',"opacity":0});
  $(".banner span").css({'right':'-50px',"opacity":0});
  $(".footer,.detail .title,.detail .con").css({opacity:0});

  // banner
  $(".banner p").animate({'left':0,"opacity":1},500);
  $(".banner span").animate({'right':0,"opacity":1},500);

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
});