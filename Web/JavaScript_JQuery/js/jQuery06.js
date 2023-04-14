
//jQuery 에서 event를 처리하는 기본적인 방법은 on()	을 사용

/*
$("h1").on("click", function() {
	alert("clickkkk")
})
*/

$("li:last").on("click", function(){
	alert($(this).text())
})

function myFunc01(){
	console.log("myFunc01 작동")
	//현재 클릭된 element의 text()를 이용해서 글자를 가져오고 싶어요
	// this => 현재 이벤트가 발생된 element에 대한 문서객체
	alert($(this).text())
}

