$(".botao-altera").click(esconde)
$(document).ready(function () {
    
    if (localStorage.getItem('username') === "" ){
    $(".botao-altera").removeClass("container-show")
    console.log("a")
    }
    
})

function esconde(){
    $(".container-altera").toggleClass("container-hidden")


}

