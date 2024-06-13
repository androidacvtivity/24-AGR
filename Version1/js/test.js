function validate33_008_F(values) {
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 6; i++) {
            if (i !== 2) {
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
                        'fieldName': R10_C1 !== 0 ? 'CAP12_R10_C' + i + '_FILIAL' : 'CAP111_R10_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-008-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă Rînd.(10) COL(1) ≠ 0 atunci Rînd.(10) COL(1) ≠ 0, @R10_C1 <> @R10_C2', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R10_C1': R10_C1, '@R10_C2': R10_C2 })
                    });
                }
            }
        }
    }
}
