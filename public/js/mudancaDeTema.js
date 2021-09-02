const background = $(".container-dashboard");
const titulo = $(".dashboard-titulo");
const tabela = $(".tabela-linha");

$(".icon-tema").click(mudancaDeTemaEstoque);

function mudancaDeTemaEstoque() {
  mudandaBackground();
  mudandaTitulo();
  tabela.toggleClass("texto-escuro");
}

function mudancaDeTemaAjuda() {
  mudandaBackground();
  mudandaTitulo();
}

function mudandaBackground() {
  background.toggleClass("container-escuro");
}

function mudandaTitulo() {
  titulo.toggleClass("texto-escuro");
}
