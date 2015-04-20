(function(window){

  Confirmator = function(config){
    return {
      run: function(){
        window.onbeforeunload = function (event) {
    
          window.onbeforeunload = null;
    
          http = new XMLHttpRequest();
          http.open('POST', '/ajax', true);
          http.send('hey=how&somithing=else');
    
          var message = 'Sure you want to leave?';
          if (typeof event == 'undefined') {
            event = window.event;
          }
          if (event) {
            event.returnValue = message;
          }
            return message;
        };
      }
    };
  };

  c = new Confirmator(); 
  c.run(); 

})(window); 
