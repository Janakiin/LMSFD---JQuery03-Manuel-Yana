var x = 0;
var y = 0;
//this snippet gets the coordinates of the mouse
$(document).ready(function() {
	$(document).mousemove(function(event){
		x = event.pageX;
		y = event.pageY;
		//and connects the div with image with them
		$('#moveme').css({"left": x-100, "top" : y-100});
	});

//onclick
	$(document).click(function(){
		//stops the mousemove function
		$(document).off("mousemove");
		//drop down and fading
		$('#moveme').animate({
			top: "+400"
		}, 2000, 'linear');
		$('#moveme img').delay(3000).fadeOut(1000);
		$('#moveme img').fadeIn(2000);
		
		setTimeout(function(){
			$("#stardest").fadeIn(1000)}, 4600);	
		//sets the timeout to fly-away
		setTimeout(function(){ 
			$('#moveme').animate({
			left: "+50",
			top: "-400"
		}, 2000, "linear");
		 }, 6000);

		
		
	});
});

