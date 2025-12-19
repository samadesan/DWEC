$(document).ready(function () {
    $("#foto").fadeOut(2000, function () {
        $("#foto").slideDown(3000, function () {
            $("#foto").slideUp(1000);
        });
    });
});
