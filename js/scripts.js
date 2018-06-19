$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();

    var system = $("#system").val();
    var work = $("#work").val();
    var project = $("#project").val();
    var result = (+system) + (+work) + (+project);
    if (result <"5" ) {
      $("#c").show()
      $("#php").hide()
      $("#ruby").hide()
    } else if (result >= "8") {
      $("#c").hide()
      $("#php").hide()
      $("#ruby").show()
    } else {
      $("#c").hide()
      $("#php").show()
      $("#ruby").hide()
    }







//     var result = system + work + project;
//       if (result <= 6) {
//         $('#c').show();
// }        else if (result <= 9) {
//           $('#php').show();
// }           else {
//           $('#project').show();

  });
});
