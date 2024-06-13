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



    validate33_001(values);
    validate33_001_F(values);
    validate33_002(values);
    validate33_002_F(values);
    validate33_003(values);
    validate33_003_F(values);
    validate33_004(values);
    validate33_005(values);
    validate33_005_F(values);
    validate33_006(values);
    validate33_006_F(values);
    validate33_008(values);
    validate33_008_F(values);

    validate33_009(values);
    validate33_010(values);
    validate33_011(values);
    validate33_012(values);
    validate33_013(values);
    validate33_015(values);
    validate33_016(values);
    validate33_017(values);
    validate33_018(values);
    validate33_019(values);
     validate33_007(values);
    validate33_014(values);
    
    // Call the 100_F validation function
    // validate33_100_F(values);

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

            if (values["CAP1_R11_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R11_C" + i + "_FILIAL"][j]))) {
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



function validate33_002(values) {
    // 33-002 validation logic
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




//----------------------------------------------------------------------------


// function validate33_100_F(values) {
//     for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
//       //  var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

//         var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);

//         var nonZeroCount = 0, nonZeroCountR2 = 0, nonZeroCountR3 = 0, nonZeroCountR4 = 0;

//         for (var i = 0; i <= 8; i++) {
//             if (i !== 2 && i !== 7 && i !== 5) {
//                 var R5_C = 0, R2_C = 0, R3_C = 0, R4_C = 0;

//                 if (values["CAP11_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R5_C" + i + "_FILIAL"][j]))) {
//                     R5_C = Number(values["CAP11_R5_C" + i + "_FILIAL"][j]);
//                 }

//                 if (values["CAP11_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R2_C" + i + "_FILIAL"][j]))) {
//                     R2_C = Number(values["CAP11_R2_C" + i + "_FILIAL"][j]);
//                 }

//                 if (values["CAP11_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R3_C" + i + "_FILIAL"][j]))) {
//                     R3_C = Number(values["CAP11_R3_C" + i + "_FILIAL"][j]);
//                 }

//                 if (values["CAP11_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP11_R4_C" + i + "_FILIAL"][j]))) {
//                     R4_C = Number(values["CAP11_R4_C" + i + "_FILIAL"][j]);
//                 }


//                 if (R5_C !== 0) {
//                     nonZeroCount++;
//                 }

//                 if (R2_C !== 0) {
//                     nonZeroCountR2++;
//                 }

//                 if (R3_C !== 0) {
//                     nonZeroCountR3++;
//                 }

//                 if (R4_C !== 0) {
//                     nonZeroCountR4++;
//                 }



//             }
//         }

//         // If CAP_CUATM_FILIAL is not empty and all relevant columns are zero
//         if (CAP_CUATM_FILIAL !== "" && (nonZeroCount === 0)) {
//             for (var i = 0; i <= 8; i++) {
//                 if (i !== 2 && i !== 7 && i !== 5) {
//                     webform.errors.push({
//                         'fieldName': 'CAP11_R2_C' + i + '_FILIAL',
//                         'index': j,
//                         'weight': 19,
//                         'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
//                             '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
//                             '@col_FILIAL': i,
//                             '@R5_C': 0
//                         })
//                     });

//                     webform.errors.push({
//                         'fieldName': 'CAP11_R3_C' + i + '_FILIAL',
//                         'index': j,
//                         'weight': 19,
//                         'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
//                             '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
//                             '@col_FILIAL': i,
//                             '@R5_C': 0
//                         })
//                     });
//                 }
//             }
//         }


//         else
//             if (CAP_CUATM_FILIAL === "" && (nonZeroCount === 0)) {
//                 for (var i = 0; i <= 8; i++) {
//                     if (i !== 2 && i !== 7) {
//                         webform.errors.push({
//                             'fieldName': 'CAP11_R2_C' + i + '_FILIAL',
//                             'index': j,
//                             'weight': 19,
//                             'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
//                                 '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
//                                 '@col_FILIAL': i,
//                                 '@R5_C': 0
//                             })
//                         });

//                         webform.errors.push({
//                             'fieldName': 'CAP11_R3_C' + i + '_FILIAL',
//                             'index': j,
//                             'weight': 19,
//                             'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
//                                 '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
//                                 '@col_FILIAL': i,
//                                 '@R5_C': 0
//                             })
//                         });
//                     }
//                 }
//             }
//     }
// }





//----------------------------------------------------------------------------

function validate33_003(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 2; i++) {
        if (i !== 20) {

            var CAP11_R7_C = !isNaN(Number(values["CAP111_R7_C" + i])) ? Number(values["CAP111_R7_C" + i]) : 0;
            var CAP12_R3_C = !isNaN(Number(values["CAP12_R3_C" + i])) ? Number(values["CAP12_R3_C" + i]) : 0;

            if (CAP11_R7_C !== 0 && CAP12_R3_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP12_R3_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-003. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(3) COL(1) ≠ 0 și invers , @CAP11_R7_C - @CAP12_R3_C ≠ 0', { '@col': i, '@CAP11_R7_C': CAP11_R7_C, '@CAP12_R3_C': CAP12_R3_C })
                });
            } 
            
             else if (CAP11_R7_C === 0 && CAP12_R3_C !== 0) {
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
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R7_C = 0, R3_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP111_R7_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C = Number(values["CAP12_R3_C" + i + "_FILIAL"][j]);
                }

                if ((R7_C !== 0 && R3_C === 0) || (R7_C === 0 && R3_C !== 0)) {
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

//This is js code in Drupal
//Modify this logic in this -- Tab. 1.1.1, daca rd. 7 COL1 ≠0 atunci Tab 1.1.1, rd.20 COL1 ≠0, si invers ---  logic


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
                webform.errors.push({
                    'fieldName': 'CAP12_R7_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-005. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R8_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R8_C': CAP11_R8_C, '@CAP12_R7_C': CAP12_R7_C })
                });
            } 
            
            
            // else if (CAP11_R8_C === 0 && CAP12_R7_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R8_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-005. [@col] - Tab.1.1.1, rd.7 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(7) COL(1) ≠ 0 și invers , @CAP11_R8_C - @CAP12_R7_C ≠ 0', { '@col': i, '@CAP11_R8_C': CAP11_R8_C, '@CAP12_R7_C': CAP12_R7_C })
            //     });
            // }
        }
    }
}
//----------------------------------------------------------------------------



//----------------------------------------------------------------------------

//This is js code in Drupal
//Modify this logic in this -- Tab. 1.1.1, daca rd. 8 COL1 ≠0 atunci Tab.1.2, rd.7 COL1 ≠0 si invers  ---  logic


function validate33_005_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R8_C = 0, R7_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R8_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R8_C" + i + "_FILIAL"][j]))) {
                    R8_C = Number(values["CAP111_R8_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R7_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R7_C" + i + "_FILIAL"][j]))) {
                    R7_C = Number(values["CAP12_R7_C" + i + "_FILIAL"][j]);
                }

                if ((R8_C !== 0 && R7_C === 0) || (R8_C === 0 && R7_C !== 0)) {
                    webform.errors.push({
                        'fieldName': R8_C !== 0 ? 'CAP12_R7_C' + i + '_FILIAL' : 'CAP111_R8_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-005-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(8) COL(1) ≠ 0 atunci Rînd.(7) COL(1) ≠ 0, @R8_C <> @R7_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R8_C': R8_C, '@R7_C': R7_C })
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
                webform.errors.push({
                    'fieldName': 'CAP12_R8_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-006. [@col] - Tab.1.1.1, rd.9 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(8) COL(1) ≠ 0 și invers , @CAP11_R9_C - @CAP12_R8_C ≠ 0', { '@col': i, '@CAP11_R9_C': CAP11_R9_C, '@CAP12_R8_C': CAP12_R8_C })
                });
            } 
            
            // else if (CAP11_R9_C === 0 && CAP12_R8_C !== 0) {
            //     webform.errors.push({
            //         'fieldName': 'CAP111_R9_C' + i,
            //         'weight': 19,
            //         'index': i,
            //         'msg': Drupal.t('Cod eroare: 33-006. [@col] - Tab.1.1.1, rd.9 pe COL (@col), COL(1) ≠ 0 atunci Tab 1.2 Rînd.(8) COL(1) ≠ 0 și invers , @CAP11_R9_C - @CAP12_R8_C ≠ 0', { '@col': i, '@CAP11_R9_C': CAP11_R9_C, '@CAP12_R8_C': CAP12_R8_C })
            //     });
            // }
        }
    }
}
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------

//This is js code in Drupal
//Modify this logic in this -- Tab. 1.1.1, daca rd. 9 COL1≠0 atunci Tab. 1.2, rd.8 COL1 ≠0 si invers   ---  logic

//This cod enot repeat
function validate33_006_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R9_C = 0, R8_C = 0;

                // Check if properties exist before accessing them
                if (values["CAP111_R9_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP111_R9_C" + i + "_FILIAL"][j]))) {
                    R9_C = Number(values["CAP111_R9_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP12_R8_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP12_R8_C" + i + "_FILIAL"][j]))) {
                    R8_C = Number(values["CAP12_R8_C" + i + "_FILIAL"][j]);
                }

                if ((R9_C !== 0 && R8_C === 0) || (R9_C === 0 && R8_C !== 0)) {
                    webform.errors.push({
                        'fieldName': R9_C !== 0 ? 'CAP12_R8_C' + i + '_FILIAL' : 'CAP111_R9_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-006-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(9) COL(1) ≠ 0 atunci Rînd.(8) COL(1) ≠ 0, @R9_C <> @R8_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R9_C': R9_C, '@R8_C': R8_C })
                    });
                }
            }
        }
    }
}


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

//This is js code in Drupal
//Modify this logic in this -- TTab. 1.1.1, daca rd.10 COL1≠0, atunci Tab.1.2 rd.10 COL1 ≠0 si nu invers    ---  logic
//Without unit test


function validate33_008_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
                var R10_C1 = 0, R10_C1_T2 = 0;

                // Check if properties exist before accessing them and if they are numbers
                if (values["CAP111_R10_C1_FILIAL"] && !isNaN(Number(values["CAP111_R10_C1_FILIAL"][j]))) {
                    R10_C1 = Number(values["CAP111_R10_C1_FILIAL"][j]);
                }

                if (values["CAP12_R10_C1_FILIAL"] && !isNaN(Number(values["CAP12_R10_C1_FILIAL"][j]))) {
                    R10_C1_T2 = Number(values["CAP12_R10_C1_FILIAL"][j]);
                }

                // Check the condition: If R10_C1 (Tab 1.1.1) ≠ 0 then R10_C1_T2 (Tab 1.2) should also be ≠ 0
                if (R10_C1 !== 0 && R10_C1_T2 === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP12_R10_C1_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-008-F. Dacă Tab. 1.1.1, rd.10, COL1 ≠ 0 atunci Tab. 1.2, rd.10, COL1 ≠ 0, @R10_C1 <> @R10_C1_T2', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@R10_C1': R10_C1, '@R10_C1_T2': R10_C1_T2 })
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


//Modifica aceasta functie sa fie cu logica Tab.1.1.1, daca rd.13 COL1≠0, atunci Tab.1.2, rd.7 COL1 ≠0  dupa exemplu dat 
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


//------------

//Modifica aceasta functie sa fie cu logica Tab.1.1.1, daca rd.14 COL1≠0, atunci Tab.1.2, rd.7 COL1 ≠0  dupa exemplu dat 
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



//Modifica aceasta functie sa fie cu logica -- Tab.1.1.1, daca rd.15 COL1≠0, atunci Tab.1.2, rd.11 COL1 ≠0 --  dupa exemplu dat 
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


//Modify this logic in this -- Tab.1.1.1, daca rd.19 COL1≠0, atunci Tab.1.1.1, rd.17 COL1≠0 ---  logic
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


//Modify this logic in this -- Tab.1.1.1, daca rd.20 COL1≠0, atunciTab.1.2, rd.3 COL1 ≠0, si invers  ---  logic
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

//-----------------------------------------------------------------------------
//Modify this logic in this -- Tab.1.1.1, daca rd.20 COL1≠0, atunciTab.1.1.1, rd.7 COL1 ≠0, si nu invers  ---  logic
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



//-------------------------------------------------------------------------------------------


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
