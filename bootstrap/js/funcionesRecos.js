$(function() {
  document.getElementById("eti").firstChild.data = localStorage.getItem("comentario");
  alert("entre a tu pagina");

});

function oyentePaginaRecorrido(){
	var texto= document.getElementById("paginaRecorrido").value;
	localStorage.setItem("comentario",texto);
	obtenerInformacionJSON();
}

function obtenerInformacionJSON(){
  var xmlhttp = new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        obtenerDatosRecorridos(myArr);

   	 }
}

	  xmlhttp.open("GET", url, true);
	  xmlhttp.send();
}

function obtenerDatosRecorridos(myArr){
	//Obtengo nombre
	var nombre = myArr.recorridos[2].nombre;
    var stringNombre= "<p><h1><strong>"+nombre+"</strong></h1>";
	document.getElementById("nombre_recorrido").innerHTML= stringNombre;

	//Obtengo tarifa
	var tarifa = myArr.recorridos[2].tarifa;
	document.getElementById("tarifa_recorrido").innerHTML = document.getElementById("tarifa_recorrido").innerHTML +" U$ "+tarifa;

	//Obtengo categoria
	var categoria = myArr.recorridos[2].categoria;
	document.getElementById("categoria_recorrido").innerHTML = document.getElementById("categoria_recorrido").innerHTML +" "+categoria;

	//Obtengo tiempo estimado
	var tiempo = myArr.recorridos[2].tiempo;
	document.getElementById("tiempo_recorrido").innerHTML = document.getElementById("tiempo_recorrido").innerHTML +" "+tiempo+" horas";

	//Obtengo los puntos
	for (var i =0 ; i < myArr.recorridos[2].puntos.length; i++)
		obtenerPuntos(myArr, i);

/*	var imagen = myArr.recorridos[2].punto[0].imagen;
	document.getElementById("imagen_punto0").innerHTML.src =  "https://cdn.viewing.nyc/assets/media/cf514f22475403ee4d373553c7c01e6a/elements/6ffbc7b650ba173552fae172b4b6190e/xl/f500fa04-9414-46cc-8828-5f9853dfac61_2x.jpg";
*/	
}

function obtenerPuntos(myArr, i){
	//Punto 1
	var punto = myArr.recorridos[2].puntos[i].nombre;
	document.getElementById("titulo_punto"+i).innerHTML = punto;
	

	var direccionPunto = myArr.recorridos[2].puntos[i].direccion;
	document.getElementById("direccion_punto"+i).innerHTML = direccionPunto;
	


}

function borrarContenido(){
document.getElementById("paginaRecorrido").innerHTML = "";
	

}