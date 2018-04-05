function prueba() {
    document.getElementById("campo").firstChild.data = "Aca deberia aparecer todos los recorridos para esas caracteristicas. ";
}

function oyente(){
  document.getElementById("campo").firstChild.data = "LA CONCHA DE TU MADRE";
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
          zoom: 8
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
    alert("La elegida para movilidad es "+movilidad_valor);


  //Encontrar chequeado tarifa
  var tarifa = document.getElementsByName('tarifa');
  var tarifa_valor;
  for (var i = 0; i < 4; i++){    
      if(tarifa[i].checked){
          tarifa_valor = tarifa[i].value;
      }
  }
    alert("La elegida para tarifa es "+tarifa_valor);


  //Encontrar chequeado categoria
  var categoria = document.getElementsByName('categoria');
  var categoria_valor;
  for (var i = 0; i < 4; i++){    
      if(categoria[i].checked){
          categoria_valor = categoria[i].value;
      }
  }
    alert("La elegida para categoria es "+categoria_valor);


  //Encontrar chequeado categoria
  var duracion = document.getElementsByName('duracion');
  var duracion_valor;
  for (var i = 0; i < 4; i++){    
      if(duracion[i].checked){
          duracion_valor = duracion[i].value;
      }
  }
    alert("La elegida para duracion es "+duracion_valor);
}




function filtrarRecorridos(){
  var xmlhttp= new XMLHttpRequest();
  var url="https://astreiten.github.io/CiudadesTuristicas/bootstrap/js/recorridos.json";
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var elto=myArr.recorridos[0].nombre;
        alert("RESULTADO NUEVO "+elto);
    }
    else{
         document.getElementById("campo").firstChild.data = "Status: " + this.status + "State " + this.readyState;
    }
}
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  


}


