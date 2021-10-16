$(document).on('click', '.salvar', function(){
    var elemento = $(this).parent().parent()
    $(elemento).removeAttr("contenteditable")
    var id = $(elemento).children()[0];
    var getId = $(id).text();
    var nome = $(elemento).children()[1];
    var getNome = $(nome).text()
    var valor = $(elemento).children()[2];
    var getValor = $(valor).text()
    var qtd = $(elemento).children()[3];
    var getQtd = $(qtd).text()
    editar(getId, getNome, getQtd, getValor)
    
});
function editar(getId, getNome, getQtd, getValor) {
    var person = {
        
        nome: getNome,
        qtd: getQtd,
        valor: getValor
    }
  $.ajax({
    url: `http://localhost:8000/estoque/${getId}/`,
    type: "PATCH",
    dataType: "json",
    contentType: "application/json",
    success: function (data) {
      console.log(data);
    },
    data: JSON.stringify(person)
  });
}


