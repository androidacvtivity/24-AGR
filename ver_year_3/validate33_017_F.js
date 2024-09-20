// Validarea pentru Cod eroare: 33-017 cu variabila CAP_CUATM_FILIAL
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
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-017. Dacă Tab. 1.1.1, rd.20, COL1 ≠ 0 atunci Tab. 1.2, Rînd.(3), COL1 ≠ 0, @R20_C1 <> @R3_C1', {
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
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-017. Dacă Tab. 1.1.1, rd.20, COL1 = 0 atunci Tab. 1.2, Rînd.(3), COL1 trebuie să fie tot 0, @R20_C1 <> @R3_C1', {
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
