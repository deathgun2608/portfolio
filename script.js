function handleClick(){
   confirm ("Это вы нажали на кнопку?")
}
$(document).ready(function() {
   $("#HideAbout").click(function() {
       $("#about").slideToggle();
   });
});
