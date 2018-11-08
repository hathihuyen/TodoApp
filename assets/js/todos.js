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
});

//Add new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		if (newTodo === "") {
			$("#message").val("There is no task to add!");
		} else {
			//create a new li and add to ul
			$("ul").append("<li><span>X</span> " + newTodo + "</li>");
		}		
	}
});