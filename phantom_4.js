//solicito la url desde la consola
//además averiguo cuanto tarda en cargar la página
var page = require('webpage').create();
var system = require('system');
var time = Date.now();

page.open(system.args[1], function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    time = Date.now() - time;
    console.log("Time to load the page: " + time +" milliseconds")
  }
  phantom.exit();
});
