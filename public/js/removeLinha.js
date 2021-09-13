$(".exclui").click(excluiLinha) 
    
function excluiLinha() {
    var botaoExclui = $(event.target)
    var linhaASerRemovida = botaoExclui.parent().parent()
    linhaASerRemovida.remove()
}