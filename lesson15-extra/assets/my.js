var btnTest = document.getElementById("test");

function test () {
	var isRegistred = Math.random() >= 0.5;
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	if( age < 19){
		alert("Иди домой недоросль!!!");
	}else if(!isRegistred){
		alert("Подпишись на рассылку сначала, а потом на кнопки нажимай!!!");
	}else{
		alert('Так уж и быть. Доступ к сайту разрешен!');
		console.log('Вы допущены, но это секрет. Тсс!!')
	}
}

btnTest.addEventListener("click", test);

