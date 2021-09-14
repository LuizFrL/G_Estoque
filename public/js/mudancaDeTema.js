const background = $(".container-dashboard");
const titulo = $(".dashboard-titulo");
const tabela = $(".table");
const dadosTabela = $(".form-texto")
const botaoEditar = $(".botao-editar")
const botaoCategoria = $(".botao-categoria")
const tabelaEscura = $(".card")



$(document).on("click", ".icon-tema", function() {
  mudancaDeTema()
})

function mudancaDeTema() {
  mudandaBackground();
  mudandaTitulo();
  tabela.toggleClass("texto-escuro");
  dadosTabela.toggleClass("texto-escuro")
  botaoEditar.toggleClass("texto-escuro")
  botaoCategoria.toggleClass("texto-escuro")
}

function mudancaDeTemaAjuda() {
  mudandaBackground();
  mudandaTitulo();
}

function mudandaBackground() {
  background.toggleClass("container-escuro");
  tabelaEscura.toggleClass("container-escuro")
}

function mudandaTitulo() {
  titulo.toggleClass("texto-escuro");
}

