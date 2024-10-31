<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
</script>
</head>
<body>

<p>If you click on the "Hide" button, I will disappear. Surprise!</p>

<button id="hide">Hide</button> <!--Botón esconder-->
<button id="show">Show</button> <!--Botón mostrar--> 

<button id="hide">Hide</button>
<button id="show">Show</button>


</body>
</html>
