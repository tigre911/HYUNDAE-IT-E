function myFunc(){
	console.log("작동합니다.")
	//1. css()를 이용하면 style을 지정할 수 있다.
	//	사용하기도 불편하고 성능도 좋지않다
	//	그래서 class(style)을 추가하는 다른 method를 이용한다.
	//$("ul > li:eq(1)").addClass("myStyle")
	//2. empty()는 해당 element는 삭제하지 않고
	//	후손만 싹 다 제거하는 method
	//$("div").empty
	
	// 지금까지는 모두 다 기존에 있는 element를 찾아서 제어하는 방식
	// 이번에는 새로운 element를 만들어서 화면에 추가하려면 어떻게 하나?
	let li = $("<li></li>").text("김연아").attr("id", "kim")	
	//<li id="kim">김연아</li>
/*
	// 이제 화면에 붙이자
	// 화면에 붙일 때는 4가지 방식이 있다
	// 1. 자식으로 맨 뒤에 붙이는 방식
	//$("ul").append(li)
	*/
	// 2. 자식으로 맨 앞에 붙이는 방식
	//$("ul").prepend(li)
	// 3. 형제로 자신의 앞에 붙일 수 있다.
	$("li:last").before(li)
	// 4. 형제로 자신의 뒤에 붙일 수 있다.
	$("li:last").after(li)
}