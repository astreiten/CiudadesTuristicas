var mapa;

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
          center: {lat: 40.6971494, lng: -74.2598712},
          zoom: 10
        });

        mapa=map;

        
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
        var cumplen=new Array();
        var cant=0;
        
        for (var j=0; j<myArr.recorridos.length;j++)
        {
          cumpleMovilidad=chequearMovilidad(myArr.recorridos[j],movilidad_valor);
          cumpleTarifa=chequearTarifa(myArr.recorridos[j],tarifa_valor);
          cumpleCategoria=chequearCategoria(myArr.recorridos[j],categoria_valor);
          cumpleDuracion=chequearDuracion(myArr.recorridos[j],duracion_valor);

          if(cumpleTarifa && cumpleDuracion && cumpleCategoria && cumpleMovilidad)
          {
            cumplen[cant]=myArr.recorridos[j];
            alert("aca hay "+cumplen[cant].nombre);
            cant++;
          }
          else
          {
            //alert("el recorrido NO fue agregado con la nueva logica");
          }

          
        }

        mostrarRecorridos(cumplen);
        
    }
    else{
         document.getElementById("campo").firstChild.data = "Status: " + this.status + "State " + this.readyState;
    }
}
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  document.getElementById("mostrador").innerHTML= "<button> Filtrar recorridos</button>";
  

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

function mostrarRecorridos(cumplen)
{
 
  for (var i=0;i<cumplen.length;i++)
  {
    var str= cumplen[i].nombre;
    var re=cumplen[i];
    var result=str.link("https://www.google.com.ar");
    var botonhijodeputa= '<button id="botonReco" type="button">Click Me!</button>';

    //document.getElementById("botonReco").addEventListener("click",function(){cargarEnMapa(cumplen[i]);},false);
    document.getElementById("mostrador").innerHTML=document.getElementById("mostrador").innerHTML+"<br>"+result+" "+botonhijodeputa;
    document.getElementById("botonReco").addEventListener("click", function(){
    cargarEnMapa(re);
});
  }
}

function cargarEnMapa(reco)
{
  alert("hola"+reco.puntos[0].coordenadas[0]);
  var myLatlng = new google.maps.LatLng(reco.puntos[0].coordenadas[0],reco.puntos[1].coordenadas[1]);
  var marker=new google.maps.Marker({
          position: {lat:  40.6971494, lng: -74.2598712},
          map:mapa,
          title: 'hello world'
        })
}