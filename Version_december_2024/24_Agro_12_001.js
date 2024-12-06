(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.agro24 = {
        attach: function (context, settings) {
            // Verificare input numeric
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            // Verificare input float
            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });



            // Funcție pentru a ascunde sau afișa capitolul 1.2 în funcție de TRIM
            function toggleCap2(trimValue) {
                if (trimValue == 4) {


                    // Hide the static CAP12 table and rows related to Cap 1.2
                    $('#cap1-2-title').hide();
                    $('#header-1-2').hide();
                    $('#CAP12').hide();
                    $('#no-variable-row-1, #no-variable-row-2').hide();
                    $('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').hide();

                    // Clear all inputs in the static CAP12 table (Cap 1.2 only)
                    $('input[name^="CAP12"]').val('');

                    // Hide dynamic CAP12 inputs and clear values for Cap 1.2
                    $('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
                        $(this).closest('tr').hide(); // Hide row for Cap 1.2
                        $(this).val(''); // Clear value for Cap 1.2
                    });

                } else {
                    // Show the <h3> header for Cap 1.2

                    $('#cap1-2-title').show();

                    // Show the static CAP12 table and rows related to Cap 1.2
                    $('#header-1-2').show();
                    $('#CAP12').show();
                    $('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').show();
                    $('#no-variable-row-1, #no-variable-row-2').show();
                    // Show dynamic CAP12 inputs for Cap 1.2
                    $('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
                        $(this).closest('tr').show(); // Show row for Cap 1.2
                    });
                }
            }


            // Eveniment pentru a detecta schimbarea valorii select TRIM
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap2(trimValue);
            });

            // Apelează funcția toggleCap2 inițial dacă este nevoie
            var initialTrimValue = jQuery('select[name="TRIM"]').val();
            toggleCap2(initialTrimValue);








        }
    };
})(jQuery);

//Modify this js code for Drupal
webform.validators.agro24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;



    var TRIM = 0;  // Initialize TRIM to 0
    if (!isNaN(Number(values['TRIM']))) {
        TRIM = Number(values['TRIM']);  // TRIM can be 1, 2, 3, 4, or 0
    }

    // Always called validation functions
    trim_cap1_2(values);
    validatePhoneNumber(values.PHONE);
    validate33_001(values);
    validate33_001_F(values);
    validate33_002(values);
    validate33_002_F(values);
    validate33_004(values);
    validate33_004_F(values);


    // Conditionally called based on TRIM value (NOT called only if TRIM === 4)
    if (TRIM !== 4) {

        validate33_005(values);
        validate33_005_F(values);
        validate33_006(values);
        validate33_006_F(values);


        validate33_003(values);
        validate33_003_F(values);
        validate33_008(values);
        validate33_008_F(values);
        validate33_009(values);
        validate33_009_F(values);
        validate33_010(values);
        validate33_010_F(values);
        validate33_011(values);
        validate33_011_F(values);
        validate33_012(values);
        validate33_012_F(values);
        validate33_013(values);
        validate33_013_F(values);
        validate33_017(values);
        validate33_017_F(values);
        validate33_019(values);
        validate33_019_F(values);
    }

    // Always called validations
    validate33_015(values);
    validate33_015_F(values);
    validate33_016(values);
    validate33_016_F(values);
    validate33_018(values);
    validate33_018_F(values);
    validate33_007(values);
    validate33_007_F(values);
    validate33_014(values);
    validate33_014_F(values);
    validate33_024(values);
    validate33_024_F(values);



    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['agro24'] = 1;
    validateWebform();
}


function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}

// Aceasta functie este creata pentru cap.1.2 static - Creaza pentru cap.1.2 dinamic
function trim_cap1_2(values) {
    var TRIM = 0;
    if (!isNaN(Number(values['TRIM']))) {
        TRIM = Number(values['TRIM']);
    }

    if (TRIM === 4) {
        // Hide Chapter 1.2 (Static part)
        jQuery('#header-1-2').hide();  // Hide the header of chapter 1.2
        jQuery('#CAP12').hide();       // Hide the table related to chapter 1.2
        jQuery('#row-header-1').hide();
        jQuery('#row-header-2').hide();
        jQuery('#row-1').hide();
        jQuery('#row-2').hide();
        jQuery('#row-3').hide();
        jQuery('#row-4').hide();
        jQuery('#row-5').hide();
        jQuery('#row-6').hide();
        jQuery('#row-7').hide();
        jQuery('#row-8').hide();
        jQuery('#row-9').hide();
        jQuery('#row-10').hide();
        jQuery('#row-11').hide();

        // Clear all static input values and checkboxes in chapter 1.2
        jQuery('input[name^="CAP12"]').val('');            // Clear text inputs

        // Hide Chapter 1.2 (Dynamic part)
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            jQuery(this).closest('tr').hide();  // Hide dynamic rows for Cap 1.2
            jQuery(this).val('');  // Clear the input values in dynamic rows
        });

    } else {
        // Show Chapter 1.2 (Static part)
        jQuery('#header-1-2').show();  // Show the header for Chapter 1.2
        jQuery('#CAP12').show();       // Show the table related to chapter 1.2
        jQuery('#row-header-1').show();
        jQuery('#row-header-2').show();
        jQuery('#row-1').show();
        jQuery('#row-2').show();
        jQuery('#row-3').show();
        jQuery('#row-4').show();
        jQuery('#row-5').show();
        jQuery('#row-6').show();
        jQuery('#row-7').show();
        jQuery('#row-8').show();
        jQuery('#row-9').show();
        jQuery('#row-10').show();
        jQuery('#row-11').show();

        // Show Chapter 1.2 (Dynamic part)
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            jQuery(this).closest('tr').show();  // Show dynamic rows for Cap 1.2
        });
    }
}


function validatePhoneNumber(phone) {
    // Check if the phone number is valid (exactly 9 digits)
    if (!phone || !/^[0-9]{9}$/.test(phone)) {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 29,
            'msg': concatMessage('A.09', '', Drupal.t('Introduceți doar un număr de telefon format din 9 cifre'))
        });
    }

    // Check if the first digit is 0
    if (phone && phone[0] !== '0') {
        webform.errors.push({
            'fieldName': 'PHONE',
            'weight': 30,
            'msg': concatMessage('A.09', '', Drupal.t('Prima cifră a numărului de telefon trebuie să fie 0'))
        });
    }
}


function validate33_001(values) {
    // 33-001 validation logic
    for (var i = 0; i <= 8; i++) {
        if (i !== 2 && i !== 7) {
            var CAP1_R5_C = !isNaN(Number(values["CAP11_R5_C" + i])) ? Number(values["CAP11_R5_C" + i]) : 0;
            var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + i])) ? Number(values["CAP11_R1_C" + i]) : 0;
            var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + i])) ? Number(values["CAP11_R2_C" + i]) : 0;
            var CAP1_R4_C = !isNaN(Number(values["CAP11_R4_C" + i])) ? Number(values["CAP11_R4_C" + i]) : 0;

            var result_33_001 = CAP1_R1_C + CAP1_R2_C - CAP1_R4_C;

            if (CAP1_R5_C !== result_33_001) {
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-001. [@col] - Tab.1.1, rd.5 pe COL (@col), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4)) COL(1,3,4,5,6,8), @CAP1_R5_C <> @result_33_001', { '@col': i, '@CAP1_R5_C': CAP1_R5_C, '@result_33_001': result_33_001 })
                });
            }
        }
    }
}



function validate33_001_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) {
            var R5_C = 0, R1_C = 0, R2_C = 0, R4_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP11_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R5_C" + i + "_FILIAL"][j]))) {
                R5_C = Number(values["CAP11_R5_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R1_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_C" + i + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP11_R1_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP11_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_C" + i + "_FILIAL"][j]))) {
                R4_C = Number(values["CAP11_R4_C" + i + "_FILIAL"][j]);
            }

            var result_33_001_F = R1_C + R2_C - R4_C;

            if (R5_C !== result_33_001_F) {
                webform.errors.push({
                    'fieldName': 'CAP11_R5_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }
    }
}

//--------------------------------------------------------------------------------------------------------


function validate33_024(values) {
    var columns = [1, 3, 4, 5, 6, 8];

    for (var i = 0; i < columns.length; i++) {
        var col = columns[i];

        var CAP1_R1_C = !isNaN(Number(values["CAP11_R1_C" + col])) ? Number(values["CAP11_R1_C" + col]) : 0;
        var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + col])) ? Number(values["CAP11_R2_C" + col]) : 0;

        if (CAP1_R1_C !== 0 && CAP1_R2_C === 0) {
            webform.errors.push({
                'fieldName': 'CAP11_R2_C' + col,
                'weight': 19,
                'index': col,
                'msg': Drupal.t('Cod eroare: 33-024. [@col] - Tab.1.1, rd.1 pe COL (@col), COL(1, 3, 4, 5, 6, 8) ≠ 0 atunci Rînd.(2) COL(1, 3, 4, 5, 6, 8) ≠ 0 , @CAP1_R1_C ≠ @CAP1_R2_C', {
                    '@col': col,
                    '@CAP1_R1_C': CAP1_R1_C,
                    '@CAP1_R2_C': CAP1_R2_C
                })
            });
        }
    }
}



//---------------------------------------------------------------------------------------------------------

function validate33_002(values) {

    for (var i = 1; i <= 6; i++) {
        if (i !== 2) {

            var CAP1_R2_C = !isNaN(Number(values["CAP11_R2_C" + i])) ? Number(values["CAP11_R2_C" + i]) : 0;
            var CAP1_R3_C = !isNaN(Number(values["CAP11_R3_C" + i])) ? Number(values["CAP11_R3_C" + i]) : 0;

            if (CAP1_R2_C !== 0 && CAP1_R3_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R3_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-002. [@col] - Tab.1.1, rd.2 pe COL (@col), COL(1, 3, 4, 5, 6) ≠ 0 atunci Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0 și invers , @CAP1_R2_C - @CAP1_R3_C ≠ 0', { '@col': i, '@CAP1_R2_C': CAP1_R2_C, '@CAP1_R3_C': CAP1_R3_C })
                });
            } else if (CAP1_R2_C === 0 && CAP1_R3_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R2_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-002. [@col] - Tab.1.1, rd.2 pe COL (@col), COL(1, 3, 4, 5, 6) ≠ 0 atunci Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0 și invers , @CAP1_R2_C - @CAP1_R3_C ≠ 0', { '@col': i, '@CAP1_R2_C': CAP1_R2_C, '@CAP1_R3_C': CAP1_R3_C })
                });
            }
        }
    }
}






function validate33_024_F(values) {
    var columns = [1, 3, 4, 5, 6, 8];

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i < columns.length; i++) {
            var col = columns[i];

            var R1_C = 0, R2_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP11_R1_C" + col + "_FILIAL"] && !isNaN(Number(values["CAP11_R1_C" + col + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP11_R1_C" + col + "_FILIAL"][j]);
            }

            if (values["CAP11_R2_C" + col + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + col + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP11_R2_C" + col + "_FILIAL"][j]);
            }

            if (R1_C !== 0 && R2_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP11_R2_C' + col + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-024-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(1) COL(1, 3, 4, 5, 6, 8) ≠ 0 atunci Rînd.(2) COL(1, 3, 4, 5, 6, 8) ≠ 0, @R1_C ≠ @R2_C', {
                        '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                        '@col_FILIAL': col,
                        '@R1_C': R1_C,
                        '@R2_C': R2_C
                    })
                });
            }
        }
    }
}








function validate33_002_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {

            if (i !== 2) {
                var R3_C = 0, R2_C = 0;

                // Check if properties exist before accessing them

                if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
                    R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP11_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C = Number(values["CAP11_R3_C" + i + "_FILIAL"][j]);
                }




                if (R2_C === 0 && R3_C !== 0) {
                    webform.errors.push({
                        'fieldName': 'CAP11_R2_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
                    });
                }

                else
                    if (R2_C !== 0 && R3_C === 0) {
                        webform.errors.push({
                            'fieldName': 'CAP11_R3_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
                        });
                    }




            }
        }
    }

}






function validate33_003(values) {
    // 33-002 validation logic

    var TRIM = 0;
    if (!isNaN(Number(values['TRIM']))) {
        TRIM = Number(values['TRIM']);
    }


    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;
            var CAP12_R3_C = !isNaN(Number(values["CAP12_R3_C" + i])) ? Number(values["CAP12_R3_C" + i]) : 0;

            if (CAP11_R7_C !== 0 && CAP12_R3_C === 0 && TRIM !== 4) {
                webform.errors.push({
                    'fieldName': 'CAP12_R3_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-003. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(3) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP12_R3_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP12_R3_C': CAP12_R3_C })
                });
            }

            else if (CAP11_R7_C === 0 && CAP12_R3_C !== 0 && TRIM !== 4) {
                webform.errors.push({
                    'fieldName': 'CAP111_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-003. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(3) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP12_R3_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP12_R3_C': CAP12_R3_C })
                });
            }
        }
    }
}


//----------------------------------------------------------------------------

function validate33_003_F(values) {
    var TRIM = 0;
    if (!isNaN(Number(values['TRIM']))) {
        TRIM = Number(values['TRIM']);
    }

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R7_C = 0, R3_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C = Number(values["CAP12_R3_C" + i + "_FILIAL"][j]);
                }

                if (((R7_C !== 0 && R3_C === 0) || (R7_C === 0 && R3_C !== 0)) && TRIM !== 4) {
                    webform.errors.push({
                        'fieldName': R7_C !== 0 ? 'CAP12_R3_C' + i + '_FILIAL' : 'CAP11_R7_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-003-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(7) COL(1) ≠ 0 atunci Rînd.(3) COL(1) ≠ 0, @R7_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R7_C': R7_C, '@R3_C': R3_C })
                    });
                }
            }
        }
    }
}

//----------------------------------------------------------------------------

function validate33_004(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;
            var CAP11_R20_C = !isNaN(Number(values["CAP111_R20_C" + i])) ? Number(values["CAP111_R20_C" + i]) : 0;

            if (CAP11_R7_C !== 0 && CAP11_R20_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R20_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-004. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(20) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP11_R20_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP11_R20_C': CAP11_R20_C })
                });
            } else if (CAP11_R7_C === 0 && CAP11_R20_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-004. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(20) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP11_R20_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP11_R20_C': CAP11_R20_C })
                });
            }
        }
    }
}


//----------------------------------------------------------------------------


//----------------------------------------------------------------------------



function validate33_004_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R7_C = 0, R20_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
                    R20_C = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
                }

                if ((R7_C !== 0 && R20_C === 0) || (R7_C === 0 && R20_C !== 0)) {
                    webform.errors.push({
                        'fieldName': R7_C !== 0 ? 'CAP111_R20_C' + i + '_FILIAL' : 'CAP111_R7_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-004-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(7) COL(1) ≠ 0 atunci Rînd.(20) COL(1) ≠ 0, @R7_C <> @R20_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R7_C': R7_C, '@R20_C': R20_C })
                    });
                }
            }
        }
    }
}
//----------------------------------------------------------------------------

function validate33_005(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R8_C = !isNaN(Number(values["CAP111_R8_C" + i])) ? Number(values["CAP111_R8_C" + i]) : 0;
            var CAP12_R7_C = !isNaN(Number(values["CAP12_R7_C" + i])) ? Number(values["CAP12_R7_C" + i]) : 0;

            if (CAP11_R8_C !== 0 && CAP12_R7_C === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP12_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod atenționare : 33-005. [@col] - Dacă Tab.1.1.1, rd.8 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R8_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R8_C': CAP11_R8_C, '@CAP12_R7_C': CAP12_R7_C })
                });
            }


            else if (CAP11_R8_C === 0 && CAP12_R7_C !== 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R8_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod atenționare: 33-005. [@col] - Dacă Tab.1.1.1, rd.8 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R8_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R8_C': CAP11_R8_C, '@CAP12_R7_C': CAP12_R7_C })
                });
            }
        }
    }
}
//----------------------------------------------------------------------------



//----------------------------------------------------------------------------




function validate33_005_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R8_C = 0, R7_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R8_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R8_C" + i + "_FILIAL"][j]))) {
                    R8_C = Number(values["CAP111_R8_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP12_R7_C" + i + "_FILIAL"][j]);
                }

                if ((R8_C !== 0 && R7_C === 0) || (R8_C === 0 && R7_C !== 0)) {
                    webform.warnings.push({
                        'fieldName': R8_C !== 0 ? 'CAP12_R7_C' + i + '_FILIAL' : 'CAP111_R8_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod atenționare : 33-005-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(8) COL(1) ≠ 0 atunci Rînd.(7) COL(1)  ≠ 0 și invers, @R8_C <> @R7_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R8_C': R8_C, '@R7_C': R7_C })
                    });
                }
            }
        }
    }
}

//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

function validate33_006(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R9_C = !isNaN(Number(values["CAP111_R9_C" + i])) ? Number(values["CAP111_R9_C" + i]) : 0;
            var CAP12_R8_C = !isNaN(Number(values["CAP12_R8_C" + i])) ? Number(values["CAP12_R8_C" + i]) : 0;

            if (CAP11_R9_C !== 0 && CAP12_R8_C === 0) {
                webform.warnings.push({
                    'fieldName': 'CAP12_R8_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod atenționare: 33-006. [@col] - Tab.1.1.1, Dacă rd.9 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(8) COL(1) ≠ 0 și invers , @CAP11_R9_C - @CAP12_R8_C ≠ 0', { '@col': i, '@CAP11_R9_C': CAP11_R9_C, '@CAP12_R8_C': CAP12_R8_C })
                });
            }

            else if (CAP11_R9_C === 0 && CAP12_R8_C !== 0) {
                webform.warnings.push({
                    'fieldName': 'CAP111_R9_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod atenționare: 33-006. [@col] - Tab.1.1.1, Dacă  rd.9 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(8) COL(1) ≠ 0 și invers , @CAP11_R9_C - @CAP12_R8_C ≠ 0', { '@col': i, '@CAP11_R9_C': CAP11_R9_C, '@CAP12_R8_C': CAP12_R8_C })
                });
            }
        }
    }
}
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------



//This cod enot repeat
function validate33_006_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R9_C = 0, R8_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R9_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R9_C" + i + "_FILIAL"][j]))) {
                    R9_C = Number(values["CAP111_R9_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R8_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R8_C" + i + "_FILIAL"][j]))) {
                    R8_C = Number(values["CAP12_R8_C" + i + "_FILIAL"][j]);
                }

                if ((R9_C !== 0 && R8_C === 0) || (R9_C === 0 && R8_C !== 0)) {
                    webform.warnings.push({
                        'fieldName': R9_C !== 0 ? 'CAP12_R8_C' + i + '_FILIAL' : 'CAP111_R9_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod atenționare : 33-006-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(9) COL(1) ≠ 0 atunci Rînd.(8) COL(1) ≠ 0 si invers, @R9_C <> @R8_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R9_C': R9_C, '@R8_C': R8_C })
                    });
                }
            }
        }
    }
}


//----------------------------------------------------------------------------




//----------------------------------------------------------------------------

function validate33_008(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R10_C = !isNaN(Number(values["CAP111_R10_C" + i])) ? Number(values["CAP111_R10_C" + i]) : 0;
            var CAP12_R10_C = !isNaN(Number(values["CAP12_R10_C" + i])) ? Number(values["CAP12_R10_C" + i]) : 0;

            if (CAP11_R10_C !== 0 && CAP12_R10_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-008. [@col] - Tab.1.1.1, rd.10 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R10_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R10_C': CAP11_R10_C, '@CAP12_R10_C': CAP12_R10_C })
                });
            }
            // else if (CAP11_R10_C === 0 && CAP12_R10_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R10_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-008. [@col] - Tab.1.1.1, rd.10 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R10_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R10_C': CAP11_R10_C, '@CAP12_R10_C': CAP12_R10_C })
            //     });
            // }
        }
    }
}

//----------------------------------------------------------------------------



function validate33_008_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R10_C1 = 0, R10_C2 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C1 = Number(values["CAP111_R10_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C2 = Number(values["CAP12_R10_C" + i + "_FILIAL"][j]);
                }

                if ((R10_C1 !== 0 && R10_C2 === 0)) {
                    webform.errors.push({
                        'fieldName': 'CAP12_R10_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-008-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(10) COL(1) ≠ 0 atunci Rînd.(10) COL(1) ≠ 0, @R10_C1 <> @R10_C2', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R10_C1': R10_C1, '@R10_C2': R10_C2 })
                    });
                }
            }
        }
    }
}


//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
function validate33_009(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            //Tab. 1.1.1, daca rd.11 COL1≠0, atunci Tab. 1.2, rd.10 COL1≠0

            var CAP11_R11_C = !isNaN(Number(values["CAP111_R11_C" + i])) ? Number(values["CAP111_R11_C" + i]) : 0;
            var CAP12_R10_C = !isNaN(Number(values["CAP12_R10_C" + i])) ? Number(values["CAP12_R10_C" + i]) : 0;

            if (CAP11_R11_C !== 0 && CAP12_R10_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-009. [@col] - Tab.1.1.1, rd.11 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R11_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R11_C': CAP11_R11_C, '@CAP12_R10_C': CAP12_R10_C })
                });
            }

            //     else if (CAP11_R11_C === 0 && CAP12_R10_C !== 0) {
            //         webform.errors.push({
            //             'fieldName': 'CAP111_R11_C' + i,
            //             'weight': 19,
            //             'index': i,
            //             'msg': Drupal.t('Cod eroare: 33-009. [@col] - Tab.1.1.1, rd.11 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R11_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R11_C': CAP11_R11_C, '@CAP12_R10_C': CAP12_R10_C })
            //         });
            //     }
            // }
        }
    }
}



//----------------------------------------------------------------------------


function validate33_009_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R11_C1 = 0, R10_C2 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R11_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_C" + i + "_FILIAL"][j]))) {
                    R11_C1 = Number(values["CAP111_R11_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C2 = Number(values["CAP12_R10_C" + i + "_FILIAL"][j]);
                }

                if (R11_C1 !== 0 && R10_C2 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R10_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R10_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-009-F. Dacă Tab. 1.1.1, rd.11, COL1 ≠ 0 atunci Tab. 1.2, rd.10, COL1 ≠ 0, @R11_C1 <> @R10_C2', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R11_C1': R11_C1,
                                '@R10_C2': R10_C2
                            })
                        });
                    }
                }
            }
        }
    }
}


//----------------------------------------------------------------------------

//----------------------------------------------------------------------------



//----------------------------------------------------------------------------
function validate33_010(values) {
    // 33-010 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            // Tab. 1.1.1, daca rd.12 COL1≠0, atunci Tab. 1.2, rd.10 COL1≠0

            var CAP11_R12_C = !isNaN(Number(values["CAP111_R12_C" + i])) ? Number(values["CAP111_R12_C" + i]) : 0;
            var CAP12_R10_C = !isNaN(Number(values["CAP12_R10_C" + i])) ? Number(values["CAP12_R10_C" + i]) : 0;

            if (CAP11_R12_C !== 0 && CAP12_R10_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-010. [@col] - Tab.1.1.1, rd.12 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R12_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R12_C': CAP11_R12_C, '@CAP12_R10_C': CAP12_R10_C })
                });
            }

            //     else if (CAP11_R12_C === 0 && CAP12_R10_C !== 0) {
            //         webform.errors.push({
            //             'fieldName': 'CAP111_R12_C' + i,
            //             'weight': 19,
            //             'index': i,
            //             'msg': Drupal.t('Cod eroare: 33-010. [@col] - Tab.1.1.1, rd.12 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(10) COL(1) ≠ 0 și invers , @CAP11_R12_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R12_C': CAP11_R12_C, '@CAP12_R10_C': CAP12_R10_C })
            //         });
            //     }
            // }
        }
    }
}


//----------------------------------------------------------------------------

//----------------------------------------------------------------------------



function validate33_010_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R12_C1 = 0, R10_C2 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R12_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R12_C" + i + "_FILIAL"][j]))) {
                    R12_C1 = Number(values["CAP111_R12_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C2 = Number(values["CAP12_R10_C" + i + "_FILIAL"][j]);
                }

                if (R12_C1 !== 0 && R10_C2 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R10_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R10_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-010-F. Dacă Tab. 1.1.1, rd.12, COL1 ≠ 0 atunci Tab. 1.2, rd.10, COL1 ≠ 0, @R12_C1 <> @R10_C2', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R12_C1': R12_C1,
                                '@R10_C2': R10_C2
                            })
                        });
                    }
                }
            }
        }
    }
}



//----------------------------------------------------------------------------

//-------------
function validate33_011(values) {
    // 33-010 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            // Tab. 1.1.1, daca rd.13 COL1≠0, atunci Tab. 1.2, rd.7 COL1≠0

            var CAP11_R13_C = !isNaN(Number(values["CAP111_R13_C" + i])) ? Number(values["CAP111_R13_C" + i]) : 0;
            var CAP12_R7_C = !isNaN(Number(values["CAP12_R7_C" + i])) ? Number(values["CAP12_R7_C" + i]) : 0;

            if (CAP11_R13_C !== 0 && CAP12_R7_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-011. [@col] - Tab.1.1.1, rd.13 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R13_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R13_C': CAP11_R13_C, '@CAP12_R7_C': CAP12_R7_C })
                });
            }

            // else if (CAP11_R13_C === 0 && CAP12_R7_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R13_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-011. [@col] - Tab.1.1.1, rd.13 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R13_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R13_C': CAP11_R13_C, '@CAP12_R7_C': CAP12_R7_C })
            //     });
            // }
        }
    }
}



function validate33_011_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R13_C1 = 0, R7_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R13_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R13_C" + i + "_FILIAL"][j]))) {
                    R13_C1 = Number(values["CAP111_R13_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C1 = Number(values["CAP12_R7_C" + i + "_FILIAL"][j]);
                }

                if (R13_C1 !== 0 && R7_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R7_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R7_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-011-F. Dacă Tab. 1.1.1, rd.13, COL1 ≠ 0 atunci Tab. 1.2, rd.7, COL1 ≠ 0, @R13_C1 <> @R7_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R13_C1': R13_C1,
                                '@R7_C1': R7_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------
//------------






//-------------
function validate33_012(values) {
    // 33-011 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            // Tab. 1.1.1, daca rd.13 COL1≠0, atunci Tab. 1.2, rd.7 COL1≠0

            var CAP11_R13_C = !isNaN(Number(values["CAP111_R13_C" + i])) ? Number(values["CAP111_R13_C" + i]) : 0;
            var CAP12_R7_C = !isNaN(Number(values["CAP12_R7_C" + i])) ? Number(values["CAP12_R7_C" + i]) : 0;

            if (CAP11_R13_C !== 0 && CAP12_R7_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-012. [@col] - Tab.1.1.1, rd.13 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R13_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R13_C': CAP11_R13_C, '@CAP12_R7_C': CAP12_R7_C })
                });
            }

            // else if (CAP11_R13_C === 0 && CAP12_R7_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R13_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-012. [@col] - Tab.1.1.1, rd.13 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R13_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R13_C': CAP11_R13_C, '@CAP12_R7_C': CAP12_R7_C })
            //     });
            // }
        }
    }
}



function validate33_012_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R14_C1 = 0, R7_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R14_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R14_C" + i + "_FILIAL"][j]))) {
                    R14_C1 = Number(values["CAP111_R14_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C1 = Number(values["CAP12_R7_C" + i + "_FILIAL"][j]);
                }

                if (R14_C1 !== 0 && R7_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R7_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R7_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-012-F. Dacă Tab. 1.1.1, rd.14, COL1 ≠ 0 atunci Tab. 1.2, rd.7, COL1 ≠ 0, @R14_C1 <> @R7_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R14_C1': R14_C1,
                                '@R7_C1': R7_C1
                            })
                        });
                    }
                }
            }
        }
    }
}


//----------------------------------------------------------------------------



//-------------
function validate33_013(values) {
    // 33-013 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            // Tab. 1.1.1, daca rd.15 COL1≠0, atunci Tab. 1.2, rd.11 COL1≠0

            var CAP11_R15_C = !isNaN(Number(values["CAP111_R15_C" + i])) ? Number(values["CAP111_R15_C" + i]) : 0;
            var CAP12_R11_C = !isNaN(Number(values["CAP12_R11_C" + i])) ? Number(values["CAP12_R11_C" + i]) : 0;

            if (CAP11_R15_C !== 0 && CAP12_R11_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R11_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-013. [@col] - Tab.1.1.1, rd.15 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(11) COL(1) ≠ 0 și invers , @CAP11_R15_C - @CAP12_R11_C ≠ 0', { '@col': i, '@CAP11_R15_C': CAP11_R15_C, '@CAP12_R11_C': CAP12_R11_C })
                });
            }

            // else if (CAP11_R15_C === 0 && CAP12_R11_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R15_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-013. [@col] - Tab.1.1.1, rd.15 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(11) COL(1) ≠ 0 și invers , @CAP11_R15_C - @CAP12_R11_C ≠ 0', { '@col': i, '@CAP11_R15_C': CAP11_R15_C, '@CAP12_R11_C': CAP12_R11_C })
            //     });
            // }


        }
    }
}


//------------



function validate33_013_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R15_C1 = 0, R11_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R15_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R15_C" + i + "_FILIAL"][j]))) {
                    R15_C1 = Number(values["CAP111_R15_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R11_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R11_C" + i + "_FILIAL"][j]))) {
                    R11_C1 = Number(values["CAP12_R11_C" + i + "_FILIAL"][j]);
                }

                if (R15_C1 !== 0 && R11_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R11_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R11_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-013-F. Dacă Tab. 1.1.1, rd.15, COL1 ≠ 0 atunci Tab. 1.2, rd.11, COL1 ≠ 0, @R15_C1 <> @R11_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R15_C1': R15_C1,
                                '@R11_C1': R11_C1
                            })
                        });
                    }
                }
            }
        }
    }
}



//----------------------------------------------------------------------------


//----------------------------------------------------------------------------
//Modify this logic in this Tab.1.1.1, daca rd.18 COL1≠0, atunci Tab. 1.1.1, rd.17 COL1≠0  logic
function validate33_015(values) {
    // 33-015 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R18_C = !isNaN(Number(values["CAP111_R18_C" + i])) ? Number(values["CAP111_R18_C" + i]) : 0;
            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;

            if (CAP11_R18_C !== 0 && CAP11_R17_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-015. [@col] - Tab.1.1.1, rd.18 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R18_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R18_C': CAP11_R18_C, '@CAP11_R17_C': CAP11_R17_C })
                });
            }
            // else if (CAP11_R18_C === 0 && CAP11_R17_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R18_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-015. [@col] - Tab.1.1.1, rd.18 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R18_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R18_C': CAP11_R18_C, '@CAP11_R17_C': CAP11_R17_C })
            //     });
            // }
        }
    }
}



//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

function validate33_015_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R18_C1 = 0, R17_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R18_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_C" + i + "_FILIAL"][j]))) {
                    R18_C1 = Number(values["CAP111_R18_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C1 = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (R18_C1 !== 0 && R17_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R17_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-015-F. Dacă Tab. 1.1.1, rd.18, COL1 ≠ 0 atunci Tab. 1.1.1, rd.17, COL1 ≠ 0, @R18_C1 <> @R17_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R18_C1': R18_C1,
                                '@R17_C1': R17_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------



function validate33_016(values) {
    // 33-016 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R19_C = !isNaN(Number(values["CAP111_R19_C" + i])) ? Number(values["CAP111_R19_C" + i]) : 0;
            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;

            if (CAP11_R19_C !== 0 && CAP11_R17_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-016. [@col] - Tab.1.1.1, rd.19 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(17) COL(1) ≠ 0 și invers , @CAP11_R19_C - @CAP11_R17_C ≠ 0', { '@col': i, '@CAP11_R19_C': CAP11_R19_C, '@CAP11_R17_C': CAP11_R17_C })
                });
            }


        }
    }
}


//-------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------

function validate33_016_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R19_C1 = 0, R17_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R19_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R19_C" + i + "_FILIAL"][j]))) {
                    R19_C1 = Number(values["CAP111_R19_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C1 = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (R19_C1 !== 0 && R17_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R17_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-016-F. Dacă Tab. 1.1.1, rd.19, COL1 ≠ 0 atunci Tab. 1.1.1, rd.17, COL1 ≠ 0, @R19_C1 <> @R17_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R19_C1': R19_C1,
                                '@R17_C1': R17_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------

//----------------------------------------------------------------------------



function validate33_017(values) {
    // 33-017 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R20_C = !isNaN(Number(values["CAP111_R20_C" + i])) ? Number(values["CAP111_R20_C" + i]) : 0;
            var CAP12_R3_C = !isNaN(Number(values["CAP12_R3_C" + i])) ? Number(values["CAP12_R3_C" + i]) : 0;

            if (CAP11_R20_C !== 0 && CAP12_R3_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R3_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-017. [@col] - Tab.1.1.1, rd.20 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2, Rînd.(3) COL(1) ≠ 0 și invers , @CAP11_R20_C - @CAP12_R3_C ≠ 0', { '@col': i, '@CAP11_R20_C': CAP11_R20_C, '@CAP12_R3_C': CAP12_R3_C })
                });
            } else if (CAP11_R20_C === 0 && CAP12_R3_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R20_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-017. [@col] - Tab.1.1.1, rd.20 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2, Rînd.(3) COL(1) ≠ 0 și invers , @CAP11_R20_C - @CAP12_R3_C ≠ 0', { '@col': i, '@CAP11_R20_C': CAP11_R20_C, '@CAP12_R3_C': CAP12_R3_C })
                });
            }
        }
    }
}



function validate33_017_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1; i <= 2; i++) {
            if (i !== 20) {

                var R20_C1 = 0, R3_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
                    R20_C1 = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C1 = Number(values["CAP12_R3_C" + i + "_FILIAL"][j]);
                }

                // If CAP111_R20_C != 0 and CAP12_R3_C == 0
                if (R20_C1 !== 0 && R3_C1 === 0) {
                    var errorKey = 'CAP12_R3_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R3_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-017-F. Dacă Tab. 1.1.1, rd.20, COL1 ≠ 0 atunci Tab. 1.2, Rînd.(3), COL1 ≠ 0, @R20_C1 <> @R3_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R20_C1': R20_C1,
                                '@R3_C1': R3_C1
                            })
                        });
                    }
                }

                // If CAP111_R20_C == 0 and CAP12_R3_C != 0
                else if (R20_C1 === 0 && R3_C1 !== 0) {
                    var errorKeyInverse = 'CAP111_R20_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKeyInverse)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKeyInverse);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R20_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-017-F. Dacă Tab. 1.1.1, rd.20, COL1 = 0 atunci Tab. 1.2, Rînd.(3), COL1 trebuie să fie tot 0, @R20_C1 <> @R3_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R20_C1': R20_C1,
                                '@R3_C1': R3_C1
                            })
                        });
                    }
                }
            }
        }
    }
}



function validate33_018(values) {
    // 33-018 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R20_C = !isNaN(Number(values["CAP111_R20_C" + i])) ? Number(values["CAP111_R20_C" + i]) : 0;
            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;

            if (CAP11_R20_C !== 0 && CAP11_R7_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP111_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-018. [@col] - Tab.1.1.1, rd.20 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.1.1, Rînd.(7) COL(1) ≠ 0 și nu invers , @CAP11_R20_C - @CAP11_R7_C ≠ 0', { '@col': i, '@CAP11_R20_C': CAP11_R20_C, '@CAP11_R7_C': CAP11_R7_C })
                });
            }
        }
    }
}





function validate33_018_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R20_C1 = 0, R7_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R20_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R20_C" + i + "_FILIAL"][j]))) {
                    R20_C1 = Number(values["CAP111_R20_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C1 = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (R20_C1 !== 0 && R7_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP111_R7_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP111_R7_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-018-F. Dacă Tab. 1.1.1, rd.20, COL1 ≠ 0 atunci Tab. 1.1.1, rd.7, COL1 ≠ 0, @R20_C1 <> @R7_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R20_C1': R20_C1,
                                '@R7_C1': R7_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------







//-----------------------------------------------------------------------------
//Modify this logic in this -- Tab.1.1.1, daca rd.21 COL1≠0, atunci Tab.1.2, rd.10 COL1≠0, si nu invers  ---  logic
function validate33_019(values) {
    // 33-019 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R21_C = !isNaN(Number(values["CAP111_R21_C" + i])) ? Number(values["CAP111_R21_C" + i]) : 0;
            var CAP12_R10_C = !isNaN(Number(values["CAP12_R10_C" + i])) ? Number(values["CAP12_R10_C" + i]) : 0;

            if (CAP11_R21_C !== 0 && CAP12_R10_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-019. [@col] - Tab.1.1.1, rd.21 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2, Rînd.(10) COL(1) ≠ 0 și nu invers , @CAP11_R21_C - @CAP12_R10_C ≠ 0', { '@col': i, '@CAP11_R21_C': CAP11_R21_C, '@CAP12_R10_C': CAP12_R10_C })
                });
            }
        }
    }
}



//-------------------------------------------------------------------------------------------


function validate33_019_F(values) {
    // Set to keep track of reported errors
    var reportedErrors = new Set();

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R21_C1 = 0, R10_C1 = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R21_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R21_C" + i + "_FILIAL"][j]))) {
                    R21_C1 = Number(values["CAP111_R21_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C1 = Number(values["CAP12_R10_C" + i + "_FILIAL"][j]);
                }

                if (R21_C1 !== 0 && R10_C1 === 0) {
                    // Create a unique key for this error
                    var errorKey = 'CAP12_R10_C' + i + '_FILIAL_' + j;

                    // Check if this error has already been reported
                    if (!reportedErrors.has(errorKey)) {
                        // Mark this error as reported
                        reportedErrors.add(errorKey);

                        // Add the error message
                        webform.errors.push({
                            'fieldName': 'CAP12_R10_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-019-F. Dacă Tab. 1.1.1, rd.21, COL1 ≠ 0 atunci Tab. 1.2, rd.10, COL1 ≠ 0, @R21_C1 <> @R10_C1', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R21_C1': R21_C1,
                                '@R10_C1': R10_C1
                            })
                        });
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------


//Modify this logic in this -- Tab. 1.1.1, rd.10 COL1 ≥ Tab.1.1.1, rd.11 COL1 ---  logic
function validate33_007(values) {
    // 33-007 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R10_C = !isNaN(Number(values["CAP111_R10_C" + i])) ? Number(values["CAP111_R10_C" + i]) : 0;
            var CAP11_R11_C = !isNaN(Number(values["CAP111_R11_C" + i])) ? Number(values["CAP111_R11_C" + i]) : 0;

            if (CAP11_R10_C < CAP11_R11_C) {
                webform.errors.push({
                    'fieldName': 'CAP111_R10_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-007. [@col] - Tab.1.1.1, rd.10 pe COL (@col), COL(1) trebuie să fie ≥ Tab 1.1.1, Rînd.(11) COL(1) , @CAP11_R10_C - @CAP11_R11_C', { '@col': i, '@CAP11_R10_C': CAP11_R10_C, '@CAP11_R11_C': CAP11_R11_C })
                });
            }
        }
    }
}


//-------------------------------------------------------------------------------------------

function validate33_007_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 1; i <= 2; i++) {
            if (i !== 20) {
                var R10_C = 0, R11_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R10_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R10_C" + i + "_FILIAL"][j]))) {
                    R10_C = Number(values["CAP111_R10_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R11_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R11_C" + i + "_FILIAL"][j]))) {
                    R11_C = Number(values["CAP111_R11_C" + i + "_FILIAL"][j]);
                }

                if (R10_C < R11_C) {
                    webform.errors.push({
                        'fieldName': 'CAP111_R10_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-007-F. [@col_FILIAL] - COL(@col_FILIAL), Tab. 1.1.1, rd.10 COL1 trebuie să fie mai mare sau egală cu Tab. 1.1.1, rd.11 COL1, @R10_C < @R11_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R10_C': R10_C,
                            '@R11_C': R11_C
                        })
                    });
                }
            }
        }
    }
}

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

function validate33_014(values) {
    // 33-014 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R17_C = !isNaN(Number(values["CAP111_R17_C" + i])) ? Number(values["CAP111_R17_C" + i]) : 0;
            var CAP11_R18_C = !isNaN(Number(values["CAP111_R18_C" + i])) ? Number(values["CAP111_R18_C" + i]) : 0;

            if (CAP11_R17_C < CAP11_R18_C) {
                webform.errors.push({
                    'fieldName': 'CAP111_R17_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-014. [@col] - Tab.1.1.1, rd.17 pe COL (@col), COL(1) trebuie să fie ≥ Tab 1.1.1, Rînd.(18) COL(1) , @CAP11_R17_C - @CAP11_R18_C', { '@col': i, '@CAP11_R17_C': CAP11_R17_C, '@CAP11_R18_C': CAP11_R18_C })
                });
            }
        }
    }
}




function validate33_014_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 2; i++) {
            if (i !== 20) {
                var R17_C = 0, R18_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R17_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R17_C" + i + "_FILIAL"][j]))) {
                    R17_C = Number(values["CAP111_R17_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP111_R18_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R18_C" + i + "_FILIAL"][j]))) {
                    R18_C = Number(values["CAP111_R18_C" + i + "_FILIAL"][j]);
                }

                if (R17_C < R18_C) {
                    webform.errors.push({
                        'fieldName': 'CAP111_R17_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-014-F. [@col_FILIAL] - COL(@col_FILIAL), Tab. 1.1.1, rd.17 COL1 trebuie să fie mai mare sau egală cu Tab. 1.1.1, rd.18 COL1, @R17_C < @R18_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R17_C': R17_C,
                            '@R18_C': R18_C
                        })
                    });
                }
            }
        }
    }
}


//----------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------

function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }
    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }
    return toFloat(a.error_code) - toFloat(b.error_code);
}
