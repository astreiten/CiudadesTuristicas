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
        var map = new google.maps.Map(document.getElementById("campo"), { //PONERLE CAMPOOOOOOOOO 
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
        
        var cumpleMovilidad=false;
        var cumpleTarifa=false;
        var cumpleCategoria=false;
        var cumpleDuracion=false;
        
        for (var j=0; j<myArr.recorridos.length;j++)
        {
          cumpleMovilidad=chequearMovilidad(myArr.recorridos[j],movilidad_valor);
          cumpleTarifa=chequearTarifa(myArr.recorridos[j],tarifa_valor);
          cumpleCategoria=chequearCategoria(myArr.recorridos[j],categoria_valor);
          cumpleDuracion=chequearDuracion(myArr.recorridos[j],duracion_valor);

          if(cumpleTarifa && cumpleDuracion && cumpleCategoria && cumpleMovilidad)
          {
            alert("el recorrido fue agregado con la nueva logica");
          }
          else
          {
            alert("el recorrido NO fue agregado con la nueva logica");
          }

          cumpleMovilidad=false;
          cumpleTarifa=false;
          cumpleCategoria=false;
          cumpleDuracion=false;
        }
        
    }
    else{
         document.getElementById("campo").firstChild.data = "Status: " + this.status + "State " + this.readyState;
    }
}
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  

}

function chequearMovilidad(recorrido,movilidad_valor)
{
  for (var i=0; i<recorrido.apto.length ; i ++){
    if (recorrido.apto[i] == movilidad_valor){
     return true;
    }
  }
  return false;
}

function chequearCategoria(recorrido,categoria_valor)
{
  return categoria_valor == recorrido.categoria;
}

function chequearDuracion(recorrido,duracion_valor)
{
  return duracion_valor >= recorrido.tiempo;
}

function chequearTarifa(recorrido,tarifa_valor)
{
  return tarifa_valor >= recorrido.tarifa;
}