/**
 * 翻页，每次滚动可视区域的80%高度或宽度（例：滚动区域以id="scroll-panel"元素包裹）
 * @param {string} type 翻页类型，上、下、左、右
 * @param {string} id 滚动区域的包裹元素的id
 * */
var projectSwiper
function movePage (id) {
  // 放大缩小窗口
  let win_h=$(window).height();
  let win_w=$(window).width();
  $('.con-item').css({height:win_h+'px'})

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
	movePage('home')
}

function winScroll(win_h,scrollTop,window_height,win_w){
  // banner
  if (scrollTop < parseInt(win_h/2-50)) {
    $(".page-0").css({opacity: "1"})
  }else{
    $(".page-0").css({opacity: "0"})
  }
  if (scrollTop >= parseInt(win_h/2-50)&&scrollTop < parseInt(win_h/2+win_h-50)) {
    $(".page-1").css({opacity: "1"})
  }else{
    $(".page-1").css({opacity: "0"})
  }
  if (scrollTop >= parseInt(win_h/2+win_h-50)&&scrollTop < parseInt(win_h*3)) {
    $(".page-2").css({opacity: "1"})
  }else{
    $(".page-2").css({opacity: "0"})
  }

  let time
  let project=$('.project');
  let proBanner=$('.pro-banner');
  let brand=$('.brand');
  let contact=$('.contact');
  // project
  if (window_height >=project.offset().top+200) {
    time=500
    $('.project .publicTitle').animate({top:0,opacity:1},500);
    $('.project .pro-label').animate({top:0,opacity:1},time+200);
    for(var i=0;i<$(".project .pro-item").length;i++){
      time+=300;
      $(".project .pro-item").eq(i).animate({top:0,opacity: "1"},time);
    }
  }
  // pro-banner
  if (window_height >=proBanner.offset().top+200) {
    $('.pro-banner .btn').animate({top:'50%',opacity:1},500);
  }
  // brand
  if (window_height >=brand.offset().top+150) {
    $(".brand .publicTitle").animate({top:0,opacity: "1"},800);
  }
  if (window_height >=brand.offset().top+450) {
    time=500;
    const brandNum=win_w>900?5:3
    for(var i=0;i<$(".brand .logo-list .img").length;i++){
      if(i%brandNum===0){ 
        time+=500;
      }
      $(".brand .logo-list .img").eq(i).animate({top:0,opacity: "1"},time);
    } 
  }
  // contact
  if (window_height >=contact.offset().top+150) {
      $('.contact .publicTitle').animate({opacity:1},500);
  }
  if (window_height >=contact.offset().top+450) {
      time=500;
      for(var i=0;i<$(".contact .item").length;i++){
          time+=200;
          $(".contact .item").eq(i).animate({top:0,opacity: "1"},time);
      } 
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
	$("#home").addClass("active");
  watchDirection()
	movePage('home')
  //pro-banner
	projectSwiper = new Swiper(".pro-banner .swiper-container", {
		autoplay: 30000,
		speed: 1500,
		pagination: ".pro-banner .pagination",
		paginationClickable: true,
		loop: true,
		onSlideChangeStart: function(swiper) {
			$(".pro-banner .swiper-slide .btn").find(".more").removeClass("show")
		},
		onSlideChangeEnd: function(swiper) {
			$(".pro-banner .swiper-slide-active .btn").find(".more").addClass("show")
		},
	});
  // animate
  $(".page-0 p").css({left:'-50px',opacity:0});
  $(".page-0 b").css({right:'-50px',opacity:0});
  $(".project .pro-label").css({top:'50px',opacity:0});
  $(".pro-banner .btn").css({top:'70%',opacity:0});
  $(".project .pro-item,.contact .item").css({top:'100px',opacity:0});
  $(".brand .logo-list .img").css({opacity:0});
  $(".publicTitle").css({top:'30px',opacity:0});
  $(".footer").css({opacity:0});
  // banner
  $(".page-0 p").animate({left:0,opacity: 1}, 500);
  $(".page-0 b").animate({right:0,opacity: 1}, 500);

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
});