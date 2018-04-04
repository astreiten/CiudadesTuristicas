

$(function() {
    var ajax = new AJAXInteraction("./data/pizzas.json", function(data) {
      
        mostrarPizzas(data);
    });
    ajax.doGet();
});


function mostrarPizzas(data) {
	document.getElementById('campo').firstChild.data= data[0].nombre;
	document.getElementById('campo').firstChild.data= data+"conchad e tu madre";
}