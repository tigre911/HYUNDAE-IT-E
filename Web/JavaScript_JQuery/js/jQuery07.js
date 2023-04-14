

$("li").on("mouseenter", function(){
	console.log("마우스 커서가 위에 있음.")
	$(this).addClass("myStyle");
})


$("li").on("mouseleave", function(){
	console.log("마우스 커서가 위에서 빠져나감.")
	$(this).removeClass("myStyle");
})