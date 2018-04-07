function prueba() {
    document.getElementById("campo").firstChild.data = "Aca deberia aparecer todos los recorridos para esas caracteristicas. ";
}

function oyente(){
  initMap();
}

function init(){
 document.getElementById("campo").firstChild.data = "hola";
 var xmlhttp= new XMLHttpRequest();
 var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/pizzas.json";


 xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    else{
         document.getElementById("campo").firstChild.data = "Status: " + this.status + "State " + this.readyState;
    }
}

  
  xmlhttp.open("GET", url, true);

  xmlhttp.send();

}


  function myFunction(arr) {
    
     document.getElementById("campo").firstChild.data = "entre a la nueva version";
      document.getElementById("campo").firstChild.data = arr.prueba;
   
}

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById("campo"), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
      }

function encontrarChequeado(){
  //Encontrar chequeado movilidad
  var movilidad = document.getElementsByName('movilidad');
  var movilidad_valor;
  for (var i = 0; i < 4; i++){    
      if(movilidad[i].checked){
          movilidad_valor = movilidad[i].value;
      }
  }


  //Encontrar chequeado tarifa
  var tarifa = document.getElementsByName('tarifa');
  var tarifa_valor;
  for (var i = 0; i < 4; i++){    
      if(tarifa[i].checked){
          tarifa_valor = tarifa[i].value;
      }
  }


  //Encontrar chequeado categoria
  var categoria = document.getElementsByName('categoria');
  var categoria_valor;
  for (var i = 0; i < 4; i++){    
      if(categoria[i].checked){
          categoria_valor = categoria[i].value;
      }
  }


  //Encontrar chequeado categoria
  var duracion = document.getElementsByName('duracion');
  var duracion_valor;
  for (var i = 0; i < 4; i++){    
      if(duracion[i].checked){
          duracion_valor = duracion[i].value;
      }
  }

    filtrarRecorridos(movilidad_valor, tarifa_valor, categoria_valor, duracion_valor);
}




function filtrarRecorridos(movilidad_valor, tarifa_valor, categoria_valor, duracion_valor){
  var xmlhttp = new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var elto=myArr.recorridos[0].nombre;
        alert("RESULTADO NUEVO "+elto);
       
        alert("La dataaaa es "+myArr.recorridos.length);
        var cumpleMovi=false;
        var cumpleTari=false;
        var cumpleCat=false;
        var cumpleDur=false;
        var bol=myArr.recorridos[0].tarifa < tarifa_valor;
 	if(bol){
 		cumpleTari=true;
 		alert(tarifa_valor+" "+myArr.recorridos[0].tarifa);
 	}
  	//cumpleMovi=movilidad_valor<=recorridos[i].tarifa;
  	if(cumpleTari){
  		alert("el recorrido cumple");
  	}
  	else{
	alert("el recorrido no cumple");
  	}

  
        mostrarRecorridos();
    }
    else{
         document.getElementById("campo").firstChild.data = "Status: " + this.status + "State " + this.readyState;
    }
}
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  

}

function mostrarRecorridos() {
	
}
