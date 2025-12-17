$(document).ready(function () {
    // size se encuentra en una versión antigua de jQuery
    alert("Número de capas: " + $("div").size());// ponemos size() en lugar de size.
    $("div").css("color", "green");
});
