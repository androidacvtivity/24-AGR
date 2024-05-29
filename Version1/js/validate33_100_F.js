function validate33_100_F(values) {

    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        var CAP_CUATM_FILIAL = isNaN(String(values.CAP_CUATM_FILIAL[j])) ? "" : String(values.CAP_CUATM_FILIAL[j]);

        for (var i = 0; i <= 8; i++) //
        {
            if (i !== 2 || i !== 7) {
                var R5_C = 0;
                var count = 0;
                count = count + i;




                if (values["CAP1_R5_C" + i + "_FILIAL"] && !isNaN(Number(values["CAP1_R5_C" + i + "_FILIAL"][j]))) {
                    R5_C = Number(values["CAP1_R5_C" + i + "_FILIAL"][j]);
                }

                // Here it is checked by columns.
                //If on all 6 columns of the row there are no data to display the error, if at least on one column there are data not to display.
                //I added to the conditions that are count === 6), but it is not correct
                //How is corerctly ? 
                if (R5_C === 0 && CAP_CUATM_FILIAL !== "" && count === 6) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R5_C' + i + '_FILIAL',
                        'index': j,
                        'weight': 19,
                        'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-002-F. [@col_FILIAL] - COL(@col_FILIAL), Dacă exstă filial atunci exstă și date, @R5_C', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R5_C': R5_C })
                    });
                }

            }


        }
    }
}