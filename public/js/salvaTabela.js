$(".botao-salvar").click(salvaTabela)
$(".table").on('mouseover', salvaTabelaPeloEnter)

function salvaTabela() {

    $(".tabela-linha").removeAttr("contenteditable")
    
}

function salvaTabelaPeloEnter() {
    document.addEventListener('keypress', function(e){
        if(e.which == 13){
            salvaTabela()
        }
     }, false);
}