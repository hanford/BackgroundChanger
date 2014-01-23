$(document).ready(function(){

	$("#bck-grabber").keyup(function(){
		var background = $("#bck-grabber").val();
		$(".background").css("background-color", background);
	});
});