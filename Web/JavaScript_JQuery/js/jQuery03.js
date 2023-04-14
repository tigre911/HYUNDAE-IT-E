/* 아이디 선택자 */
function myFunc01() {
	$("#lee").remove();
}

/* 태그 선택자 */
function myFunc02() {
/*	let result =  $("h1").text();
	console.log(result);
*/
	$("h1").text("공습경보!! 공습경보!!");
}

/* 클래스 선택자 */
function myFunc03() {
	$(".myStyle").css("background-color" , "red")
}

/* 자식, 후손 선택자 */
function myFunc04() {
	/*자식 선택자*/
	$("ol > li").css("color" , "blue")
	/*후손 선택자*/
	$("div li").css("color" , "green")
}

/* 동위 선택자 */
function myFunc05() {
	/* 서울 다음에 있는 li의 텍스트가 나옴 */
	//alert($("#seoul + li").text())
	/* 서울 다음에 있는 li들의 텍스트를 숨김 */
	$("#seoul ~ li").hide()
}

/* 속성 선택자 */
function myFunc06() {
	alert($("[type=text]").val())
}