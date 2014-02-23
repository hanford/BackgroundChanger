$(document).ready(function(){
  $.cookie.json = true;
  $('.favorite').append($.cookie("color"));

	$("#bck-grabber").keyup(function(){
    original = $('#bck-grabber').val();
		var background = $("#bck-grabber").val();
		$(".background").css("background-color", background);
    valuecheck();
	});

  $(document).keypress(function(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      $('.favorite').empty();
      $.cookie("color", original);
      $('.favorite').append($.cookie("color"));
      treat();
    }
  });

  $(".background").css("background-color", "#555");
  valuecheck();
  // favecheck();
});

// function favecheck() {
//   if ($('.favorite').text() === "") {
//     console.log('yes');
//   } else {
//     var color = Color($('.favorite').text());
//     treat();
//   }
// };

function treat() {
  var color = Color($('#bck-grabber').val());
  $('.box').fadeIn();
  var light = color.lighten(0.5);
  $('<div class="bg">' + light.hexString() + " Lighter" + '</div>').css("background-color", light.hexString()).appendTo('.box');
  $('<div class="bg">' + original + " Original" + '</div>')
    .css("background-color", original)
    .appendTo('.box');
  var dark = color.darken(0.5);
  $('<div class="bg">' + dark.hexString() + " Darker" + '</div>')
    .css("background-color", dark.hexString())
    .appendTo('.box');
};


function valuecheck() {
  if ($('#bck-grabber').val().length != "4" && $('#bck-grabber').val().length < "7") {
    $('#bck-grabber').addClass('error');
    $('.title').text("Insert Color code below");
  } else {
    $('.title').text("Press Enter to save");
    $('#bck-grabber').removeClass('error');
  };
  if ($('#bck-grabber').val()[0] != "#" ) {
    $('.hexi-text').fadeIn();
  } else {
    $('.hexi-text').fadeOut();
  };
}