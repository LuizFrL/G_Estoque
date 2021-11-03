$(".botao-autentica").click(autentica);

function autentica(event) {
  var usuario = $(".usuario-login").val();
  var senha = $(".senha-login").val();

  event.preventDefault();
  post(usuario, senha);
}

function post(usuario, senha) {
  getToken(usuario, senha);
  
}
