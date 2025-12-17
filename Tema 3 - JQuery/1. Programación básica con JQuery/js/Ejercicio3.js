$(document).ready(function(){
    $("input[type=radio]").change(function () {
        $("#texto").css("color", $(this).val());
    })
})