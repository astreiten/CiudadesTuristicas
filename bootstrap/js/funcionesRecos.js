$(function() {
  //alert("funciona");
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyentePaginaRecorrido(){
	
	alert("hola");
	//document.getElementById("exa").value="prueba";
	var texto= document.getElementById("paginaRecorrido").value;
	alert(texto);
	localStorage.setItem("comentario",texto);
}