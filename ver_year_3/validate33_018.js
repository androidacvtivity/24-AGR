
//Aceasta este o validare in js in drupal cu urmatoarea logica 
//-----------------------------------------------------------------------------
//Tab.1.1.1, daca rd.20 COL1≠0, atunciTab.1.1.1, rd.7 COL1 ≠0, si nu invers  ---  logic
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

//----------------------------------------------------------------------------
//Validarea 33-018 cu variabila CAP_CUATM_FILIAL
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

//Aceasta eset o validare 
//Tab.1.1.1, daca rd.20 COL1≠0, atunciTab.1.2, rd.3 COL1 ≠0, si invers  ---  logic
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

// Creaza dupa exemplu de mai sus
// validarea cu variabila CAP_CUATM_FILIAL
// pentru Cod eroare: 33-017 