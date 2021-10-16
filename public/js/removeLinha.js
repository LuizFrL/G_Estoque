$(document).on("click", ".exclui", function () {
  var elemento = $(this).parent().parent();
  var id = $(elemento).children()[0];
  var getId = $(id).text();
  elemento.remove();
  deletar(getId);
});

function deletar(getId) {
    var person = {
        id: getId
    }
  $.ajax({
    url: `http://localhost:8000/estoque/${getId}/`,
    type: "DELETE",
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      
    },
    data: JSON.stringify(person)
  });
}
