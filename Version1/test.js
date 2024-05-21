
function validate33_001_F(values) {

for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
    if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
        var CAP_CUATM_FILIAL = 0;
        CAP_CUATM_FILIAL  = String(values.CAP_CUATM_FILIAL[j]);
    }


   // Uncaught TypeError: values[(("CAP1_R5_C" + i) + "_FILIAL")] is undefined
   
    for (var i = 0; i <= 8; i++) {
        if (!isNaN(Number(values["CAP1_R5_C" + (i) + "_FILIAL"][j]))) {
            var R5_C = 0;
            R5_C = Number(values["CAP1_R5_C" + (i) + "_FILIAL"][j]);
        }
        
        if (!isNaN(Number(values["CAP1_R1_C" + (i) + "_FILIAL"][j]))) {
            var R1_C = 0;
            R1_C = Number(values["CAP1_R1_C" + (i) + "_FILIAL"][j]);
        }


        if (!isNaN(Number(values["CAP1_R2_C" + (i) + "_FILIAL"][j]))) {
            var R2_C = 0;
            R2_C = Number(values["CAP1_R2_C" + (i) + "_FILIAL"][j]);
        }


        if (!isNaN(Number(values["CAP1_R4_C" + (i) + "_FILIAL"][j]))) {
            var R4_C = 0;
            R4_C = Number(values["CAP1_R4_C" + (i) + "_FILIAL"][j]);
        }

        var result_33_001_F = R1_C + R2_C - R4_C;

        if ((R5_C !== result_33_001_F)) {
            webform.errors.push({
                'fieldName': 'CAP1_R5_C' + (i) + '_FILIAL',
                'index': j,
                'weight': 19,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
            });
        }
    }
 }
    
}



/////////////////////////////



function validate33_001_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) {
            var R5_C = 0, R1_C = 0, R2_C = 0, R4_C = 0;

            // Check if properties exist before accessing them
            if (values["CAP1_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R5_C" + i + "_FILIAL"][j]))) {
                R5_C = Number(values["CAP1_R5_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP1_R1_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R1_C" + i + "_FILIAL"][j]))) {
                R1_C = Number(values["CAP1_R1_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP1_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R2_C" + i + "_FILIAL"][j]))) {
                R2_C = Number(values["CAP1_R2_C" + i + "_FILIAL"][j]);
            }

            if (values["CAP1_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R4_C" + i + "_FILIAL"][j]))) {
                R4_C = Number(values["CAP1_R4_C" + i + "_FILIAL"][j]);
            }

            var result_33_001_F = R1_C + R2_C - R4_C;

            if (R5_C !== result_33_001_F) {
                webform.errors.push({
                    'fieldName': 'CAP1_R5_C' + i + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001-F. [@col_FILIAL] - COL(@col_FILIAL), Rînd.(5) COL(1,3,4,5,6,8) = Rînd.(1+2-4) COL(1,3,4,5,6,8), @R5_C <> @result_33_001_F ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C, '@result_33_001_F': result_33_001_F })
                });
            }
        }
    }
}
