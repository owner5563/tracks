$(document).ready(function() {
  $("#submit").click(function() {
    var system = parseInt($("#system").val());
      if (system === 1) {
        $('#c').show() ;
      }else if (system === 2) {
        $('#php').show() ;
      }else {
        $('#ruby').show() ;
      }
event.preventDefault();





//     var result = system + work + project;
//       if (result <= 6) {
//         $('#c').show();
// }        else if (result <= 9) {
//           $('#php').show();
// }           else {
//           $('#project').show();

  });
});
