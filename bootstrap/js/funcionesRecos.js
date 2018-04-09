$(function() {
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyentePaginaRecorrido(){
	var texto= document.getElementById("paginaRecorrido").value;
	localStorage.setItem("comentario",texto);
	obtenerInformacionJSON();
}

function obtenerInformacionJSON(){
	
    alert("kkk");
  var xmlhttp = new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var nombre = myArr.recorridos[2].nombre;
    	var stringNombre= '<p><h1><strong>This line rendered as bold text.</strong></h1>';

    document.getElementById("nombre_recorrido").innerHTML= stringNombre;

    }else
    	
	}

	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
}