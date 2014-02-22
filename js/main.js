$(document).ready(function(){

	$("#bck-grabber").keyup(function(){
		var background = $("#bck-grabber").val();
		$(".background").css("background-color", background);
    valuecheck();
	});

  $('.rember-color').click(function(){
    var color = Color($('#bck-grabber').val());
    var original = $('#bck-grabber').val();
    $('.box').fadeIn();

    var light = color.lighten(0.2);
    $('<div class="bg">' + light.hexString() + " Lighter" + '</div>').css("background-color", light.hexString()).appendTo('.box');

    $('<div class="bg">' + original + " Original" + '</div>').css("background-color", original).appendTo('.box');

    var dark = color.alpha(0.5).darken(0.5);
    $('<div class="bg">' + dark.hexString() + " Darker" + '</div>').css("background-color", dark.hexString()).appendTo('.box');


    $(".background").css("background-color", "#555");
  });

  valuecheck();
});


function valuecheck() {
  if ($('#bck-grabber').val().length != "4" && $('#bck-grabber').val().length < "7") {
    $('#bck-grabber').addClass('error');
  } else {
    $('#bck-grabber').removeClass('error');
  };
  if ($('#bck-grabber').val()[0] != "#" ) {
    $('.hexi-text').fadeIn();
  } else {
    $('.hexi-text').fadeOut();
  };
}