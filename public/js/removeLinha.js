$(document).on("click", ".exclui", function () {
  if(localStorage.getItem('username') === "admin") {
    var elemento = $(this).parent().parent();
    var id = $(elemento).children()[0];
    var getId = $(id).text();

    deletar(getId, elemento);
  } else {
    alert("Somente o Administrador pode fazer alterações nas tabelas");
  }
});

function deletar(getId, elemento) {
  var person = {
    id: getId,
  };

  $.ajax({
    url: `http://localhost:8000/estoque/${getId}/`,
    type: "DELETE",
    dataType: "json",
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    success: function (data) {
      elemento.remove();
    },
    data: JSON.stringify(person),
  });
}
