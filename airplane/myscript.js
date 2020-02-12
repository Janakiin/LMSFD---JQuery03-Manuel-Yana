var x = 0;
var y = 0;

$(document).ready(function() {
	$("body").mousemove(function(event){
		x = event.pageX;
		y = event.pageY;
		console.log(x,y);
		$('#moveme').css({"left": x-100, "top" : y-100});
	});
});

