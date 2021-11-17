$(".botao-adicionar").click(montarLinha);

function montarLinha() {
  var nomeForm = $(".formulario-nome").val();
  var valorFomr = $(".formulario-valor").val();
  var qntForm = $(".formulario-qnt").val();
  var categoria = $(".formulario-cat").val();
  if (nomeForm == 0 || valorFomr == 0 || qntForm == 0) {
    return;
  }  if(localStorage.getItem('username') === "admin") {
    post(nomeForm, valorFomr, qntForm, categoria);
  } else {
    alert("Somente o Administrador pode fazer alterações nas tabelas");
  }
  
}

function limpaForm() {
  $(".formulario-nome").val("");
  $(".formulario-valor").val("");
  $(".formulario-qnt").val("");
}

function post(nome, valor, qnt, categoria) {
  var person = {
    nome: nome,
    categoria: categoria,
    qtd: qnt,
    valor: valor,
  };
  
  $.ajax({
    url: "http://127.0.0.1:8000/estoque/",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    headers: {
      Authorization:
      `Bearer ${localStorage.getItem("token")}`,
    },
    success: function (data) {
      var corpo = $(`.tabela-corpo-${categoria.replace(" ", "_")}`);
      var linha = $("<tr>").addClass("tabela-linha");
      var itemId = $("<td>").addClass("tabela-item").text(`${data.id}`);
      var itemNome = $("<td>").addClass("tabela-item").text(`${nome}`);
      var itemValor = $("<td>").addClass("tabela-item").text(` ${valor} `);
      var itemQnt = $("<td>").addClass("tabela-item").text(`${qnt}`);
      var imagemPincel = $("<img>")
        .attr("src", "../assets/svg/editar-arquivo.png")
        .addClass("edita");
      var imagemLixeira = $("<img>")
        .attr("src", "../assets/svg/lixeira.png")
        .addClass("exclui")
        .attr("alt", "");
        var imagemSalvar = $("<img>")
        .attr("src", "../assets/svg/salvar.png")
        .addClass("salvar")
        .attr("alt", "");

      var itemEditar = $("<td>").addClass("tabela-item");
      var itemExcluir = $("<td>").addClass("tabela-item");
      var itemSalvar = $("<td>").addClass("tabela-item");
      itemEditar.append(imagemPincel);
      itemExcluir.append(imagemLixeira);
      itemSalvar.append(imagemSalvar)
      linha.append(
        itemId,
        itemNome,
        itemValor,
        itemQnt,
        itemEditar,
        itemSalvar,
        itemExcluir
      );
      corpo.prepend(linha);
      $(`.table-${data.categoria.replace(" ", "_")}`).append(corpo)
      limpaForm();
      

    },
    data: JSON.stringify(person),
  });
}