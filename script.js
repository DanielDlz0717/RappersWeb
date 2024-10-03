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
 $("#show").click(function(){
    $("#g").show();
});

 $("#ge").click(function(){
    $("#g2").show();
});

 $("#sh").click(function(){
    $("#s").show();
}); 


$("#ll").click(function(){
	$("#re").toggle();
});
});
