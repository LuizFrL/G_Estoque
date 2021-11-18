$(".botao-adicionar").click(montarLinha);

function montarLinha() {
  var nomeForm = $(".formulario-nome").val();
  var valorFomr = $(".formulario-valor").val();
  var qntForm = $(".formulario-qnt").val();
  var categoria = $(".formulario-cat").val();
  if (nomeForm == 0 || valorFomr == 0 || qntForm == 0) {
    return;
  }  if(localStorage.getItem('username') === "admin" || localStorage.getItem('admin') === "true" ) {
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
      if ( !$(`.botao-categoria${categoria.replace(" ", "_")}`).length ) { 
        var botao = document.createElement("button");
          $(botao)
            .addClass("btn")
            .addClass("btn-outline-success")
            .addClass("botao-categoria")
            .addClass(`botao-categoria${categoria.replace(" ", "_")}`)
            .attr("type", "button")
            .attr("data-toggle", "collapse")
            .attr(
              "data-target",
              `#collapseExample${categoria.replace(" ", "_")}`
            )
            .attr("aria-expanded", "true")
            .attr("aria-controls", "collapseExample")
            .text(categoria)
            .click(function () {
              $(".botao-selecionado").removeClass("botao-selecionado");
              $(this).addClass("botao-selecionado");
              $(".formulario-cat").val(categoria);
            });
          $(".botoes-grupo").prepend(botao);

          var collapse = document.createElement("div");
          $(collapse)
            .addClass("collapse")
            .attr("data-parent", "#myGroup")
            .attr("id", `collapseExample${categoria.replace(" ", "_")}`);
          var card = document.createElement("div");
          $(card).addClass("card").addClass("card-body");
          var dashboard = document.createElement("div");
          $(dashboard).addClass("dashboard-tabela");
          var tabela = document.createElement("div");
          $(tabela).addClass("tabela");
          var table = document.createElement("table");
          $(table).addClass("table").addClass("table-hover").addClass("scroll").addClass(`table-${data.categoria.replace(" ", "_")}`)
          var thead = document.createElement("thead");
          $(thead)
            .addClass("table-dark")
            .addClass(`tabela-head-${categoria.replace(" ", "_")}`);
          var tbody = document.createElement("tbody");
          $(tbody).addClass(`tabela-corpo-${categoria.replace(" ", "_")}`);
          $(tbody).addClass("corpo");
          var tr = document.createElement("tr");
          $(tr).addClass("tabela-linha");
          var th1 = document.createElement("th");
          $(th1).addClass("tabela-item").attr("scope", "col").text("ID");
          var th2 = document.createElement("th");
          $(th2).addClass("tabela-item").attr("scope", "col").text("NOME");
          var th3 = document.createElement("th");
          $(th3).addClass("tabela-item").attr("scope", "col").text("VALOR");
          var th4 = document.createElement("th");
          $(th4)
            .addClass("tabela-item")
            .attr("scope", "col")
            .text("QUANTIDADE DISPONÍVEL");
          var th5 = document.createElement("th");
          $(th5).addClass("tabela-item").attr("scope", "col").text("EDITAR");
          var th6 = document.createElement("th");
          $(th6).addClass("tabela-item").attr("scope", "col").text("EXCLUIR");
          var th7 = document.createElement("th");
          $(th7).addClass("tabela-item").attr("scope", "col").text("SALVAR");
          $(".botoes-grupo").append(collapse);
          $(".formulario-cat").val(data.categoria);

          tr.append(th1, th2, th3, th4, th5, th7, th6);
          thead.append(tr);
          table.append(thead, tbody);
          tabela.append(table);
          dashboard.append(tabela);
          card.append(dashboard);
          collapse.append(card);
        }
        
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
    error: function(erro) {
      console.log(erro)
    },
    data: JSON.stringify(person),
  });
}