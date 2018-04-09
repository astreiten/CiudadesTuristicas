$(function() {
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyentePaginaRecorrido(){
	var texto= document.getElementById("paginaRecorrido").value;
	alert(texto);
	localStorage.setItem("comentario",texto);
}