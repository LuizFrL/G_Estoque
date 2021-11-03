$(document).ready(function () {
  $(".spinner-div").addClass("spinner-show");
});

if (localStorage.getItem('token')) {
  setTimeout( function() {
    $(criarTabela(""));
    $(".spinner-div").removeClass("spinner-show");
    $(".spinner-div").addClass("spinner-hidden");
    }
    , 4000 );
}

function criarTabela(query) {
  $.ajax({
    type: "GET",
    url: `http://127.0.0.1:8000/estoque/?${query}&ordering=-categoria,nome`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    success: function (data) {
      var categorias = [];
      data.forEach((data) => {
        if (!categorias.includes(data.categoria)) {
          categorias.push(data.categoria);
          var botao = document.createElement("button");
          $(botao)
            .addClass("btn")
            .addClass("btn-outline-success")
            .addClass("botao-categoria")

            .attr("type", "button")
            .attr("data-toggle", "collapse")
            .attr(
              "data-target",
              `#collapseExample${data.categoria.replace(" ", "_")}`
            )
            .attr("aria-expanded", "true")
            .attr("aria-controls", "collapseExample")
            .text(data.categoria)
            .click(function () {
              $(".botao-selecionado").removeClass("botao-selecionado");
              $(this).addClass("botao-selecionado");
              $(".formulario-cat").val(data.categoria);
            });
          $(".botoes-grupo").prepend(botao);
          var collapse = document.createElement("div");
          $(collapse)
            .addClass("collapse")
            .attr("data-parent", "#myGroup")
            .attr("id", `collapseExample${data.categoria.replace(" ", "_")}`);
          var card = document.createElement("div");
          $(card).addClass("card").addClass("card-body");
          var dashboard = document.createElement("div");
          $(dashboard).addClass("dashboard-tabela");
          var tabela = document.createElement("div");
          $(tabela).addClass("tabela");
          var table = document.createElement("table");
          $(table).addClass("table").addClass("table-hover").addClass("scroll");
          var thead = document.createElement("thead");
          $(thead)
            .addClass("table-dark")
            .addClass(`tabela-head-${data.categoria.replace(" ", "_")}`);
          var tbody = document.createElement("tbody");
          $(tbody).addClass(`tabela-corpo-${data.categoria.replace(" ", "_")}`);
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
      });
      data.forEach((data) => {
        var tr = document.createElement("tr");
        $(tr).addClass("tabela-linha");
        var td1 = document.createElement("td");
        $(td1).addClass("tabela-item").text(data.id);
        var td2 = document.createElement("td");
        $(td2).addClass("tabela-item").text(data.nome);
        var td3 = document.createElement("td");
        $(td3).addClass("tabela-item").text(`${data.valor}`);
        var td4 = document.createElement("td");
        $(td4).addClass("tabela-item").text(`${data.qtd}`);
        var td5 = document.createElement("td");
        $(td5).addClass("tabela-item");
        var imgEdit = document.createElement("img");
        $(imgEdit)
          .addClass("edita")
          .attr("src", "../assets/svg/editar-arquivo.png")
          .attr("alt", " ");
        var td6 = document.createElement("td");
        $(td6).addClass("tabela-item");
        var imgExclui = document.createElement("img");
        $(imgExclui)
          .addClass("exclui")
          .attr("src", "../assets/svg/lixeira.png")
          .attr("alt", " ");
        var td7 = document.createElement("td");
        $(td7).addClass("tabela-item");
        var imgSalvar = document.createElement("img");
        $(imgSalvar)
          .addClass("salvar")
          .attr("src", "../assets/svg/salvar.png")
          .attr("alt", " ");
        td5.append(imgEdit);
        td6.append(imgExclui);
        td7.append(imgSalvar);
        tr.append(td1, td2, td3, td4, td5, td7, td6);
        $(`.tabela-corpo-${data.categoria.replace(" ", "_")}`).append(tr);
      });
    },
  });
}
