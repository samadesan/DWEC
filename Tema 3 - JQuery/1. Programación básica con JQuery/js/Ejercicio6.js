$(document).ready(function () {
    $("#imagen").fadeOut(2000, function () {
        $(this).slideDown(3000, function () {
            $(this).slideUp(1000);
        });
    });
});
