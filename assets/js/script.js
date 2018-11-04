$(document).ready(function(){
	
	if ( $(window).width() > 1024){ 
	console.log("didelis");
	$(".item").hover(function() {
    $(this).siblings().toggleClass("item--smaller");
		 $(this).toggleClass("item--wider");
}, 
   
		
);

	}

});
	
	

