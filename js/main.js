(function(window){
window.onbeforeunload = function (event) {
  http = new XMLHttpRequest();
  http.open('POST', '/ajax', true); 
  http.send('hey=how&pow=woowza'); 
  
  var message = 'Sure you want to leave?';
  if (typeof event == 'undefined') {
    event = window.event;
  }
  if (event) {
    event.returnValue = message;
  }
  return message;
}
})(window); 
