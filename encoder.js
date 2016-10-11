var userInput = $("#input").val();

$('#inputArea').keydown(function(e){
   $('#textArea').append(userInput);
});
