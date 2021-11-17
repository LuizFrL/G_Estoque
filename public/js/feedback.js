$(".submit-duvida").click(getFeedback)

function getFeedback(){
    var email = $(".email-duvida").val()
    var feedback = $(".texto-duvida").val()
    var selecionado = $('#select').val();
    var alerta = ""
    if (selecionado == 1){
        var type_id = 1
        alerta = "Sua dúvida foi enviada!"
    }
    if (selecionado == 2){
        var type_id = 2
        alerta = "Sua sugestão foi enviada!"
    }


    postAjuda(email, feedback, type_id)
    alert(alerta)
    


}

function postAjuda(email, feedback, type_id) {
    var person = {
      email: email,
      feedback: feedback,
      type_id: type_id
    }
    $.ajax({
        url: "http://localhost:8000/feedback/",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(person)
    })
}

