(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.agro24 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }
})(jQuery)

webform.validators.agro24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;
   
   
    validatePhoneNumber(values.PHONE);


    // Call the 33-001 validation function
    validate33_001(values);

    // Call the 33-001_F validation function
    validate33_001_F(values);

   
   
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
    for (var i = 1; i <= 8; i++) {
        if (i !== 2 && i !== 7) {
            var CAP1_R5_C = !isNaN(Number(values["CAP1_R5_C" + i])) ? Number(values["CAP1_R5_C" + i]) : 0;
            var CAP1_R1_C = !isNaN(Number(values["CAP1_R1_C" + i])) ? Number(values["CAP1_R1_C" + i]) : 0;
            var CAP1_R2_C = !isNaN(Number(values["CAP1_R2_C" + i])) ? Number(values["CAP1_R2_C" + i]) : 0;
            var CAP1_R4_C = !isNaN(Number(values["CAP1_R4_C" + i])) ? Number(values["CAP1_R4_C" + i]) : 0;

            var result_33_001 = CAP1_R1_C + CAP1_R2_C - CAP1_R4_C;

            if (CAP1_R5_C !== result_33_001) {
                webform.errors.push({
                    'fieldName': 'CAP1_R5_C' + i,
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
        if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
            var CAP_CUATM_FILIAL = 0;
            CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        }



        if (!isNaN(Number(values.CAP1_R5_C1_FILIAL[j]))) {
            var CAP1_R5_C1_FILIAL = 0; 
            CAP1_R5_C1_FILIAL = Number(values.CAP1_R5_C1_FILIAL[j]);
        }

        if (!isNaN(Number(values.CAP1_R2_C1_FILIAL[j]))) {
            var CAP1_R2_C1_FILIAL = 0;
            CAP1_R2_C1_FILIAL = Number(values.CAP1_R2_C1_FILIAL[j]);
        }



        // for (var i = 1; i <= 8; i++) {
        //     if (!isNaN(Number(values["CAP1_R5_C" + i + "_FILIAL"][j]))) {
        //         var R5_C = 0;
        //         R5_C = Number(values["CAP1_R5_C" + (i) + "_FILIAL"][j]);
        //     }

        //     if (!isNaN(Number(values["CAP1_R1_C" + (i) + "_FILIAL"][j]))) {
        //         var R1_C = 0;
        //         R1_C = Number(values["CAP1_R1_C" + (i) + "_FILIAL"][j]);
        //     }


        //     if (!isNaN(Number(values["CAP1_R2_C" + (i) + "_FILIAL"][j]))) {
        //         var R2_C = 0;
        //         R2_C = Number(values["CAP1_R2_C" + (i) + "_FILIAL"][j]);
        //     }


        //     if (!isNaN(Number(values["CAP1_R4_C" + (i) + "_FILIAL"][j]))) {
        //         var R4_C = 0;
        //         R4_C = Number(values["CAP1_R4_C" + (i) + "_FILIAL"][j]);
        //     }

        var result_33_001_F = CAP1_R2_C1_FILIAL;

        if ((CAP1_R5_C1_FILIAL !== result_33_001_F)) {
                webform.errors.push({
                    'fieldName': 'CAP1_R5_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Rînd.(210) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }


    }

}









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
