$(document).on('click', '.edita', function(){

   if(localStorage.getItem('username') === "admin") {
      $(this).parent().parent().attr('contenteditable',$(this).attr('contenteditable')==='true'?'false':'true' )
   } else {
      alert("Somente o Administrador pode fazer alterações nas tabelas")
   }
});

