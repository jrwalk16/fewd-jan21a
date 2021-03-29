var addOnclickHandler = (function(operationId, operation) {
    document.getElementById(operationId).onclick = function() {
      
      var a = parseInt(document.getElementById('A').value)*6;
      var b = parseInt(document.getElementById('B').value);
      document.getElementById('output').innerHTML = operation(a, b);
    };
  });
  
addOnclickHandler('add', function(a, b) { return a + b; });