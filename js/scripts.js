$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var system = parseInt($("#system").val());
    var Work = parseInt($("#work").val());
    var project = parseInt($("#project").val());

    $("#rate").text(quote);
    $("#quote").show()

    event.preventDefault();
  });
});
