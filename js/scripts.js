$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var system = parseInt($("#system").val());
    var work = parseInt($("#work").val());
    var project = parseInt($("#project").val());

    var result = system + work + project;
    $("#submit").text(result);


  });
});
