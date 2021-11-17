
$(".botao-cadastra").click(getCadastro)

function getCadastro() {
    var email = $(".cadastro-email").val()
    var username = $(".cadastro-username").val()
    var password = $(".cadastro-password").val()

    postCadastro(email, username, password)
    alert("Usuario cadastrado com sucesso!!")
    
}


function postCadastro(email, username, password) {
    var person = {
      email: email,
      username: username,
      password: password
    }
    $.ajax({
        url: "http://127.0.0.1:8000/user/",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        headers: {
          Authorization:
          `Bearer ${localStorage.getItem("token")}`,
        },
        success: function (data) {
            
        },
        data: JSON.stringify(person)
    })
}

