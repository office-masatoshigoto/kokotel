/*
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
*/

$(document).ready(function () {
//スムーズスクロール
$('a[href^=#]' + 'a:not(.non-scroll)' + 'a:not([data-toggle="tab"])').click(function () {
 var speed = 500;
 var href = $(this).attr("href");
 var target = $(href == "#" || href == "" ? 'html' : href);
 var position = target.offset().top;
  $("html, body").animate({
   scrollTop: position
  }, speed, "swing");
 return false;
 });
});
