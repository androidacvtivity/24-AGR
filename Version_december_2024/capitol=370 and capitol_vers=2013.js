var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    f24AGR_CAPII_II();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        f24AGR_CAPII_II();
    });
});

function f24AGR_CAPII_II() {

    var R1_C1 = $("#27_370_78380_1_1");
    var R1_C2 = $("#27_370_78380_1_2");
    var R1_C3 = $("#27_370_78380_1_3");
    var R1_C4 = $("#27_370_78380_1_4");
    var R1_C5 = $("#27_370_78380_1_5");
    var R1_C6 = $("#27_370_78380_1_6");
    var R1_C7 = $("#27_370_78380_1_7");
    var R1_C8 = $("#27_370_78380_1_8");
    var R1_C9 = $("#27_370_78380_1_9");
    var R1_C10 = $("#27_370_78380_1_10");
    var R1_C11 = $("#27_370_78380_1_11");
    var R1_C12 = $("#27_370_78380_1_12");

    var R3_C1 = $("#27_370_78388_3_1");
    var R3_C2 = $("#27_370_78388_3_2");
    var R3_C3 = $("#27_370_78388_3_3");
    var R3_C4 = $("#27_370_78388_3_4");
    var R3_C5 = $("#27_370_78388_3_5");
    var R3_C6 = $("#27_370_78388_3_6");
    var R3_C7 = $("#27_370_78388_3_7");
    var R3_C8 = $("#27_370_78388_3_8");
    var R3_C9 = $("#27_370_78388_3_9");
    var R3_C10 = $("#27_370_78388_3_10");
    var R3_C11 = $("#27_370_78388_3_11");
    var R3_C12 = $("#27_370_78388_3_12");

    var R4_C1 = $("#27_370_78392_4_1");
    var R4_C2 = $("#27_370_78392_4_2");
    var R4_C3 = $("#27_370_78392_4_3");
    var R4_C4 = $("#27_370_78392_4_4");
    var R4_C5 = $("#27_370_78392_4_5");
    var R4_C6 = $("#27_370_78392_4_6");
    var R4_C7 = $("#27_370_78392_4_7");
    var R4_C8 = $("#27_370_78392_4_8");
    var R4_C9 = $("#27_370_78392_4_9");
    var R4_C10 = $("#27_370_78392_4_10");
    var R4_C11 = $("#27_370_78392_4_11");
    var R4_C12 = $("#27_370_78392_4_12");

    var R6_C1 = $("#27_370_78381_6_1");
    var R6_C2 = $("#27_370_78381_6_2");
    var R6_C3 = $("#27_370_78381_6_3");
    var R6_C4 = $("#27_370_78381_6_4");
    var R6_C5 = $("#27_370_78381_6_5");
    var R6_C6 = $("#27_370_78381_6_6");
    var R6_C7 = $("#27_370_78381_6_7");
    var R6_C8 = $("#27_370_78381_6_8");
    var R6_C9 = $("#27_370_78381_6_9");
    var R6_C10 = $("#27_370_78381_6_10");
    var R6_C11 = $("#27_370_78381_6_11");
    var R6_C12 = $("#27_370_78381_6_12");

    var R8_C1 = $("#27_370_78393_8_1");
    var R8_C2 = $("#27_370_78393_8_2");
    var R8_C3 = $("#27_370_78393_8_3");
    var R8_C4 = $("#27_370_78393_8_4");
    var R8_C5 = $("#27_370_78393_8_5");
    var R8_C6 = $("#27_370_78393_8_6");
    var R8_C7 = $("#27_370_78393_8_7");
    var R8_C8 = $("#27_370_78393_8_8");
    var R8_C9 = $("#27_370_78393_8_9");
    var R8_C10 = $("#27_370_78393_8_10");
    var R8_C11 = $("#27_370_78393_8_11");
    var R8_C12 = $("#27_370_78393_8_12");

    var R10_C1 = $("#27_370_78394_10_1");
    var R10_C2 = $("#27_370_78394_10_2");
    var R10_C3 = $("#27_370_78394_10_3");
    var R10_C4 = $("#27_370_78394_10_4");
    var R10_C5 = $("#27_370_78394_10_5");
    var R10_C6 = $("#27_370_78394_10_6");
    var R10_C7 = $("#27_370_78394_10_7");
    var R10_C8 = $("#27_370_78394_10_8");
    var R10_C9 = $("#27_370_78394_10_9");
    var R10_C10 = $("#27_370_78394_10_10");
    var R10_C11 = $("#27_370_78394_10_11");
    var R10_C12 = $("#27_370_78394_10_12");

    var R11_C1 = $("#27_370_78395_11_1");
    var R11_C2 = $("#27_370_78395_11_2");
    var R11_C3 = $("#27_370_78395_11_3");
    var R11_C4 = $("#27_370_78395_11_4");
    var R11_C5 = $("#27_370_78395_11_5");
    var R11_C6 = $("#27_370_78395_11_6");
    var R11_C7 = $("#27_370_78395_11_7");
    var R11_C8 = $("#27_370_78395_11_8");
    var R11_C9 = $("#27_370_78395_11_9");
    var R11_C10 = $("#27_370_78395_11_10");
    var R11_C11 = $("#27_370_78395_11_11");
    var R11_C12 = $("#27_370_78395_11_12");

    //--------------readOnly input -----------------------

    R11_C1.prop("readonly", true);
    R11_C2.prop("readonly", true);
    R11_C3.prop("readonly", true);
    R11_C4.prop("readonly", true);
    R11_C5.prop("readonly", true);
    R11_C6.prop("readonly", true);
    R11_C7.prop("readonly", true);
    R11_C8.prop("readonly", true);
    R11_C9.prop("readonly", true);
    R11_C10.prop("readonly", true);
    R11_C11.prop("readonly", true);
    R11_C12.prop("readonly", true);


    // R11_C1.val(Number(parseFloat(Number(R1_C1.val())) + parseFloat(Number(R3_C1.val())) + parseFloat(Number(R4_C1.val()))
    //     - parseFloat(Number(R6_C1.val())) - parseFloat(Number(R8_C1.val())) - parseFloat(Number(R10_C1.val()))).toFixed(0));

    // R11_C2.val(Number(parseFloat(Number(R1_C2.val())) + parseFloat(Number(R3_C2.val())) + parseFloat(Number(R4_C2.val()))
    //     - parseFloat(Number(R6_C2.val())) - parseFloat(Number(R8_C2.val())) - parseFloat(Number(R10_C2.val()))).toFixed(0));

    // R11_C3.val(Number(parseFloat(Number(R1_C3.val())) + parseFloat(Number(R3_C3.val())) + parseFloat(Number(R4_C3.val()))
    //     - parseFloat(Number(R6_C3.val())) - parseFloat(Number(R8_C3.val())) - parseFloat(Number(R10_C3.val()))).toFixed(0));

    // R11_C4.val(Number(parseFloat(Number(R1_C4.val())) + parseFloat(Number(R3_C4.val())) + parseFloat(Number(R4_C4.val()))
    //     - parseFloat(Number(R6_C4.val())) - parseFloat(Number(R8_C4.val())) - parseFloat(Number(R10_C4.val()))).toFixed(0));

    // R11_C5.val(Number(parseFloat(Number(R1_C5.val())) + parseFloat(Number(R3_C5.val())) + parseFloat(Number(R4_C5.val()))
    //     - parseFloat(Number(R6_C5.val())) - parseFloat(Number(R8_C5.val())) - parseFloat(Number(R10_C5.val()))).toFixed(0));

    // R11_C6.val(Number(parseFloat(Number(R1_C6.val())) + parseFloat(Number(R3_C6.val())) + parseFloat(Number(R4_C6.val()))
    //     - parseFloat(Number(R6_C6.val())) - parseFloat(Number(R8_C6.val())) - parseFloat(Number(R10_C6.val()))).toFixed(0));

    // R11_C7.val(Number(parseFloat(Number(R1_C7.val())) + parseFloat(Number(R3_C7.val())) + parseFloat(Number(R4_C7.val()))
    //     - parseFloat(Number(R6_C7.val())) - parseFloat(Number(R8_C7.val())) - parseFloat(Number(R10_C7.val()))).toFixed(0));

    // R11_C8.val(Number(parseFloat(Number(R1_C8.val())) + parseFloat(Number(R3_C8.val())) + parseFloat(Number(R4_C8.val()))
    //     - parseFloat(Number(R6_C8.val())) - parseFloat(Number(R8_C8.val())) - parseFloat(Number(R10_C8.val()))).toFixed(0));

    // R11_C9.val(Number(parseFloat(Number(R1_C9.val())) + parseFloat(Number(R3_C9.val())) + parseFloat(Number(R4_C9.val()))
    //     - parseFloat(Number(R6_C9.val())) - parseFloat(Number(R8_C9.val())) - parseFloat(Number(R10_C9.val()))).toFixed(0));

    // R11_C10.val(Number(parseFloat(Number(R1_C10.val())) + parseFloat(Number(R3_C10.val())) + parseFloat(Number(R4_C10.val()))
    //     - parseFloat(Number(R6_C10.val())) - parseFloat(Number(R8_C10.val())) - parseFloat(Number(R10_C10.val()))).toFixed(0));

    // R11_C11.val(Number(parseFloat(Number(R1_C11.val())) + parseFloat(Number(R3_C11.val())) + parseFloat(Number(R4_C11.val()))
    //     - parseFloat(Number(R6_C11.val())) - parseFloat(Number(R8_C11.val())) - parseFloat(Number(R10_C11.val()))).toFixed(0));

    // R11_C12.val(Number(parseFloat(Number(R1_C12.val())) + parseFloat(Number(R3_C12.val())) + parseFloat(Number(R4_C12.val()))
    //     - parseFloat(Number(R6_C12.val())) - parseFloat(Number(R8_C12.val())) - parseFloat(Number(R10_C12.val()))).toFixed(0));

    // Helper function to only display values greater than 0
    let setValueIfNonZero = (element, value) => {
        let parsedValue = Number(parseFloat(value).toFixed(0));
        if (parsedValue > 0) {
            element.val(parsedValue);
        } else {
            element.val(""); // Clear the value if it's zero
        }
    };

    // Apply the helper function to set values only if greater than zero
    setValueIfNonZero(R11_C1, Number(R1_C1.val()) + Number(R3_C1.val()) + Number(R4_C1.val()) - Number(R6_C1.val()) - Number(R8_C1.val()) - Number(R10_C1.val()));
    setValueIfNonZero(R11_C2, Number(R1_C2.val()) + Number(R3_C2.val()) + Number(R4_C2.val()) - Number(R6_C2.val()) - Number(R8_C2.val()) - Number(R10_C2.val()));
    setValueIfNonZero(R11_C3, Number(R1_C3.val()) + Number(R3_C3.val()) + Number(R4_C3.val()) - Number(R6_C3.val()) - Number(R8_C3.val()) - Number(R10_C3.val()));
    setValueIfNonZero(R11_C4, Number(R1_C4.val()) + Number(R3_C4.val()) + Number(R4_C4.val()) - Number(R6_C4.val()) - Number(R8_C4.val()) - Number(R10_C4.val()));
    setValueIfNonZero(R11_C5, Number(R1_C5.val()) + Number(R3_C5.val()) + Number(R4_C5.val()) - Number(R6_C5.val()) - Number(R8_C5.val()) - Number(R10_C5.val()));
    setValueIfNonZero(R11_C6, Number(R1_C6.val()) + Number(R3_C6.val()) + Number(R4_C6.val()) - Number(R6_C6.val()) - Number(R8_C6.val()) - Number(R10_C6.val()));
    setValueIfNonZero(R11_C7, Number(R1_C7.val()) + Number(R3_C7.val()) + Number(R4_C7.val()) - Number(R6_C7.val()) - Number(R8_C7.val()) - Number(R10_C7.val()));
    setValueIfNonZero(R11_C8, Number(R1_C8.val()) + Number(R3_C8.val()) + Number(R4_C8.val()) - Number(R6_C8.val()) - Number(R8_C8.val()) - Number(R10_C8.val()));
    setValueIfNonZero(R11_C9, Number(R1_C9.val()) + Number(R3_C9.val()) + Number(R4_C9.val()) - Number(R6_C9.val()) - Number(R8_C9.val()) - Number(R10_C9.val()));
    setValueIfNonZero(R11_C10, Number(R1_C10.val()) + Number(R3_C10.val()) + Number(R4_C10.val()) - Number(R6_C10.val()) - Number(R8_C10.val()) - Number(R10_C10.val()));
    setValueIfNonZero(R11_C11, Number(R1_C11.val()) + Number(R3_C11.val()) + Number(R4_C11.val()) - Number(R6_C11.val()) - Number(R8_C11.val()) - Number(R10_C11.val()));
    setValueIfNonZero(R11_C12, Number(R1_C12.val()) + Number(R3_C12.val()) + Number(R4_C12.val()) - Number(R6_C12.val()) - Number(R8_C12.val()) - Number(R10_C12.val()));

}

