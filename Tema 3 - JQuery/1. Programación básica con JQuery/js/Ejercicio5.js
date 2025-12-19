$(document).ready(function () {
    $("#parrafo").mouseover(function () {
        $(this).addClass("grande");
    });

    $("#parrafo").mouseout(function () {
        $(this).removeClass("grande");
    });
});
