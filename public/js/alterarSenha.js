$(".botao-altera").click(esconde);
$(document).ready(function () {
  if (localStorage.getItem("username") !== " ") {
    $(".botao-altera").removeClass("container-hidden");  
    $(".botao-altera").removeClass("container-show"); 
    
   
  } else {
    $(".botao-altera").removeClass("container-show");
    $(".botao-altera").addClass("container-hidden");
 }

});

function esconde() {
  $(".container-altera").toggleClass("container-hidden");
}

$(".confirma-senha").click(getNovaSenha)

function getNovaSenha(event) {
  var novaSenha = $(".nova-senha").val()
  var confirma = $(".confirmar-nova-senha").val()
  usuario = localStorage.getItem("username")
  if(novaSenha === confirma) {
    alteraSenha(novaSenha, usuario)
  } else {
    $('#myModalSenhaErro').modal('show');
  }
  
  event.preventDefault()
}

function alteraSenha(novaSenha, usuario) {
  var person = {
    password: novaSenha
  }
  $.ajax({
    url: `http://localhost:8000/user/${usuario}/`,
    type: "PATCH",
    dataType: "json",
    contentType: "application/json",
    headers: {
      Authorization:
        `Bearer ${localStorage.getItem("token")}`,
    },
    success: function (data) {
      $('#myModalSenha').modal('show');
    },
    error: function (data) {
      $('#myModalSenhaErro').modal('show');
    },
    data: JSON.stringify(person)
  });

}