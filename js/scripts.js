$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var system = parseInt($("#system").val());
    var work = parseInt($("#work").val());
    var project = parseInt($("#project").val());

    var result = system + work + project;
      if (result <= 6) {
        $('#c').show();
}        else if (result <=9) {
          $('#php').show();
}           else {
          $('#project').show();
}







  });
