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
	movePage()
}

function winScroll(win_h,scrollTop,window_height,win_w){
  let time
  let second=$('.second');
  let ourPerspective=$('.our-perspective');
  let ourService=$('.our-service');
  let ourSystem=$('.our-system');
  let ourQualifications=$('.our-qualifications');
  let join=$('.join');
  // second——————
  if (window_height >=second.offset().top+200) {
    time=500
    for (let i = 0; i < $(".second .second-con p").length; i++) {
      time+=300
      $(".second .second-con p").eq(i).animate({top:0,opacity: "1"},time); 
    }
  }
  // our-perspective————————
  if (window_height >=ourPerspective.offset().top+150) {
    $(".our-perspective .publicTitle").animate({left:0,opacity: "1"},800);
  }
  if (window_height >=ourPerspective.offset().top+450) {
    time=500;
    for(var i=0;i<$(".our-perspective .our-item").length;i++){
      time+=200;
      $(".our-perspective .our-item").eq(i).animate({top:0,opacity: "1"},time);
    } 
    setTimeout(()=>{
      $(".our-perspective .our-text").animate({opacity:1},500);
    },500)
  }
  // our-service——————
  if (window_height >=ourService.offset().top+150) {
    $(".our-service .publicTitle").animate({left:0,opacity: "1"},800);
  }
  if (window_height >=ourService.offset().top+450) {
    $(".our-service .service-box").animate({opacity: "1"},800);
  }
  // our-system
  if (window_height >=ourSystem.offset().top+150) {
    $('.our-system .publicTitle').animate({left:0,opacity:1},500);
  }
  if (window_height >=ourSystem.offset().top+450) {
    $('.our-system .system-text').animate({opacity:1},500);
    setTimeout(() => {
      time=500;
      for(var i=0;i<$(".our-system .system-item").length;i++){
        time+=200;
        $(".our-system .system-item").eq(i).animate({top:0,opacity: "1"},time);
      } 
    }, 500);
  }
  // our-qualifications
  if (window_height >=ourQualifications.offset().top+150) {
    $('.our-qualifications .publicTitle').animate({left:0,opacity:1},500);
  }
  if (window_height >=ourQualifications.offset().top+450) {
    setTimeout(() => {
      $('.our-qualifications .left').animate({opacity:1},500);
    }, 300);
    setTimeout(() => {
      $('.our-qualifications .right').animate({opacity:1},500);
    }, 800);
  }
  // join
  if (window_height >=join.offset().top+150) {
    $('.join .publicTitle').animate({left:0,opacity:1},500);
  }
  if (window_height >=join.offset().top+450) {
    setTimeout(() => {
      $('.join p').animate({top:0,opacity:1},500);
    }, 300);
    setTimeout(() => {
      $('.join .btn').css({opacity:1});
    }, 800);
  }
  // footer
  if (window_height >=$('.footer').offset().top+150) {
      $('.footer').animate({top:0,opacity:1},800);
  }
}


$(function() {
  let win_h=$(window).height();
  let win_w=$(window).width();
  // 加载播放
  var video = $('video');
  video[0].play();
  // console.log('窗口可视高度',win_h)
	$("#ABOUT").addClass("active");
  watchDirection()
	movePage()
  // animate
  $(".first .top-con h2,.first .top-con p").css({top:'70px',opacity:0});
  $(".first .timeline .time-item,.our-service .service-box").css({opacity:0});
  $(".second .second-con p").css({top:'50px',opacity:0});
  $(".our-perspective .our-item,.our-system .system-item").css({top:'100px',opacity:0});
  $(".our-perspective .our-text,.our-system .system-text,.our-qualifications .left,.our-qualifications .right,.join p,.join .btn").css({opacity:0});
  $(".publicTitle").css({left:'-30px',opacity:0});
  $(".footer").css({opacity:0});
  // first————————————
  $('.first .top-con h2').animate({top:0,opacity:1},1000);
  setTimeout(()=>{
    $('.first .top-con p').animate({top:0,opacity:1},1200);
  },500)
  setTimeout(()=>{
    for (let i = 0; i < 5; i++) {
      setTimeout(function() {
        $(".first .timeline .time-item").eq(i).animate({top:0,opacity: "1"},500);
      }, i * 800); 
    }
  },1500)

	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var window_height = document.documentElement.clientHeight + scrollTop;
	winScroll(win_h,scrollTop, window_height,win_w);
	$(window).scroll(function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var window_height = document.documentElement.clientHeight + scrollTop;
		winScroll(win_h,scrollTop, window_height,win_w)
	})
});