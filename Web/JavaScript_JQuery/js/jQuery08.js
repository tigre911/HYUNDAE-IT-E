
function myFunc(){
	//AJAX 호출
	// URL, method, parameter, ...
	// 이런 호출정보들을 Javascript 객체로 만든다
	// Java는 객체의 literal이 없다
	// JavaScript는 객체의 literal이 있다.
	// 자바스크립트의 객체 : {}
	let obj = {
		url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
		type : 'GET',
		data : {
			key : '9b73816cae03b4945f94d0c3289133a0',
			targetDt : '20230413'
		},
		success : function(result){
			// 성공적으로 응답이 수신되면 이 콜백 함수가 호출됩니다.
			alert('성공')
			console.log(result)
		},
		error: function() {
        	alert('실패')
    }
		
	}
	
	$.ajax(obj);
}