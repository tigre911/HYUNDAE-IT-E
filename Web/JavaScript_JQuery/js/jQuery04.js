function myArray(){
	//모든 li를 찾아서 화면에 내용을 출력한다.
	/* alert($("li").text())*/
	$("li").each(function (idx, item){
		//idx : index 번호
		//item : 선택된 문서 객체
		console.log(idx + " : " + $(item).text());
	})
}

function myChange(){
	$("div > span").text($("select > option:selected").text())
	//옵션에서 선택된 값 : $("select > option:selected").text()
}


function myFunc(){
	console.log($("#apple").text())
	console.log($("#apple + li").text())
	$("ul > li.myList").text("공습경보!!")
	
	$("[type=text]").attr("size", 40)
	console.log($("ol > li:first").text())
	console.log($("ol > li:last").text())
	console.log($("ol > li:eq(1)").text())
	//console.log($("li.myList:contains('호랑이')").text())	
}