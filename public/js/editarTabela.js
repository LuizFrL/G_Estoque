$(document).on('click', '.edita', function(){
    $(this).parent().parent().attr('contenteditable',$(this).attr('contenteditable')==='true'?'false':'true' )
});