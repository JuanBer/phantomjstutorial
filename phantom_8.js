var page = require('webpage').create();
var system = require('system');

page.open(system.args[1],function(status)){
  //agregar librería de javascrit
  page.includeJs("https://code.jquery.com/jquery-3.3.1.min.js",function(){
    page.evaluate(function(){
      $("body").css("background","red");
      });
    page.render("fondorojo.png");
    phantom.exit();
  });
});
