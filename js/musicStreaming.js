// 내코드
var playlst = $('.playlist');
var num = 0;
while($(window).height() > ($(playlst[num]).offset().top + $(playlst[num]).height()/2)){
    $(playlst[num++]).css('opacity', 1);
  }

$(window).scroll(function(){

playlst.each(function(){
  var listBottom = $(window).height() + $(window).scrollTop();
  var plist = $(this).offset().top + $(this).height()/2;
  if (listBottom >= plist){
    $(this).animate({opacity:'1'},1000);
  }
});

if ($(window).scrollTop() == ($(document).height()-$(window).height())){
  $('.to-top-btn').fadeIn(1000);
  $('.to-top-btn').on('click',function(){
    $(window).scrollTop(0);
  });
}
});
