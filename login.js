var loginbtn = document.querySelector("#loginbtn");
var username = document.querySelector("#username");
var password = document.querySelector("#password");

loginbtn.addEventListener('click', function () {
	console.log(username.value);
   if(username.value !=="user0115" || password.value!=="answerislove"){
	   alert("請輸入正確的帳號或密碼");
   } else {
	window.location = "https://ruila.github.io/game/ready.html"
   }
   
});