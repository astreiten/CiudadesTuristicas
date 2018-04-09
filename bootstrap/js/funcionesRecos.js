$(function() {
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyentePaginaRecorrido(){
	var texto= document.getElementById("paginaRecorrido").value;
	alert(texto+"djs");
	alert("kekeke");
	localStorage.setItem("comentario",texto);

	obtenerInformacionJSON();
}

function obtenerInformacionJSON(){
	alert("puto");
  var xmlhttp = new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        alert(myArr.recorridos[2].nombre);

    }
        
}