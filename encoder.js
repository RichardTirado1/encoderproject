var letters = {
  64: "z",
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
//the lettrs Above^^^^^
$('#inputArea').keydown(function(e){

   if ($("input:checked").val() == "echo") {
      $('#textArea').append(letters[e.keyCode]);
   }
   else if ($("input:checked").val() == "caesarcipher") {
     $('#textArea').append(letters[e.keyCode -1]);
   }
   else if ($("input:checked").val() == "heiroglyphics") {
     $('#textArea').append(letters[e.keyCode]);
   }

});
//changing the text into casearcipher, echo, and heiroglyphics

//Above this is echoing the input out to the text area

$("input[type='radio']").click(function(e) {
   $("input:checked").prop('checked',false);
   $(this).prop('checked',true);
 });
//Part 4: Changing which radio button is checked.
