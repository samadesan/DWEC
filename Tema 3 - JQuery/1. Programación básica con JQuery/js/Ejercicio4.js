$(document).ready(function(){
    function actualizarSuma() {
        let n1 = parseFloat($("#num1").val()) || 0;
        let n2 = parseFloat($("#num2").val()) || 0;
        $("#resultado").val(n1 + n2);
    }
    $("#num1, #num2").on("input", function () {
        if ($("#resultado").length) {
            actualizarSuma();
        }
    });
    $("#mostrarResultado").change(function () {
        if ($(this).prop("checked")) {
            if ($("#resultado").length === 0) {
                $("<input>", {
                    type: "text",
                    id: "resultado",
                    readonly: true
                }).insertAfter(this).css({"width": "30px",});
                actualizarSuma();
            }
        } else {
            $("#resultado").remove();
        }
    });
})