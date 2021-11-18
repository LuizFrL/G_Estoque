
$(".botao-cadastra").click(getCadastro)


function getCadastro() {
    var email = $(".cadastro-email").val()
    var username = $(".cadastro-username").val()
    var password = $(".cadastro-password").val()
    var checkbox = document.getElementById("teste")
    if(checkbox.checked) {
      var is_superuser = true
      localStorage.setItem("admin","true")
  } else {
    var is_superuser = false
    localStorage.setItem("admin","false")
  }

    postCadastro(email, username, password, is_superuser)
    alert("Usuario cadastrado com sucesso!!")
}


function postCadastro(email, username, password, is_superuser) {
    var person = {
      email: email,
      username: username,
      password: password,
      is_superuser: is_superuser,
    }
    $.ajax({
        url: "http://127.0.0.1:8000/user/",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
          Authorization:
          `Bearer ${localStorage.getItem("token")}`
        },
        success: function (data) {
            
        },
        data: JSON.stringify(person)
    })
}

