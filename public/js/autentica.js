
$(document).ready(function () {
  if (localStorage.getItem("admin") === "true") {
    $(".container-registrar")
      .removeClass("container-hidden")
      .addClass("container-show");
  } else {
    $(".container-registrar")
      .removeClass("container-show")
      .addClass("container-hidden");
  }
});

$(document).ready(function () {
  if (localStorage.getItem("username") !== " ") {
    $(".botao-autentica").addClass("container-hidden");
    $(".container-login").addClass("container-hidden");
    criaBemVindo();
  } else {
    $(".botao-logout").addClass("container-hidden");
  }
});

$(".botao-autentica").click(autentica);
$(".botao-logout").click(logout);

function autentica(event) {
  var username = $(".usuario-login").val();
  var password = $(".senha-login").val();
  
    post(username, password);


}

function post(username, password) {
  
  getToken(username, password);
  
  setTimeout( function() {
    redirecionaEstoque()
    }
    , 3000 );
  
  
}

function logout() {
  localStorage.setItem("username", ` `);
  localStorage.setItem("token", ` `);
  localStorage.setItem("admin", "false");
  $(".botao-altera").addClass("container-hidden");
  location.reload();
  
}

function criaBemVindo() {
  var bemVindo = document.createElement("h1");
  $(bemVindo)
    .text(`Seja bem vindo ${localStorage.getItem("username")} ( ͡~ ͜ʖ ͡°)`)
    .addClass("bemVindo");
  $(".login").append(bemVindo);
}

function redirecionaEstoque() {
  window.location.href = "http://localhost:3002/estoque"
}


