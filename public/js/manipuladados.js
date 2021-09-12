$(".botao-editar").click(ativaForm)
$(".botao-salvar").click(desativaForm)


function ativaForm(event) {
    event.preventDefault()
    $(".form-dados").prop("disabled", false)
}

function desativaForm(event) {
    event.preventDefault()
    $(".form-dados").prop("disabled", true)
}