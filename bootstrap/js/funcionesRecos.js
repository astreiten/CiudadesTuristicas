$(function() {
  //alert("funciona");
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyenteTUR(){
	
	//document.getElementById("exa").value="prueba";
	var texto= document.getElementById("exa").value;
	alert(texto);
	localStorage.setItem("comentario",texto);
}