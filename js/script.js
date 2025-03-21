$(function (){
  let top1 = $("#section1").offset().top - 10;
  let top2 = $("#section2").offset().top - 10;
  let top3 = $("#section3").offset().top - 10;
  let top4 = $("#section4").offset().top - 10;

  $(window).on("scroll", function(){
    let scroll = $(this).scrollTop();
    let menuOnOff = 0;

    if (scroll > menuOnOff) {
      $("#main").css("top","-50px");
    } else {
      $("#main").css("top","0px");
    }
    if (scroll >= top0 && scroll <= top1) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(0).addClass("on");
      $("#section1 h2").addClass("embo");
    }
    if (scroll >= top1 && scroll <= top2) {
      $(".navi .on").stop().animate({ height: "192px;" });
      $(".navi li").removeClass("on");
      $(".navi li").eq(1).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
    if (scroll >= top2 && scroll <= top3) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(2).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
    if (scroll >= top3 && scroll <= top4) {
      $(".navi li").removeClass("on");
      $(".navi li").eq(3).addClass("on");
      $("#section1 h2").removeClass("embo");
    }
  });

  $("header h1").on("click", function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });

  $("header h1").mouseover(function(){
    $(".h_1").css("opacity","1").stop().animate({right: 0}, 100);
  })
  $("header h1").mouseleave(function(){
    $(".h_1").stop().animate({right: "20px", opacity: 0}, 100);
  })

  $(".navi li").on("click",function(){
    let upDown = $(this).index();
    let move = $("#container > div").eq(upDown).offset().top;
    $("html, body").stop().animate({scrollTop: move});
  })

  $(".top").stop().animate({ height: "550px" }, 1000);
  $(".bottom").stop().animate({ height: "190px" }, 1000);
  $(".right").stop().animate({ width: "1300px" }, 2000);
  $(".left p").stop().animate({ height: "100%" }, 2000, function () {
      $("h2").addClass("embo");
    });

  // section3
  $(".subTitle li").on("click", function(){
    tit = $(this).index();
    $(".subTitle li").removeClass("on");
    $(".subTitle li").eq(tit).addClass("on");
    $(".text_wrap li").addClass("back");
    $(".text_wrap li").stop().animate({ left: "-100%" });
    $(".text_wrap li").eq(tit).stop().animate({ left: "0" });
  })

  // section4
  $("#section4 .big li").on("click", function () {
    i = $(this).index();
    $("#section4 .small li").css({ opacity: "0" });
    $("#section4 .small li").eq(i).css({ opacity: "1" });
    $("#section4 .big li:first-child").css({ animation: "none" });
  });

});