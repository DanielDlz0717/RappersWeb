$(document).ready(function(){
$("#by").click(function(){
	$("#Ad").toggle();
});
$(".incorrect").click(function(){
		$(this).css("color", "red");
});
	$(".correct").click(function(){
		$(this).css("color", "green");
	});



$("#ll").click(function(){
	$("#re").toggle();
});
});
