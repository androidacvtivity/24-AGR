function validate33_100_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        var nonZeroCount = 0;

        for (var i = 0; i <= 8; i++) {
            if (i !== 2 && i !== 7) {
                var R5_C = 0;

                if (values["CAP1_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R5_C" + i + "_FILIAL"][j]))) {
                    R5_C = Number(values["CAP1_R5_C" + i + "_FILIAL"][j]);
                }

                if (R5_C !== 0) {
                    nonZeroCount++;
                }
            }
        }

        // If CAP_CUATM_FILIAL is not empty and all relevant columns are zero
        if (CAP_CUATM_FILIAL !== "" && nonZeroCount === 0) {
            for (var i = 0; i <= 8; i++) {
                if (i !== 2 && i !== 7) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R5_C' + i + '_FILIAL',
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
            if (CAP_CUATM_FILIAL === "" && nonZeroCount === 0) {
                for (var i = 0; i <= 8; i++) {
                    if (i !== 2 && i !== 7) {
                        webform.errors.push({
                            'fieldName': 'CAP_NUM_FILIAL',
                            'index': j,
                            'weight': 19,
                            'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-100-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', {
                                '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL,
                                '@col_FILIAL': i,
                                '@R5_C': 0
                            })
                        });

                        webform.errors.push({
                            'fieldName': 'CAP1_R5_C' + i + '_FILIAL',
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

