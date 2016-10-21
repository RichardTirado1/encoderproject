var letters = {
  64:"z",
  65:"a",
  66:"b",
  67:"c",
  68:"d",
  69:"e",
  70:"f",
  71:"g",
  72:"h",
  73:"i",
  74:"j",
  75:"k",
  76:"l",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z",
}
//the lettrs Above the building blocks^^^^^
$('#inputArea').keydown(function(e){

   if ($("input:checked").val() == "echo") {
      $('#textArea').append(letters[e.keyCode]);
   }
   else if ($("input:checked").val() == "caesarcipher") {
     $('#textArea').append(letters[e.keyCode -1]);
   }
   else if ($("input:checked").val() == "heiroglyphics") {
     $('#textArea').append("<img src = 'images/heiroglyphics/" + letters[e.keyCode] + ".gif'>");
     //^^I added part 7 heiroglyphics^^^^^
   }

});
//changing the text into casearcipher, echo, and heiroglyphics

//Above this is echoing the input out to the text area

$("input[type='radio']").click(function(e) {
   $("input:checked").prop('checked',false);
   $(this).prop('checked',true);
 });
//Part 4:^^^^^^^ Changing which radio button is checked^^^^^.

///Part 8 below this code is decoding the casearcipher to the orignal text

$("#translationInputText").keydown(function(e) {
    if(e.keyCode == 13) {
      var inputTextBoxString = $("#translationInputText").val();
      var messageArray = inputTextBoxString.split("");

      for (var i = 0; i < messageArray.length; i++) {
          var translateNumber = messageArray[i].charCodeAt(0)- 32 + 1;
          $('#translationArea').append(letters[translateNumber]);
      }
   }
});
