$(document).ready(function(){
    $("#mostrar").click(function () {
        $("#foto").show(2500);
    });

    $("#ocultar").click(function () {
        $("#foto").hide("slow");
    });
})