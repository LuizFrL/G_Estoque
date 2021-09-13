$(".edita").click(editaLinha)


function editaLinha() {
    var botaoEditar = $(event.target)
    var linhaASerEditar = botaoEditar.parent().parent()
   
    linhaASerEditar.attr('contenteditable',$(this).attr('contenteditable')==='true'?'false':'true' )
}