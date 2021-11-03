$(document).on('click', '.edita', function(){

   if(localStorage.getItem('username') === "admin") {
      $(this).parent().parent().attr('contenteditable',$(this).attr('contenteditable')==='true'?'false':'true' )
   }
});

