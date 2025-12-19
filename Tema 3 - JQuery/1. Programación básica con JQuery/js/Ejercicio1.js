$(document).ready(function () {
    // size se encuentra en una versión antigua de jQuery
    alert("Número de capas: " + $("div").size());
    // ponemos size() en lugar de size. En versiones modernas utilizar length
    $("div").css("color", "green");
});
