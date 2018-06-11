$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();

    var system = $("#system").val();
    var work = $("work").val();
    var project = $("project").val();
    var result = system + work + project;
    if (result <= 3 ) {
      alert("Take a C# course")
    }else if (result > 4 && result < 6) {
      alert("take a php course")
    } else {
      alert("take a ruby course")
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
