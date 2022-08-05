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

// Start 32-010

    var col1 = Number(values.CAP1_R050_C1);
    var col2 = Number(values.CAP1_R110_C1);

    if ((col1 != 0 && col2 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 32-017 Cap.I, Daca Rind.050 COL1 <> 0, atunci Rind.110 COL1 <> 0 ')
        });
    }
    else 

        if ((col1 == 0 && col2 != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R050_C1',
                'weight': 1,
                'msg': Drupal.t('Cod eroare: 32-017 Cap.I, Daca Rind.050 COL1 <> 0, atunci Rind.110 COL1 <> 0 ')
            });
        }

// End  32-010



// Start 33-018

    var col1 = Number(values.CAP1_R020_C1);
    var col2 = Number(values.CAP1_R100_C1);

    if ((col1 != 0 && col2 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R100_C1',
            'weight': 2,
            'msg': Drupal.t('Cod eroare: 33-018 Cap.I, Daca Rind.020 COL1 <> 0, atunci Rind.100 COL1 <> 0 ')
        });
    }
    else

        if ((col1 == 0 && col2 != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R020_C1',
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 33-018 Cap.I, Daca Rind.020 COL1 <> 0, atunci Rind.100 COL1 <> 0 ')
            });
        }

// End  33-018

// Start 32-019

    var col1 = Number(values.CAP3_R272_C1);
    var col2 = Number(values.CAP1_R110_C1);

    if ((col1 != 0 && col2 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 3,
            'msg': Drupal.t('Cod eroare: 32-019 Cap.III, Daca Rind.272 COL1 <> 0, atunci CAP.I Rind.110 COL1 <> 0 ')
        });
    }
// End  32-019

    // Start 32-020

    var col1 = Number(values.CAP3_R240_C1);
    var col2 = Number(values.CAP1_R100_C1);

    if ((col1 != 0 && col2 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 4,
            'msg': Drupal.t('Cod eroare: 32-020 Cap.III, Daca Rind.240 COL1 <> 0, atunci CAP.I Rind.100 COL1 <> 0 ')
        });
    }
// End  32-020


    // Start 32-010

    var col1 = Number(values.CAP3_R271_C1);
    var col2 = Number(values.CAP3_R272_C1);

    if ((col1 < col2 )) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 5,
            'msg': Drupal.t('Cod eroare: 32-010 CAP.III RIND.271 COL1 >= Rind.272 COL1 ')
        });
    }
// End  33-0020

    // Start 33-001

    var col1 = Number(values.CAP1_R045_C1);
    var col2 = Number(values.CAP1_R050_C1);

    if ((col1 < col2)) {
        webform.errors.push({
            'fieldName': 'CAP1_R045_C1',
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 33-001 Cap.I, Rind.045 COL1 >= Rind.050 COL1 ')
        });
    }
// End  33-001



    // Start 33-008

    var col1 = Number(values.CAP3_R230_C1);
    var col2 = Number(values.CAP3_R240_C1);
    var col3 = Number(values.CAP3_R241_C1);

    if ((col1 < col2 + col3)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 7,
            'msg': Drupal.t('Cod eroare: 33-008 CAP.III RIND.230 COL1 >= (Rind.240 + Rind.241) COL1 ')
        });
    }
// End  33-008



    // Start 33-009

    var R270_C1 = Number(values.CAP3_R270_C1);
    var R271_C1 = Number(values.CAP3_R271_C1);
    var R273_C1 = Number(values.CAP3_R273_C1);
    var R274_C1 = Number(values.CAP3_R274_C1);
    var R275_C1 = Number(values.CAP3_R275_C1);
    var R276_C1 = Number(values.CAP3_R276_C1);

    if ((R270_C1 < R271_C1 + R273_C1 + R274_C1 + R275_C1 + R276_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 8,
            'msg': Drupal.t('Cod eroare: 33-009 CAP.III RIND.270 COL1 >= (Rind.271 + Rind.273+Rind.274+Rind.275+Rind.276) COL1 ')
        });
    }
// End  33-009



   
// Start 33-011

    var R250_C1 = Number(values.CAP3_R250_C1);
    var R251_C1 = Number(values.CAP3_R251_C1);

    if ((R250_C1 < R251_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R250_C1',
            'weight': 9,
            'msg': Drupal.t('Cod eroare: 33-011 CAP.III RIND.250 COL1 >= Rind.251 COL1 ')
        });
    }
// End  33-011




// Start 33-012

    var R260_C1 = Number(values.CAP3_R260_C1);
    var R261_C1 = Number(values.CAP3_R261_C1);

    if ((R260_C1 < R261_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R260_C1',
            'weight': 10,
            'msg': Drupal.t('Cod eroare: 33-012 CAP.III RIND.260 COL1 >= Rind.261 COL1 ')
        });
    }
// End  33-012



    // Start 33-013

    var R230_C1 = Number(values.CAP3_R230_C1);
    var R240_C1 = Number(values.CAP3_R240_C1);

    if ((R230_C1 < R240_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 11,
            'msg': Drupal.t('Cod eroare: 33-013 CAP.III RIND.230 COL1 >= Rind.240 COL1 ')
        });
    }
// End  33-013


// Start 33-014

    var R230_C1 = Number(values.CAP3_R230_C1);
    var R241_C1 = Number(values.CAP3_R241_C1);

    if ((R230_C1 < R241_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 12,
            'msg': Drupal.t('Cod eroare: 33-014 CAP.III RIND.230 COL1 >= Rind.241 COL1 ')
        });
    }
// End  33-014




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

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }

    return toFloat(a.error_code) - toFloat(b.error_code);
}