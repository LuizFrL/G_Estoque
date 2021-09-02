
$(".botao-ajuda").click(montarLinha);

var cont = 6;

function novaLinha(nome, valor, qnt) {
  cont += 1
  var corpo = $(".tabela-corpo")
  var linha = $("<tr>").addClass("tabela-linha")
  var itemId = $("<td>").addClass("tabela-item").text(`${cont}`)
  var itemNome = $("<td>").addClass("tabela-item").text(`${nome}`)
  var itemValor = $("<td>").addClass("tabela-item").text(`R$ ${valor},00 `)
  var itemQnt = $("<td>").addClass("tabela-item").text(`${qnt} Unidades`)
  linha.append(itemId ,itemNome, itemValor, itemQnt)
  corpo.append(linha)
}

function montarLinha() {
  var nomeForm = $(".formulario-nome").val();
  var valorFomr = $(".formulario-valor").val();
  var qntForm = $(".formulario-qnt").val();
  if(nomeForm == 0 || valorFomr == 0 || qntForm == 0) {
    return
  } else {
    novaLinha(nomeForm, valorFomr, qntForm)
  }
 
}
