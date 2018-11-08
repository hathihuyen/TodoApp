//Check off Specific Todos By Clicking
$("li").click(function(){
	if ($(this).css("color") == "rgb(128, 128, 128)"){ //if the text is gray
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	} else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}	
});

//CLick on X to delete Todo
$("span").click(function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove(); //this $(this) equal to $(this).parent().
	});
	//stop using the parent layout events
	event.stopPropagation();
})