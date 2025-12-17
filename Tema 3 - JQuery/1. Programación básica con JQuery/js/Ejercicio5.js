$(document).ready(function () {
    $("#parrafo").mouseenter(function () {
        $(this).addClass("grande");
    });

    $("#parrafo").mouseleave(function () {
        $(this).removeClass("grande");
    });
});
