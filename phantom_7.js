//modifico el DOM de la página leída cambiando el fondo a azul.
var page = require('webpage').create();
var system = require('system');

page.open(system.args[1], function(status) {
  console.log("Status: " + status);
  //con esta funcion lo que se imprima en la consola se ve en el
  //intérprete de comandos
page.onConsoleMessage = function(message){
  console.log(message);
}

  if(status === "success") {
    page.evaluate(function(){
      document.body.style.background = "blue";
      //este mensaje se observa en la consola del navegador
      console.log("Hola, un mensaje")
    });
    page.render("pagebackgroundblue.png")
  }
  phantom.exit();
});
