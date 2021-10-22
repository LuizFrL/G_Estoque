var botaoCat = $(".botao-categoria")
var texto = botaoCat.text()
$(botaoCat).click(mudaCategoria(texto))



function mudaCategoria(texto) {
    $("#select :selected").val(texto)
}


