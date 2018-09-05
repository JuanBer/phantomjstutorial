//solicito la url desde la consola
//además averiguo cuanto tarda en cargar la página
var page = require('webpage').create();
var system = require('system');


page.open(system.args[1], function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    var title = page.evaluate(function(){
      return document.title;
    });
    console.log("Webpage Title: " + title +".")
  }
  phantom.exit();
});
