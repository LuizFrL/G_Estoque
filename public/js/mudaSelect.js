$(".botao-pesquisar").click(pega);

function pega() {
    
    
$(".botoes-grupo").remove()

  var teste = $(".botao-pesquisa").val();
  var novaTabela = document.createElement("div")
  $(novaTabela).addClass("botoes-grupo").attr("id", "myGroup")
  

  criarTabela(`nome__contains=${teste}`);
  $(".container-dashboard").append(novaTabela)
}
