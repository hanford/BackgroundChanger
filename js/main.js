$(document).ready(function(){

	$("#bck-grabber").keyup(function(){
		var background = $("#bck-grabber").val();
		$(".background").css("background-color", background);
    valuecheck();
	});

  $('.rember-color').click(function(){
    var remember = $('#bck-grabber').val();
    $('.box').fadeIn();
    
    $('<li class="bg">' + remember + '</li>')
      .css("background-color", remember)
      .appendTo('.box');

    $(".background").css("background-color", "#999");
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