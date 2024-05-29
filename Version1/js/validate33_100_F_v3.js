function validate33_100_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        //  var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);

        var nonZeroCount = 0, nonZeroCountR2 = 0, nonZeroCountR3 = 0, nonZeroCountR4 = 0;

        for (var i = 0; i <= 8; i++) {
            if (i !== 2 && i !== 7 && i !== 5) {
                var R5_C = 0, R2_C = 0, R3_C = 0, R4_C = 0;

                if (values["CAP1_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R5_C" + i + "_FILIAL"][j]))) {
                    R5_C = Number(values["CAP1_R5_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP1_R2_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R2_C" + i + "_FILIAL"][j]))) {
                    R2_C = Number(values["CAP1_R2_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP1_R3_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R3_C" + i + "_FILIAL"][j]))) {
                    R3_C = Number(values["CAP1_R3_C" + i + "_FILIAL"][j]);
                }

                if (values["CAP1_R4_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R4_C" + i + "_FILIAL"][j]))) {
                    R4_C = Number(values["CAP1_R4_C" + i + "_FILIAL"][j]);
                }


                if (R5_C !== 0) {
                    nonZeroCount++;
                }

                if (R2_C !== 0) {
                    nonZeroCountR2++;
                }

                if (R3_C !== 0) {
                    nonZeroCountR3++;
                }

                if (R4_C !== 0) {
                    nonZeroCountR4++;
                }



            }
        }

        // If CAP_CUATM_FILIAL is not empty and all relevant columns are zero
        if (CAP_CUATM_FILIAL !== "" && (nonZeroCount === 0)) {
            for (var i = 0; i <= 8; i++) {
                if (i !== 2 && i !== 7 && i !== 5) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R2_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R5_C': 0
                        })
                    });

                    webform.errors.push({
                        'fieldName': 'CAP1_R3_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                            '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                            '@col_FILIAL': i,
                            '@R5_C': 0
                        })
                    });
                }
            }
        }


        else
            if (CAP_CUATM_FILIAL === "" && (nonZeroCount === 0)) {
                for (var i = 0; i <= 8; i++) {
                    if (i !== 2 && i !== 7) {
                        webform.errors.push({
                            'fieldName': 'CAP1_R2_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R5_C': 0
                            })
                        });

                        webform.errors.push({
                            'fieldName': 'CAP1_R3_C' + i + '_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R5_C': 0
                            })
                        });
                    }
                }
            }
    }
}

