$(document).ready(function(){
  $.cookie.json = true;
  cookie = $.cookie("color");

  if (cookie != undefined) {
    $('.favorite-box').toggle();
    $('.favorite').append(cookie);
    var color = Color(cookie);
    treat(cookie);
  };

  $("#bck-grabber").keyup(function(){
    original = $('#bck-grabber').val();
    var background = $("#bck-grabber").val();
    $(".background").css("background-color", background);
    valuecheck();
  });

  $(document).keypress(function(e) {
    if (colorLength === 4 || colorLength === 7) {
      if(e.keyCode == 13) {
        e.preventDefault();
        $('.favorite').empty();
        // $('.bttn-hide').slideDown();
        $('.favorite-box').show();
        $('.favorite-text').show();
        $.cookie("color", original);
        $('.favorite').append($.cookie("color"));
        treat(original);
      }
    }
  });

  $('.remove-cookie').click(function(){
    $.removeCookie('color');
    $('.box').removeClass('shadow');
    $('.box').slideUp(400).empty();
    $('.favorite').empty();
    $('.favorite-text').toggle();
  });

  $(".background").css("background-color", "#123");
  valuecheck();
});

function treat(original) {
  color = Color(original);
  $('.box').fadeIn();
  var light = color.lighten(0.5);
  $('<div class="bg">' + light.hexString() + " Lighter" + '</div>')
  .css("background-color", light.hexString())
  .appendTo('.box');
  $('<div class="bg">' + original + " Original" + '</div>')
  .css("background-color", original)
  .appendTo('.box');
  var dark = color.darken(0.5);
  $('<div class="bg">' + dark.hexString() + " Darker" + '</div>')
  .css("background-color", dark.hexString())
  .appendTo('.box');
};

// function lighten() {
//   var lighter = color.lighten(0.1);
//   if (lighter.hexString() === "#FFFFFF"){

//   } else {
//   $('<div class="bg">' + lighter.hexString() + '</div>')
//   .css("background-color", lighter.hexString())
//   .appendTo('.box');
//   }
// }

// function darken() {
//   var darker = color.darken(0.1);
//   if (darker.hexString() === "#000000"){

//   } else {
//   $('<div class="bg">' + darker.hexString() + '</div>')
//   .css("background-color", darker.hexString())
//   .appendTo('.box');
//   }
// }


function valuecheck() {
  colorLength = $('#bck-grabber').val().toString().length;
  if (colorLength != 4 && colorLength != 7) {
    $('#bck-grabber').addClass('error');
    $('.title').text("Insert a Color Code below");
  } else {
    $('.title').text("Press Enter to save");
    $('#bck-grabber').removeClass('error');
  }
  if ($('#bck-grabber').val()[0] != "#" ) {
    $('.hexi-text').fadeIn();
  } else {
    $('.hexi-text').fadeOut();
  };
}