//modifico el DOM de la página leída cambiando el fondo a azul.
var page = require('webpage').create();
var system = require('system');

page.open(system.args[1], function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.evaluate(function(){
      document.body.style.background = "blue";
    });
    page.render("pagebackgroundblue.png")
  }
  phantom.exit();
});
