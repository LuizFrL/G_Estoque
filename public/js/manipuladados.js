$(".botao-editar").click(ativaForm)
$(".botao-salvar").click(desativaForm)
$(".container-meusdados").on('mouseover', desativaPeloEnter)

function ativaForm(event) {
    event.preventDefault()
    $(".form-dados").prop("disabled", false)
}

function desativaForm(event) {
    event.preventDefault()
    $(".form-dados").prop("disabled", true)
}

function desativaPeloEnter() {
    document.addEventListener('keypress', function(e){
        if(e.which == 13){
            desativaForm(e)
        }
     }, false);
}