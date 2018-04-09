$(function() {
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
});

function oyentePaginaRecorrido(){
	alert("aca entre");
	var texto= document.getElementById("paginaRecorrido").value;
	alert(texto);
	localStorage.setItem("comentario",texto);

	obtenerInformacionJSON();
}

function obtenerInformacionJSON(){
	alert("pq no entras");
  var xmlhttp = new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  	alert("pq no entras2");
  xmlhttp.onreadystatechange = function() {
  		alert("pq no entras3");
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var nombre = myArr.recorridos[2].nombre;

    }else
    	alert("state: "+this.readyState+" status: "+this.status);
        
	}

	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
}