$(document).on('click', '.edita', function(){

   if(localStorage.getItem('username') === "admin") {
      $(this).parent().parent().attr('contenteditable',$(this).attr('contenteditable')==='true'?'false':'true' )
   } else {
      $(".mensagem-erro").text("Somente o Administrador pode fazer alterações nas tabelas")
      $(".erros").prepend($(".mensagem-erro"))
   }
});

