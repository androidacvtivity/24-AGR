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


    //Start 32-003

    for (var i = 1; i <= 4; i++) {

        if (!isNaN(Number(values["CAP2_R210_C" + i]))){
        var R210_C = Number(values["CAP2_R210_C" + i]);}


        if (!isNaN(Decimal(values["CAP2_R130_C" + i] || 0)
            .plus(values["CAP2_R140_C" + i] || 0))){

        var R130_140 = Decimal(values["CAP2_R130_C" + i] || 0)
            .plus(values["CAP2_R140_C" + i] || 0)}


        if (!isNaN(Number(values["CAP2_R200_C" + i]))){ 

        var R200_C = Number(values["CAP2_R200_C" + i]);}    

        var result_33_003 = R130_140 - R200_C
 
   
        if ((R210_C != result_33_003 )) {
            webform.errors.push({
                'fieldName': 'CAP2_R210_C' + i,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 33-003. Cap.II, Rind.210 COL(1,2,3,4) = Rind.(130+140-200) COL(1,2,3,4), @R210_C <> @result_33_003 ', { '@col': i, '@R210_C': R210_C, '@result_33_003': result_33_003 })
            });
        }
    }


//End 32-003

    //Start 33-007

    for (var i = 1; i <= 3; i++) {
        
        if (!isNaN(Number(values["CAP2_R140_C" + i]))){
        var R140_C = Number(values["CAP2_R140_C" + i]);}

        if (!isNaN(Number(values["CAP2_R160_C" + i]))) {
            var R160_C = Number(values["CAP2_R160_C" + i]);
        }

    


        if ((R140_C != 0 && R160_C == 0)) {
            webform.errors.push({
                'fieldName': 'CAP2_R160_C' + i,
                'weight': 18,
                'msg': Drupal.t('Cod eroare: 33-007. Cap.II, Daca Rind.140 COL(1,2,3) <> 0, atunci Rind.160 COL(1,2,3) <> 0 - ( @R140_C, @R160_C)', { '@R140_C': R140_C, '@R160_C': R160_C })
            });
        }
    }


//End 33-007


    //Start 32-006

    for (var i = 1; i <= 4; i++) {

        if (!isNaN(Number(values["CAP2_R213_C" + i]))) {
            var R213_C = Number(values["CAP2_R213_C" + i]);
        }

        if (!isNaN(Number(values["CAP2_R140_C" + i]))) {
            var R140_C = Number(values["CAP2_R140_C" + i]);
        }




        if ((R213_C != 0 && R140_C == 0)) {
            webform.errors.push({
                'fieldName': 'CAP2_R140_C' + i,
                'weight': 17,
            
                'msg': Drupal.t('Cod eroare: 32-006. Cap.II, Daca Rind.213 COL(1,2,3,4) <> 0, atunci Rind.140 COL(1,2,3,4) <> 0 - ( @R213_C, @R140_C)', { '@R213_C': R213_C, '@R140_C': R140_C })

            });
        }
    }


//End 32-006



    //Start 32-005

    for (var i = 1; i <= 4; i++) {

        if (!isNaN(Number(values["CAP2_R200_C" + i]))) {
            var R200_C = Number(values["CAP2_R200_C" + i]);
        }
         

        if (!isNaN(Number(values["CAP2_R212_C" + i]))) {
            var R212_C = Number(values["CAP2_R212_C" + i]);
        }

       


        if ((R200_C != 0 && R212_C == 0)) {
            webform.errors.push({
                'fieldName': 'CAP2_R212_C' + i,
                'weight': 16,
               'msg': Drupal.t('Cod eroare: 32-005. Cap.II, Daca Rind.200 COL(1,2,3,4) <> 0, atunci Rind.212 COL(1,2,3,4) <> 0  - ( @R200_C, @R212_C)', { '@R200_C': R200_C, '@R212_C': R212_C })
            });
        }
    }


//End 32-005




    //Start 32-004

    for (var i = 1; i <= 4; i++) {

        if (!isNaN(Number(values["CAP2_R211_C" + i]))) {
            var R211_C = Number(values["CAP2_R211_C" + i]);
        }




        if (!isNaN(Number(values["CAP2_R130_C" + i]))) {
            var R130_C = Number(values["CAP2_R130_C" + i]);
        }



        if ((R211_C != 0 && R130_C == 0)) {
            webform.errors.push({
                'fieldName': 'CAP2_R130_C' + i,
                'weight': 15,
              
                'msg': Drupal.t('Cod eroare: 32-004. Cap.II, Daca Rind.211 COL(1,2,3,4) <> 0, atunci Rind.130 COL(1,2,3,4) <> 0  - ( @R211_C, @R130_C)', { '@R211_C': R211_C, '@R130_C': R130_C })
            });
        }
    }


//End 32-004


//Start 33-002

    for (var i = 2; i <= 3; i++) {
        
        if (!isNaN(Number(values["CAP2_R140_C" + i]))) {
            var R140_C = Number(values["CAP2_R140_C" + i]);
        }


         if (!isNaN(Number(values["CAP2_R150_C" + i]))) {
            var R150_C = Number(values["CAP2_R150_C" + i]);
        }


       


        if (R140_C < R150_C) {
            webform.errors.push({
                'fieldName': 'CAP2_R140_C' + i,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 32-002. Cap.II, Rind.140 COL(2,3) >= Rind.150  - ( @R140_C <  @R150_C)', { '@R140_C': R140_C, '@R150_C': R150_C })
            });
        }
    }


//End 33-002

// Start 32-010

    if (!isNaN(Number(values.CAP1_R050_C1))){
   var R050_C1 = Number(values.CAP1_R050_C1);}
    
    if (!isNaN(Number(values.CAP1_R110_C1))){
        var R110_C1 = Number(values.CAP1_R110_C1);}

    if ((R050_C1 != 0 && R110_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 1,
        
            'msg': Drupal.t('Cod eroare: 32-017. Cap.I, Daca Rind.050 COL1 <> 0, atunci Rind.110 COL1 <> 0 - ( @R050_C1 , @R110_C1)', { '@R050_C1': R050_C1, '@R110_C1': R110_C1 })
        });
    }
    else 

        if ((R050_C1 == 0 && R110_C1 != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R050_C1',
                'weight': 1,
              
                'msg': Drupal.t('Cod eroare: 32-017. Cap.I, Daca Rind.110 COL1 <> 0, atunci Rind.050 COL1 <> 0 - ( @R110_C1, @R050_C1)', { '@R050_C1': R050_C1, '@R110_C1': R110_C1 })
                
            });
        }

// End  32-010



// Start 33-018

    if (!isNaN(Number(values.CAP1_R020_C1))){
        var R020_C1 = Number(values.CAP1_R020_C1);}

    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var R100_C1 = Number(values.CAP1_R100_C1);
    }

    if ((R020_C1 != 0 && R100_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R100_C1',
            'weight': 2,
            'msg': Drupal.t('Cod eroare: 33-018 Cap.I, Daca Rind.020 COL1 <> 0, atunci Rind.100 COL1 <> 0 - ( @R020_C1, @R100_C1)', { '@R020_C1': R020_C1, '@R100_C1': R100_C1 })
        });
    }
    else

        if ((R020_C1 == 0 && R100_C1 != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R020_C1',
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 33-018 Cap.I, Daca Rind.100 COL1 <> 0, atunci Rind.020 COL1 <> 0 ( @R100_C1,  @R020_C1)', { '@R020_C1': R020_C1, '@R100_C1': R100_C1 })
            });
        }

// End  33-018

// Start 32-019

    if (!isNaN(Number(values.CAP3_R272_C1))){
    var R272_C1 = Number(values.CAP3_R272_C1);}


    if (Number(values.CAP1_R110_C1))    
        var R110_C1 = Number(values.CAP1_R110_C1);

    if ((R272_C1 != 0 && R110_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 3,
            'msg': Drupal.t('Cod eroare: 32-019 Cap.III, Daca Rind.272 COL1 <> 0, atunci CAP.I Rind.110 COL1 <> 0 ( @R272_C1,  @R110_C1)', { '@R272_C1': R272_C1, '@R110_C1': R110_C1 })
        });
    }
// End  32-019



    // Start 32-020

    if (!isNaN(Number(values.CAP3_R240_C1))){
    var R240_C1 = Number(values.CAP3_R240_C1);}


    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var R100_C1 = Number(values.CAP1_R100_C1);
    }

  

    if ((R240_C1 != 0 && R100_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R100_C1',
            'weight': 4,
            'msg': Drupal.t('Cod eroare: 32-020 Cap.III, Daca Rind.240 COL1 <> 0, atunci CAP.I Rind.100 COL1 <> 0 ( @R240_C1,  @R100_C1)', { '@R240_C1': R240_C1, '@R100_C1': R100_C1 })
        });
    }
// End  32-020


    // Start 32-010

    if (!isNaN(Number(values.CAP3_R271_C1))){
    var R271_C1 = Number(values.CAP3_R271_C1);}

    if (!isNaN(Number(values.CAP3_R272_C1))) {
    var R272_C1 = Number(values.CAP3_R272_C1);}

    if ((R271_C1 < R272_C1 )) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 5,
            'msg': Drupal.t('Cod eroare: 32-010 CAP.III RIND.271 COL1 >= Rind.272 COL1  ( @R271_C1 <   @R272_C1)', { '@R271_C1': R271_C1, '@R272_C1': R272_C1 })
        });
    }
// End  33-0020

    // Start 33-001

    if (!isNaN(Number(values.CAP1_R045_C1))){
        var R045_C1 = Number(values.CAP1_R045_C1);}
  if (!isNaN(Number(values.CAP1_R050_C1))) {
        var R050_C1 = Number(values.CAP1_R050_C1);
    }

    if ((R045_C1 < R050_C1)) {
        webform.errors.push({
            'fieldName': 'CAP1_R045_C1',
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 33-001 Cap.I, Rind.045 COL1 >= Rind.050 COL1  ( @R045_C1 <   @R050_C1)', { '@R045_C1': R045_C1, '@R050_C1': R050_C1 })
           
        });
    }
// End  33-001



    // Start 33-008


    if (!isNaN(Number(values.CAP3_R230_C1))) {
        var R230_C1 = Number(values.CAP3_R230_C1);
    }

    if (!isNaN(Number(values.CAP3_R240_C1))) {
        var R240_C1 = Number(values.CAP3_R240_C1);
    }



    if (!isNaN(Number(values.CAP3_R241_C1))) {
        var R241_C1 = Number(values.CAP3_R241_C1);
    }
    var SUM_33_008 = R240_C1 + R241_C1

    if ((R230_C1 < SUM_33_008)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 7,
            'msg': Drupal.t('Cod eroare: 33-008 CAP.III RIND.230 COL1 >= (Rind.240 + Rind.241) COL1 ( @R230_C1 <   @SUM_33_008)', { '@R230_C1': R230_C1, '@SUM_33_008': SUM_33_008 })
        });
    }
// End  33-008



    // Start 33-009

    
    if (!isNaN(Number(values.CAP3_R270_C1))){
    var R270_C1 = Number(values.CAP3_R270_C1); }

    if (!isNaN(Number(values.CAP3_R271_C1))) {
    var R271_C1 = Number(values.CAP3_R271_C1);}

    if (!isNaN(Number(values.CAP3_R273_C1))) {
    var R273_C1 = Number(values.CAP3_R273_C1);}

    if (!isNaN(Number(values.CAP3_R274_C1))) {
    var R274_C1 = Number(values.CAP3_R274_C1);}

    if (!isNaN(Number(values.CAP3_R275_C1))) {
    var R275_C1 = Number(values.CAP3_R275_C1);}

    if (!isNaN(Number(values.CAP3_R276_C1))) {
    var R276_C1 = Number(values.CAP3_R276_C1);}

    var SUM_33_009 = R271_C1 + R273_C1 + R274_C1 + R275_C1 + R276_C1


    if ((R270_C1 < SUM_33_009)) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 8,
            'msg': Drupal.t('Cod eroare: 33-009 CAP.III RIND.270 COL1 >= (Rind.271 + Rind.273+Rind.274+Rind.275+Rind.276) COL1 ( @R270_C1 <   @SUM_33_009)', { '@R270_C1': R270_C1, '@SUM_33_009': SUM_33_009 })
        });
    }
// End  33-009



   
// Start 33-011

    if (!isNaN(Number(values.CAP3_R250_C1))) {
    var R250_C1 = Number(values.CAP3_R250_C1);}
    
    if (!isNaN(Number(values.CAP3_R251_C1))) {
    var R251_C1 = Number(values.CAP3_R251_C1);}

    if ((R250_C1 < R251_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R250_C1',
            'weight': 9,
            'msg': Drupal.t('Cod eroare: 33-011 CAP.III RIND.250 COL1 >= Rind.251 COL1 ( @R250_C1 <   @R251_C1)', { '@R250_C1': R250_C1, '@R251_C1': R251_C1 })
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