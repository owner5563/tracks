$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();

    var system = $("#system").val();
    var work = $("#work").val();
    var project = $("#project").val();
    var result = (+system) + (+work) + (+project);
    if (result <"5" ) {
      alert("take a track with C#")
    } else if (result >= "8") {
      alert("take a track with ruby")
    } else {
      alert("take a track with php")
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
