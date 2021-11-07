$(document).ready(function () {
  if(localStorage.getItem('username') === "admin") {
    $(".container-registrar").removeClass("container-hidden").addClass("container-show")
  } else {
    $(".container-registrar").removeClass("container-show").addClass("container-hidden")
  }
});


$(".botao-autentica").click(autentica);

function autentica(event) {
  var username = $(".usuario-login").val();
  var password = $(".senha-login").val();

  event.preventDefault();
  post(username, password);
  
  location.reload();
}

function post(username, password) {
  getToken(username, password);
  localStorage.setItem("username", `${username}`)
  
}

