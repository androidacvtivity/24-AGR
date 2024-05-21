function validate33_002(values) {
    // 33-002 validation logic
    for (var i = 1; i <= 6; i++) {
        if (i !== 2 ) {
           
            var CAP1_R2_C = !isNaN(Number(values["CAP1_R2_C" + i])) ? Number(values["CAP1_R2_C" + i]) : 0;
            var CAP1_R3_C = !isNaN(Number(values["CAP1_R3_C" + i])) ? Number(values["CAP1_R_C" + i]) : 0;

      //      Tab. 1.1 daca rd.2 Col. 1, 3, 4, 5, 6 ≠0 atunci Tab.1.1 rd.3 Col. 1, 3, 4, 5, 6 ≠0 si invers         

            if (CAP1_R2_C !== 0 && CAP1_R3_C === 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R2_C' + i,
                    'weight': 19,
                    'index': i,
                    'msg': Drupal.t('Cod eroare: 33-002. [@col] - Tab.1.1, rd.2 pe COL (@col), COL(1, 3, 4, 5, 6)  ≠ 0  atunci Rînd.(3))  COL(1, 3, 4, 5, 6), @CAP1_R2_C  -  @CAP1_R3_C', { '@col': i, '@CAP1_R2_C': CAP1_R2_C, '@CAP1_R3_C': CAP1_R3_C })
                });
            }
        }
    }
}

