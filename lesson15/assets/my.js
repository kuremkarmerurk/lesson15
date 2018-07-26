var container = document.getElementById("list");
var btnDel = document.getElementById("btn2");
var btnNew = document.getElementById("btn1");
var newElText = "Задача №";
var newElNumber = 2;

function newEl () {
	var node = document.createElement("LI");	
  var textnode = document.createTextNode(newElText + newElNumber);
	node.className = "item";
  node.appendChild(textnode);
  newElNumber++;
  container.appendChild(node); 
}

function delEl () {
	var lastNode = container.lastElementChild;
	if(lastNode){
		container.removeChild(lastNode);
		newElNumber--;
	} else {
		alert("Хорош на кнопку жать!!! Уже все удалено.")
	}	
}


	btnNew.addEventListener("click", newEl);
	btnDel.addEventListener("click", delEl);


