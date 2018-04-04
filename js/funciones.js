function prueba() {
    document.getElementById("campo").firstChild.data = "funciono";
}

function init(){
 document.getElementById("campo").firstChild.data = "hola";
 var xmlhttp= new XMLHttpRequest();
 var url="https://github.com/astreiten/CiudadesTuristicas/blob/master/data/pizzas.json";
 xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    else{
         document.getElementById("campo").firstChild.data = this.status + " MODIFICADO " + this.readyState;
         
    }
}


  xmlhttp.open("GET", url, true);
  
  xmlhttp.send();

}


  function myFunction(arr) {
    
     document.getElementById("campo").firstChild.data = "entre";
    document.getElementById("campo").firstChild.data = arr[0].display;
}

