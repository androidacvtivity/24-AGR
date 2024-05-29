//In this logic of the function it is correctly use only if or if and else - It is js code in Drupal

function validate33_002_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) {
            var R3_C = 0, R2_C = 0;

            // Check if properties exist before accessing them
        
            if (values["CAP1_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R2_C" + i + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP1_R2_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP1_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R3_C" + i + "_FILIAL"][j]))) {
                R3_C = Number(values["CAP1_R3_C" + i + "_FILIAL"][j]);
            }

       
        

            if (R2_C === 0 && R3_C !== 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R2_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
                });
            } else 
                if (R2_C !== 0 && R3_C === 0) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R3_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(2) COL(1, 3, 4, 5, 6) ≠ 0  atunci  Rînd.(3) COL(1, 3, 4, 5, 6) ≠ 0, @R2_C <> @R3_C ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R2_C': R2_C, '@R3_C': R3_C })
                    });
                }




        }
    }
}
