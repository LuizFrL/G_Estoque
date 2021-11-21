$(".submit-duvida").click(getFeedback)

function getFeedback(){
    var email = $(".email-duvida").val()
    var feedback = $(".texto-duvida").val()
    var selecionado = $('#select').val();
    var alerta = ""

    if (selecionado == 1){
        var type = 1
        console.log()
        alerta = "Sua dúvida foi enviada!"
    }
    if (selecionado == 2){
        var type = 2
        console.log()
        alerta = "Sua sugestão foi enviada!"
    }
    if (selecionado == 3){
        var type = 3
        console.log()
        alerta = "Sua crítica foi enviada!"
    }
    if (selecionado == 4){
        var type = 4
        console.log()
        alerta = "Sua opinião foi enviada!"
    }


postAjuda(email, feedback, type)
alert(alerta)

}

function postAjuda(email, feedback, type) {
    var person = {
      email: email,
      feedback: feedback,
      type: type
    }
    
    $.ajax({
        url: "http://localhost:8000/feedback/",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(person)
    })
}

