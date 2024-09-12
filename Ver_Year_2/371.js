var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    f24AGR_ANUAL_CAPI_I();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        f24AGR_ANUAL_CAPI_I();
    });
});


function f24AGR_ANUAL_CAPI_I() {

    var R1_C1 = $("#27_371_78443_1_1");
    var R1_C3 = $("#27_371_78443_1_3");
    var R1_C4 = $("#27_371_78443_1_4");
    var R1_C5 = $("#27_371_78443_1_5");
    var R1_C6 = $("#27_371_78443_1_6");
    var R1_C8 = $("#27_371_78443_1_8");

    var R2_C1 = $("#27_371_78444_2_1");
    var R2_C3 = $("#27_371_78444_2_3");
    var R2_C4 = $("#27_371_78444_2_4");
    var R2_C5 = $("#27_371_78444_2_5");
    var R2_C6 = $("#27_371_78444_2_6");
    var R2_C8 = $("#27_371_78444_2_8");

    var R4_C1 = $("#27_371_78446_4_1");
    var R4_C3 = $("#27_371_78446_4_3");
    var R4_C4 = $("#27_371_78446_4_4");
    var R4_C5 = $("#27_371_78446_4_5");
    var R4_C6 = $("#27_371_78446_4_6");
    var R4_C8 = $("#27_371_78446_4_8");

    var R5_C1 = $("#27_371_78448_5_1");
    var R5_C3 = $("#27_371_78448_5_3");
    var R5_C4 = $("#27_371_78448_5_4");
    var R5_C5 = $("#27_371_78448_5_5");
    var R5_C6 = $("#27_371_78448_5_6");
    var R5_C8 = $("#27_371_78448_5_8");

    //--------------readOnly input -----------------------



    R5_C1.prop("readonly", true);
    R5_C3.prop("readonly", true);
    R5_C4.prop("readonly", true);
    R5_C5.prop("readonly", true);
    R5_C6.prop("readonly", true);
    R5_C8.prop("readonly", true);


    R5_C1.val(Number(parseFloat(Number(R1_C1.val())) + parseFloat(Number(R2_C1.val())) - parseFloat(Number(R4_C1.val()))).toFixed(0));
    R5_C3.val(Number(parseFloat(Number(R1_C3.val())) + parseFloat(Number(R2_C3.val())) - parseFloat(Number(R4_C3.val()))).toFixed(0));
    R5_C4.val(Number(parseFloat(Number(R1_C4.val())) + parseFloat(Number(R2_C4.val())) - parseFloat(Number(R4_C4.val()))).toFixed(0));
    R5_C5.val(Number(parseFloat(Number(R1_C5.val())) + parseFloat(Number(R2_C5.val())) - parseFloat(Number(R4_C5.val()))).toFixed(0));
    R5_C6.val(Number(parseFloat(Number(R1_C6.val())) + parseFloat(Number(R2_C6.val())) - parseFloat(Number(R4_C6.val()))).toFixed(0));
    R5_C6.val(Number(parseFloat(Number(R1_C6.val())) + parseFloat(Number(R2_C6.val())) - parseFloat(Number(R4_C6.val()))).toFixed(0));
    R5_C8.val(Number(parseFloat(Number(R1_C8.val())) + parseFloat(Number(R2_C8.val())) - parseFloat(Number(R4_C8.val()))).toFixed(0));

}
