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


