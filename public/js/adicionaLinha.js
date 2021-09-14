
$(".botao-ajuda").click(montarLinha);

var cont = 15;

function novaLinha(nome, valor, qnt, categoria) {
  cont += 1
  var corpo = $(`.tabela-corpo-${categoria}`)
  var linha = $("<tr>").addClass("tabela-linha")
  var itemId = $("<td>").addClass("tabela-item").text(`${cont}`)
  var itemNome = $("<td>").addClass("tabela-item").text(`${nome}`)
  var itemValor = $("<td>").addClass("tabela-item").text(`R$ ${valor},00 `)
  var itemQnt = $("<td>").addClass("tabela-item").text(`${qnt} Unidades`)
  var imagemPincel = $("<img>").attr("src", "../assets/svg/editar-arquivo.png").addClass("edita")
  var imagemLixeira = $("<img>").attr("src", "../assets/svg/lixeira.png").addClass("exclui").attr("alt", "")
  var itemEditar = $("<td>").addClass("tabela-item")
  var itemExcluir = $("<td>").addClass("tabela-item")
  itemEditar.append(imagemPincel)
  itemExcluir.append(imagemLixeira)
  linha.append(itemId ,itemNome, itemValor, itemQnt, itemEditar, itemExcluir)
  corpo.append(linha)
  
}

function montarLinha() {
  var nomeForm = $(".formulario-nome").val();
  var valorFomr = $(".formulario-valor").val();
  var qntForm = $(".formulario-qnt").val();
  var categoria = $("#select :selected").text()
  
  if(nomeForm == 0 || valorFomr == 0 || qntForm == 0) {
    return
  } else {
    novaLinha(nomeForm, valorFomr, qntForm, categoria)
 
  }
 
}
