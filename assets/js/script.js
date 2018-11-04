$(document).ready(function(){
	
	$(".item").hover(function() {
    $(this).siblings().toggleClass("item--smaller");
		 $(this).toggleClass("item--wider");
}, 
   
		
);

});

