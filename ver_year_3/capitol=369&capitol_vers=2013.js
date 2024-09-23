var from = "";

$(document).ready(function () {
    form = $("#formDenShort").val();
    f24AGR_ANUAL_CAPI();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        f24AGR_ANUAL_CAPI();
    });
});


function f24AGR_ANUAL_CAPI() {

    var R1_C1 = $("#27_369_78326_1_1");
    var R2_C1 = $("#27_369_78323_2_1");
    var R3_C1 = $("#27_369_78324_3_1");
    var R4_C1 = $("#27_369_78325_4_1");
    var R5_C1 = $("#27_369_78322_5_1");
    var R6_C1 = $("#27_369_78327_6_1");
    var R7_C1 = $("#27_369_78321_7_1");
    var R8_C1 = $("#27_369_78328_8_1");
    var R9_C1 = $("#27_369_78329_9_1");
    var R10_C1 = $("#27_369_78330_10_1");

    var R11_C1 = $("#27_369_78331_11_1");
    var R12_C1 = $("#27_369_78332_12_1");
    var R13_C1 = $("#27_369_78333_13_1");
    var R14_C1 = $("#27_369_78334_14_1");
    var R15_C1 = $("#27_369_78335_15_1");
    var R16_C1 = $("#27_369_78336_16_1");
    var R17_C1 = $("#27_369_78337_17_1");
    var R18_C1 = $("#27_369_78338_18_1");
    var R19_C1 = $("#27_369_78339_19_1");
    var R20_C1 = $("#27_369_78340_20_1");

    var R21_C1 = $("#27_369_78341_21_1");
    var R22_C1 = $("#27_369_78342_22_1");
    var R23_C1 = $("#27_369_78343_23_1");
    var R24_C1 = $("#27_369_78344_24_1");
    var R25_C1 = $("#27_369_78345_25_1");
    var R26_C1 = $("#27_369_78346_26_1");
    var R27_C1 = $("#27_369_78347_27_1");
    var R28_C1 = $("#27_369_78348_28_1");
    var R29_C1 = $("#27_369_78349_29_1");
    var R30_C1 = $("#27_369_78350_30_1");

    var R31_C1 = $("#27_369_78351_31_1");
    var R32_C1 = $("#27_369_78352_32_1");
    var R33_C1 = $("#27_369_78353_33_1");
    var R34_C1 = $("#27_369_78354_34_1");
    var R35_C1 = $("#27_369_78355_35_1");
    var R36_C1 = $("#27_369_78356_36_1");
    var R37_C1 = $("#27_369_78357_37_1");
    var R38_C1 = $("#27_369_78358_38_1");
    var R39_C1 = $("#27_369_78359_39_1");
    var R40_C1 = $("#27_369_78360_40_1");

    var R41_C1 = $("#27_369_78361_41_1");
    var R42_C1 = $("#27_369_78362_42_1");
    var R43_C1 = $("#27_369_78363_43_1");
    var R44_C1 = $("#27_369_78364_44_1");
    var R45_C1 = $("#27_369_78365_45_1");
    var R46_C1 = $("#27_369_78366_46_1");
    var R47_C1 = $("#27_369_78367_47_1");
    var R48_C1 = $("#27_369_78368_48_1");
    var R49_C1 = $("#27_369_78369_49_1");
    var R50_C1 = $("#27_369_78370_50_1");





    //--------------readOnly input -----------------------

    R1_C1.prop("readonly", true);
    R3_C1.prop("readonly", true);
    R6_C1.prop("readonly", true);
    R8_C1.prop("readonly", true);
    R11_C1.prop("readonly", true);
    R12_C1.prop("readonly", true);

    R16_C1.prop("readonly", true);
    R17_C1.prop("readonly", true);
    R20_C1.prop("readonly", true);
    R23_C1.prop("readonly", true);
    R26_C1.prop("readonly", true);
    R30_C1.prop("readonly", true);
    R32_C1.prop("readonly", true);
    R36_C1.prop("readonly", true);
    R37_C1.prop("readonly", true);
    R38_C1.prop("readonly", true);
    R44_C1.prop("readonly", true);
    R45_C1.prop("readonly", true);
    R49_C1.prop("readonly", true);


    // Updated code for displaying results only if greater than zero
    let setValueIfNonZero = (element, value) => {
        let parsedValue = Number(parseFloat(value).toFixed(0));
        if (parsedValue > 0) {
            element.val(parsedValue);
        } else {
            element.val(""); // Clear the value if it's zero
        }
    };

    setValueIfNonZero(R1_C1, Number(R2_C1.val()) + Number(R4_C1.val()) + Number(R5_C1.val()));
    setValueIfNonZero(R3_C1, Number(R4_C1.val()) + Number(R5_C1.val()));
    setValueIfNonZero(R6_C1, Number(R7_C1.val()) + Number(R9_C1.val()) + Number(R10_C1.val()));
    setValueIfNonZero(R8_C1, Number(R9_C1.val()) + Number(R10_C1.val()));
    setValueIfNonZero(R11_C1, Number(R13_C1.val()) + Number(R14_C1.val()) + Number(R15_C1.val()) +
        Number(R17_C1.val()) + Number(R18_C1.val()) + Number(R21_C1.val()) + Number(R22_C1.val()));

    setValueIfNonZero(R12_C1, Number(R13_C1.val()) + Number(R14_C1.val()) + Number(R15_C1.val()));

    setValueIfNonZero(R16_C1, Number(R17_C1.val()) + Number(R18_C1.val()) + Number(R21_C1.val()) + Number(R22_C1.val()));

    setValueIfNonZero(R17_C1, Number(R18_C1.val()) + Number(R19_C1.val()));


    setValueIfNonZero(R20_C1, Number(R21_C1.val()) + Number(R22_C1.val()));

    setValueIfNonZero(R23_C1, Number(R2_C1.val()) + Number(R4_C1.val()) + Number(R5_C1.val()) + Number(R7_C1.val()) +
        Number(R9_C1.val()) + Number(R10_C1.val()) + Number(R13_C1.val()) + Number(R14_C1.val()) +
        Number(R15_C1.val()) + Number(R17_C1.val()) + Number(R18_C1.val()) + Number(R21_C1.val()) + Number(R22_C1.val()));


    setValueIfNonZero(R26_C1, Number(R27_C1.val()) + Number(R28_C1.val()) + Number(R29_C1.val()));

    setValueIfNonZero(R30_C1, Number(R31_C1.val()) + Number(R33_C1.val()) + Number(R35_C1.val()));

    setValueIfNonZero(R32_C1, Number(R33_C1.val()) + Number(R35_C1.val()));

    setValueIfNonZero(R36_C1, Number(R24_C1.val()) + Number(R25_C1.val()) + Number(R27_C1.val()) + Number(R28_C1.val()) +
        Number(R29_C1.val()) + Number(R31_C1.val()) + Number(R33_C1.val()) + Number(R35_C1.val()));

    setValueIfNonZero(R37_C1, Number(R38_C1.val()) + Number(R41_C1.val()) + Number(R42_C1.val()));

    setValueIfNonZero(R38_C1, Number(R39_C1.val()) + Number(R40_C1.val()));

    setValueIfNonZero(R44_C1, Number(R46_C1.val()) + Number(R47_C1.val()) + Number(R48_C1.val()));

    setValueIfNonZero(R45_C1, Number(R46_C1.val()) + Number(R47_C1.val()));
    
    setValueIfNonZero(R49_C1, Number(R38_C1.val()) + Number(R41_C1.val()) + Number(R42_C1.val()) + Number(R46_C1.val()) +
        Number(R47_C1.val()) + Number(R48_C1.val()));
}
