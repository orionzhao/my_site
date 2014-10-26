jQuery(document).ready(function($){
  //update these values if you change these breakpoints in the style.styl
  var MqM= 768,
      MqL = 1024;

  $(window).on('resize', function(){
    if($(window).width() <= MqM) {
      $('.landing_name_vertical').text('ZHAO')
    } else {
      $('.landing_name_vertical').text('ZHA')
    }
  });
});