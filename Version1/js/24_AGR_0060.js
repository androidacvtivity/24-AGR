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

    //Start 32-003 //1
    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R210_C" + i]))) {
            var R210_C = Number(values["CAP2_R210_C" + i]);
        }
        if (!isNaN(Decimal(values["CAP2_R130_C" + i] || 0)
            .plus(values["CAP2_R140_C" + i] || 0))) {
            var R130_140 = Decimal(values["CAP2_R130_C" + i] || 0)
                .plus(values["CAP2_R140_C" + i] || 0);
        }
        if (!isNaN(Number(values["CAP2_R200_C" + i]))) {
            var R200_C = Number(values["CAP2_R200_C" + i]);
        }
        var result_33_003 = R130_140 - R200_C
        if ((R210_C != result_33_003)) {
            webform.errors.push({
                'fieldName': 'CAP2_R210_C' + i,
                'weight': 19,
                'msg': Drupal.t('Cod eroare: 33-003. [@col] - Cap.II pe COL(@col), Rînd.(210) COL(1,2,3,4) = Rînd.(130+140-200) COL(1,2,3,4), @R210_C <> @result_33_003', { '@col': i, '@R210_C': R210_C, '@result_33_003': result_33_003 })
            });
        }
    }
    //End 32-003 //1

    //Start 33-007 //12 
    for (var i = 1; i <= 3; i++) {
        if (!isNaN(Number(values["CAP2_R140_C" + i]))) {
            var R140_C = Number(values["CAP2_R140_C" + i]);
        }
        if (!isNaN(Number(values["CAP2_R160_C" + i]))) {
            var R160_C = Number(values["CAP2_R160_C" + i]);
        }
        if ((R140_C != 0 && R160_C == 0)) {
            webform.errors.push({
                'fieldName': 'CAP2_R160_C' + i,
                'weight': 18,
                'msg': Drupal.t('Cod eroare: 33-007. [@col] - Cap.II pe COL(@col), Dacă Rînd.(140) COL(1,2,3) <> 0, atunci Rînd.(160) COL(1,2,3) <> 0 - (@R140_C, @R160_C)', { '@col': i, '@R140_C': R140_C, '@R160_C': R160_C })
            });
        }
    }
    //End 33-007 //12

    //Start 32-006 //4 
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
                'msg': Drupal.t('Cod eroare: 32-006. [@col] - Cap.II pe COL(@col), Dacă Rînd.(213) COL(1,2,3,4) <> 0, atunci Rînd.(140) COL(1,2,3,4) <> 0 - (@R213_C, @R140_C)', { '@col': i, '@R213_C': R213_C, '@R140_C': R140_C })
            });
        }
    }
    //End 32-006 //4

    //Start 32-005 //3 
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
                'msg': Drupal.t('Cod eroare: 32-005. [@col] - Cap.II pe COL(@col), Dacă Rînd.(200) COL(1,2,3,4) <> 0, atunci Rînd.(212) COL(1,2,3,4) <> 0 - (@R200_C, @R212_C)', { '@col': i, '@R200_C': R200_C, '@R212_C': R212_C })
            });
        }
    }
    //End 32-005 //3

    //Start 32-004 //2
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
                'msg': Drupal.t('Cod eroare: 32-004. [@col] - Cap.II pe COL(@col), Dacă Rînd.(211) COL(1,2,3,4) <> 0, atunci Rînd.(130) COL(1,2,3,4) <> 0 - (@R211_C, @R130_C)', { '@col': i, '@R211_C': R211_C, '@R130_C': R130_C })
            });
        }
    }
    //End 32-004 //2

    //Start 33-002 //11
    for (var i = 2; i <= 3; i++) {
        if (!isNaN(Number(values["CAP2_R140_C" + i]))) {
            var R140_C = Number(values["CAP2_R140_C" + i]);
        }
        if (!isNaN(Number(values["CAP2_R150_C" + i]))) {
            var R150_C = Number(values["CAP2_R150_C" + i]);
        }
        if ((R140_C < R150_C)) {
            webform.errors.push({
                'fieldName': 'CAP2_R140_C' + i,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 32-002. [@col] - Cap.II pe COL(@col), Rînd.(140) COL(2,3) >= Rînd.(150) - (@R140_C < @R150_C)', { '@col': i, '@R140_C': R140_C, '@R150_C': R150_C })
            });
        }
    }
    //End 33-002 //11

    //Start 32-017 //6
    if (!isNaN(Number(values.CAP1_R050_C1))) {
        var R050_C1 = Number(values.CAP1_R050_C1);
    }
    if (!isNaN(Number(values.CAP1_R110_C1))) {
        var R110_C1 = Number(values.CAP1_R110_C1);
    }
    if ((R050_C1 != 0 && R110_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 32-017. [@R110_C1] - Cap.I pe COL(@col), Dacă Rînd.(050) COL(1) <> 0, atunci Rînd.(110) COL(1) <> 0 - (@R050_C1, @R110_C1)', { '@col': i, '@R050_C1': R050_C1, '@R110_C1': R110_C1 })
        });
    }
    else if ((R050_C1 == 0 && R110_C1 != 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R050_C1',
            'weight': 1,
            'msg': Drupal.t('Cod eroare: 32-017. [@R050_C1] - Cap.I pe COL(@col), Dacă Rînd.(110) COL(1) <> 0, atunci Rînd.(050) COL(1) <> 0 - (@R110_C1, @R050_C1)', { '@col': i, '@R050_C1': R050_C1, '@R110_C1': R110_C1 })
        });
    }
    //End 32-017 //6

    //Start 33-018 //5
    if (!isNaN(Number(values.CAP1_R020_C1))) {
        var R020_C1 = Number(values.CAP1_R020_C1);
    }
    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var R100_C1 = Number(values.CAP1_R100_C1);
    }
    if ((R020_C1 != 0 && R100_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R100_C1',
            'weight': 2,
            'msg': Drupal.t('Cod eroare: 33-018. [@R100_C1] - Cap.I pe COL(@col), Dacă Rînd.(020) COL(1) <> 0, atunci Rînd.(100) COL(1) <> 0 - (@R020_C1, @R100_C1)', { '@col': i, '@R020_C1': R020_C1, '@R100_C1': R100_C1 })
        });
    }
    else if ((R020_C1 == 0 && R100_C1 != 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R020_C1',
            'weight': 2,
            'msg': Drupal.t('Cod eroare: 33-018. [@R020_C1] - Cap.I pe COL(@col), Dacă Rînd.(100) COL(1) <> 0, atunci Rînd.(020) COL(1) <> 0 - (@R100_C1, @R020_C1)', { '@col': i, '@R020_C1': R020_C1, '@R100_C1': R100_C1 })
        });
    }
    //End 33-018 //5

    //Start 32-019 //7
    if (!isNaN(Number(values.CAP3_R272_C1))) {
        var R272_C1 = Number(values.CAP3_R272_C1);
    }
    if (Number(values.CAP1_R110_C1)) {
        var R110_C1 = Number(values.CAP1_R110_C1);
    }
    if ((R272_C1 != 0 && R110_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R110_C1',
            'weight': 3,
            'msg': Drupal.t('Cod eroare: 32-019. [@R110_C1] - Cap.III pe COL(@col), Dacă Rînd.(272) COL(1) <> 0, atunci CAP.I Rînd.(110) COL(1) <> 0 - (@R272_C1, @R110_C1)', { '@col': i, '@R272_C1': R272_C1, '@R110_C1': R110_C1 })
        });
    }
    //End 32-019 //7

    //Start 32-020 //8 
    if (!isNaN(Number(values.CAP3_R240_C1))) {
        var R240_C1 = Number(values.CAP3_R240_C1);
    }
    if (!isNaN(Number(values.CAP1_R100_C1))) {
        var R100_C1 = Number(values.CAP1_R100_C1);
    }
    if ((R240_C1 != 0 && R100_C1 == 0)) {
        webform.errors.push({
            'fieldName': 'CAP1_R100_C1',
            'weight': 4,
            'msg': Drupal.t('Cod eroare: 32-020. [@R100_C1] - Cap.III pe COL(@col), Dacă Rînd.(240) COL(1) <> 0, atunci CAP.I Rînd.(100) COL(1) <> 0 - (@R240_C1, @R100_C1)', { '@col': i, '@R240_C1': R240_C1, '@R100_C1': R100_C1 })
        });
    }
    //End 32-020 //8

    //Start 32-010 //15
    if (!isNaN(Number(values.CAP3_R271_C1))) {
        var R271_C1 = Number(values.CAP3_R271_C1);
    }
    if (!isNaN(Number(values.CAP3_R272_C1))) {
        var R272_C1 = Number(values.CAP3_R272_C1);
    }
    if ((R271_C1 < R272_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 5,
            'msg': Drupal.t('Cod eroare: 32-010. [@R270_C1] - Cap.III pe COL(@col), Rînd.(271) COL(1) >= Rînd.(272) COL(1) - (@R271_C1 < @R272_C1)', { '@col': i, '@R270_C1': R270_C1, '@R271_C1': R271_C1, '@R272_C1': R272_C1 })
        });
    }
    //End 33-010 //15

    //Start 33-001 //10
    if (!isNaN(Number(values.CAP1_R045_C1))) {
        var R045_C1 = Number(values.CAP1_R045_C1);
    }
    if (!isNaN(Number(values.CAP1_R050_C1))) {
        var R050_C1 = Number(values.CAP1_R050_C1);
    }
    if ((R045_C1 < R050_C1)) {
        webform.errors.push({
            'fieldName': 'CAP1_R045_C1',
            'weight': 6,
            'msg': Drupal.t('Cod eroare: 33-001. [@R045_C1] - Cap.I pe COL(@col), Rînd.(045) COL(1) >= Rînd.(050) COL(1) - (@R045_C1 < @R050_C1)', { '@col': i, '@R045_C1': R045_C1, '@R050_C1': R050_C1 })
        });
    }
    //End 33-001 //10

    //Start 33-008 //13 
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
            'msg': Drupal.t('Cod eroare: 33-008. [@R230_C1] - Cap.III pe COL(@col), Rînd.(230) COL(1) >= (Rînd.(240) + Rînd.(241)) COL(1) - (@R230_C1 < @SUM_33_008)', { '@col': i, '@R230_C1': R230_C1, '@SUM_33_008': SUM_33_008 })
        });
    }
    //End 33-008 //13

    //Start 33-009 //14 
    if (!isNaN(Number(values.CAP3_R270_C1))) {
        var R270_C1 = Number(values.CAP3_R270_C1);
    }
    if (!isNaN(Number(values.CAP3_R271_C1))) {
        var R271_C1 = Number(values.CAP3_R271_C1);
    }
    if (!isNaN(Number(values.CAP3_R273_C1))) {
        var R273_C1 = Number(values.CAP3_R273_C1);
    }
    if (!isNaN(Number(values.CAP3_R274_C1))) {
        var R274_C1 = Number(values.CAP3_R274_C1);
    }
    if (!isNaN(Number(values.CAP3_R275_C1))) {
        var R275_C1 = Number(values.CAP3_R275_C1);
    }
    if (!isNaN(Number(values.CAP3_R276_C1))) {
        var R276_C1 = Number(values.CAP3_R276_C1);
    }
    var SUM_33_009 = R271_C1 + R273_C1 + R274_C1 + R275_C1 + R276_C1
    if ((R270_C1 < SUM_33_009)) {
        webform.errors.push({
            'fieldName': 'CAP3_R270_C1',
            'weight': 8,
            'msg': Drupal.t('Cod eroare: 33-009. [@R270_C1] - Cap.III pe COL(@col), Rînd.(270) COL(1) >= (Rînd.(271) + Rînd.(273) + Rînd.(274) + Rînd.(275) + Rînd.(276)) COL(1) - (@R270_C1 < @SUM_33_009)', { '@col': i, '@R270_C1': R270_C1, '@SUM_33_009': SUM_33_009 })
        });
    }
    //End 33-009 //14

    //Start 33-011 //15
    if (!isNaN(Number(values.CAP3_R250_C1))) {
        var R250_C1 = Number(values.CAP3_R250_C1);
    }
    if (!isNaN(Number(values.CAP3_R251_C1))) {
        var R251_C1 = Number(values.CAP3_R251_C1);
    }
    if ((R250_C1 < R251_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R250_C1',
            'weight': 9,
            'msg': Drupal.t('Cod eroare: 33-011. [@R250_C1] - Cap.III pe COL(@col), Rînd.(250) COL(1) >= Rînd.(251) COL(1) - (@R250_C1 < @R251_C1)', { '@col': i, '@R250_C1': R250_C1, '@R251_C1': R251_C1 })
        });
    }
    //End 33-011 //15

    //Start 33-012 //16
    if (!isNaN(Number(values.CAP3_R260_C1))) {
        var R260_C1 = Number(values.CAP3_R260_C1);
    }
    if (!isNaN(Number(values.CAP3_R261_C1))) {
        var R261_C1 = Number(values.CAP3_R261_C1);
    }
    if ((R260_C1 < R261_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R260_C1',
            'weight': 10,
            'msg': Drupal.t('Cod eroare: 33-012. [@R260_C1] - Cap.III pe COL(@col), Rînd.(260) COL(1) >= Rînd.(261) COL(1) - (@R260_C1 < @R261_C1)', { '@col': i, '@R260_C1': R260_C1, '@R261_C1': R261_C1 })
        });
    }
    //End 33-012 //16

    //Start 33-013 //17 
    if (!isNaN(Number(values.CAP3_R230_C1))) {
        var R230_C1 = Number(values.CAP3_R230_C1);
    }
    if (!isNaN(Number(values.CAP3_R240_C1))) {
        var R240_C1 = Number(values.CAP3_R240_C1);
    }
    if ((R230_C1 < R240_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 11,
            'msg': Drupal.t('Cod eroare: 33-013. [@R230_C1] - Cap.III pe COL(@col), Rînd.(230) COL(1) >= Rînd.(240) COL(1) - (@R230_C1 < @R240_C1)', { '@col': i, '@R230_C1': R230_C1, '@R240_C1': R240_C1 })
        });
    }
    //End 33-013 //17

    //Start 33-014 //8
    if (!isNaN(Number(values.CAP3_R230_C1))) {
        var R230_C1 = Number(values.CAP3_R230_C1);
    }
    if (!isNaN(Number(values.CAP3_R241_C1))) {
        var R241_C1 = Number(values.CAP3_R241_C1);
    }
    if ((R230_C1 < R241_C1)) {
        webform.errors.push({
            'fieldName': 'CAP3_R230_C1',
            'weight': 12,
            'msg': Drupal.t('Cod eroare: 33-014. [@R230_C1] - Cap.III pe COL(@col), Rînd.(230) COL(1) >= Rînd.(241) COL(1) - (@R230_C1 < @R241_C1)', { '@col': i, '@R230_C1': R230_C1, '@R241_C1': R241_C1 })
        });
    }
    //End 33-014 //8

    //Start dynamic validations ----------------------------------------------------------------------------------------------
    for (var j = 0; j < values.CAP_NUM_FILIAL.length; j++) {
        if (!isNaN(String(values.CAP_CUATM_FILIAL[j]))) {
            var CAP_CUATM_FILIAL = String(values.CAP_CUATM_FILIAL[j]);
        }

        //Start 32-003_FILIAL //1_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R210_C" + (i) + "_FILIAL"][j]))) {
                var R210_C_FILIAL = Number(values["CAP2_R210_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Decimal(values["CAP2_R130_C" + (i) + "_FILIAL"][j] || 0)
                .plus(values["CAP2_R140_C" + (i) + "_FILIAL"][j] || 0))) {
                var R130_140_FILIAL = Decimal(values["CAP2_R130_C" + (i) + "_FILIAL"][j] || 0)
                    .plus(values["CAP2_R140_C" + (i) + "_FILIAL"][j] || 0);
            }
            if (!isNaN(Number(values["CAP2_R200_C" + (i) + "_FILIAL"][j]))) {
                var R200_C_FILIAL = Number(values["CAP2_R200_C" + (i) + "_FILIAL"][j]);
            }
            var result_33_003_FILIAL = R130_140_FILIAL - R200_C_FILIAL
            if ((R210_C_FILIAL != result_33_003_FILIAL)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R210_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 19,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-003. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Rînd.(210) COL(1,2,3,4) = Rînd.(130+140-200) COL(1,2,3,4), @R210_C_FILIAL <> @result_33_003_FILIAL ', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R210_C_FILIAL': R210_C_FILIAL, '@result_33_003_FILIAL': result_33_003_FILIAL })
                });
            }
        }
        //End 32-003_FILIAL //1_FILIAL

        //Start 33-007_FILIAL //12_FILIAL
        for (var i = 1; i <= 3; i++) {
            if (!isNaN(Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]))) {
                var R140_C_FILIAL = Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP2_R160_C" + (i) + "_FILIAL"][j]))) {
                var R160_C_FILIAL = Number(values["CAP2_R160_C" + (i) + "_FILIAL"][j]);
            }
            if ((R140_C_FILIAL != 0 && R160_C_FILIAL == 0)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R160_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 18,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-007. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Dacă Rînd.(140) COL(1,2,3) <> 0, atunci Rînd.(160) COL(1,2,3) <> 0 - (@R140_C_FILIAL, @R160_C_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R140_C_FILIAL': R140_C_FILIAL, '@R160_C_FILIAL': R160_C_FILIAL })
                });
            }
        }
        //End 33-007_FILIAL //12_FILIAL

        //Start 32-006_FILIAL //4_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R213_C" + (i) + "_FILIAL"][j]))) {
                var R213_C_FILIAL = Number(values["CAP2_R213_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]))) {
                var R140_C_FILIAL = Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]);
            }
            if ((R213_C_FILIAL != 0 && R140_C_FILIAL == 0)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R140_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 17,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-006. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Dacă Rînd.(213) COL(1,2,3,4) <> 0, atunci Rînd.(140) COL(1,2,3,4) <> 0 - (@R213_C_FILIAL, @R140_C_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R213_C_FILIAL': R213_C_FILIAL, '@R140_C_FILIAL': R140_C_FILIAL })
                });
            }
        }
        //End 32-006_FILIAL //4_FILIAL

        //Start 32-005_FILIAL //3_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R200_C" + (i) + "_FILIAL"][j]))) {
                var R200_C_FILIAL = Number(values["CAP2_R200_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP2_R212_C" + (i) + "_FILIAL"][j]))) {
                var R212_C_FILIAL = Number(values["CAP2_R212_C" + (i) + "_FILIAL"][j]);
            }
            if ((R200_C_FILIAL != 0 && R212_C_FILIAL == 0)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R212_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 16,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-005. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Dacă Rînd.(200) COL(1,2,3,4) <> 0, atunci Rînd.(212) COL(1,2,3,4) <> 0 - (@R200_C_FILIAL, @R212_C_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R200_C_FILIAL': R200_C_FILIAL, '@R212_C_FILIAL': R212_C_FILIAL })
                });
            }
        }
        //End 32-005_FILIAL //3_FILIAL

        //Start 32-004_FILIAL //2_FILIAL
        for (var i = 1; i <= 4; i++) {
            if (!isNaN(Number(values["CAP2_R211_C" + (i) + "_FILIAL"][j]))) {
                var R211_C_FILIAL = Number(values["CAP2_R211_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP2_R130_C" + (i) + "_FILIAL"][j]))) {
                var R130_C_FILIAL = Number(values["CAP2_R130_C" + (i) + "_FILIAL"][j]);
            }
            if ((R211_C_FILIAL != 0 && R130_C_FILIAL == 0)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R130_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 15,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-004. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Dacă Rînd.(211) COL(1,2,3,4) <> 0, atunci Rînd.(130) COL(1,2,3,4) <> 0 - (@R211_C_FILIAL, @R130_C_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R211_C_FILIAL': R211_C_FILIAL, '@R130_C_FILIAL': R130_C_FILIAL })
                });
            }
        }
        //End 32-004_FILIAL //2_FILIAL

        //Start 33-002_FILIAL //11_FILIAL
        for (var i = 2; i <= 3; i++) {
            if (!isNaN(Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]))) {
                var R140_C_FILIAL = Number(values["CAP2_R140_C" + (i) + "_FILIAL"][j]);
            }
            if (!isNaN(Number(values["CAP2_R150_C" + (i) + "_FILIAL"]))) {
                var R150_C_FILIAL = Number(values["CAP2_R150_C" + (i) + "_FILIAL"][j]);
            }
            if ((R140_C_FILIAL < R150_C_FILIAL)) {
                webform.errors.push({
                    'fieldName': 'CAP2_R140_C' + (i) + '_FILIAL',
                    'index': j,
                    'weight': 14,
                    'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-002. [@col_FILIAL] - Cap.II pe COL(@col_FILIAL), Rînd.(140) COL(2,3) >= Rînd.(150) - (@R140_C_FILIAL < @R150_C_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R140_C_FILIAL': R140_C_FILIAL, '@R150_C_FILIAL': R150_C_FILIAL })
                });
            }
        }
        //End 33-002_FILIAL //11_FILIAL

        //Start 32-017_FILIAL //6_FILIAL
        if (!isNaN(Number(values.CAP1_R050_C1_FILIAL[j]))) {
            var R050_C1_FILIAL = Number(values.CAP1_R050_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R110_C1_FILIAL[j]))) {
            var R110_C1_FILIAL = Number(values.CAP1_R110_C1_FILIAL[j]);
        }
        if ((R050_C1_FILIAL != 0 && R110_C1_FILIAL == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R110_C1_FILIAL',
                'index': j,
                'weight': 1,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-017. [@R110_C1_FILIAL] - Cap.I pe COL(@col_FILIAL), Dacă Rînd.(050) COL(1) <> 0, atunci Rînd.(110) COL(1) <> 0 - (@R050_C1_FILIAL, @R110_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R050_C1_FILIAL': R050_C1_FILIAL, '@R110_C1_FILIAL': R110_C1_FILIAL })
            });
        }
        else if ((R050_C1_FILIAL == 0 && R110_C1_FILIAL != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R050_C1_FILIAL',
                'index': j,
                'weight': 1,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-017. [@R050_C1_FILIAL] - Cap.I pe COL(@col_FILIAL), Dacă Rînd.(110) COL(1) <> 0, atunci Rînd.(050) COL(1) <> 0 - (@R110_C1_FILIAL, @R050_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R050_C1_FILIAL': R050_C1_FILIAL, '@R110_C1_FILIAL': R110_C1_FILIAL })
            });
        }
        //End 32-017_FILIAL //6_FILIAL

        //Start 33-018_FILIAL //5_FILIAL
        if (!isNaN(Number(values.CAP1_R020_C1_FILIAL[j]))) {
            var R020_C1_FILIAL = Number(values.CAP1_R020_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C1_FILIAL[j]))) {
            var R100_C1_FILIAL = Number(values.CAP1_R100_C1_FILIAL[j]);
        }
        if ((R020_C1_FILIAL != 0 && R100_C1_FILIAL == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R100_C1_FILIAL',
                'index': j,
                'weight': 2,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-018. [@R100_C1_FILIAL] - Cap.I pe COL(@col_FILIAL), Dacă Rînd.(020) COL(1) <> 0, atunci Rînd.(100) COL(1) <> 0 - (@R020_C1_FILIAL, @R100_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R020_C1_FILIAL': R020_C1_FILIAL, '@R100_C1_FILIAL': R100_C1_FILIAL })
            });
        }
        else if ((R020_C1_FILIAL == 0 && R100_C1_FILIAL != 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R020_C1_FILIAL',
                'index': j,
                'weight': 2,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-018. [@R020_C1_FILIAL] - Cap.I pe COL(@col_FILIAL), Dacă Rînd.(100) COL(1) <> 0, atunci Rînd.(020) COL(1) <> 0 - (@R100_C1_FILIAL, @R020_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R020_C1_FILIAL': R020_C1_FILIAL, '@R100_C1_FILIAL': R100_C1_FILIAL })
            });
        }
        //End 33-018_FILIAL //5_FILIAL

        //Start 32-019_FILIAL //7_FILIAL
        if (!isNaN(Number(values.CAP3_R272_C1_FILIAL[j]))) {
            var R272_C1_FILIAL = Number(values.CAP3_R272_C1_FILIAL[j]);
        }
        if (Number(values.CAP1_R110_C1_FILIAL[j])) {
            var R110_C1_FILIAL = Number(values.CAP1_R110_C1_FILIAL[j]);
        }
        if ((R272_C1_FILIAL != 0 && R110_C1_FILIAL == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R110_C1_FILIAL',
                'index': j,
                'weight': 3,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-019. [@R110_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Dacă Rînd.(272) COL(1) <> 0, atunci CAP.I Rînd.(110) COL(1) <> 0 - (@R272_C1_FILIAL, @R110_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R272_C1_FILIAL': R272_C1_FILIAL, '@R110_C1_FILIAL': R110_C1_FILIAL })
            });
        }
        //End 32-019_FILIAL //7_FILIAL

        //Start 32-020_FILIAL //8_FILIAL
        if (!isNaN(Number(values.CAP3_R240_C1_FILIAL[j]))) {
            var R240_C1_FILIAL = Number(values.CAP3_R240_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R100_C1_FILIAL[j]))) {
            var R100_C1_FILIAL = Number(values.CAP1_R100_C1_FILIAL[j]);
        }
        if ((R240_C1_FILIAL != 0 && R100_C1_FILIAL == 0)) {
            webform.errors.push({
                'fieldName': 'CAP1_R100_C1_FILIAL',
                'index': j,
                'weight': 4,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-020. [@R100_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Dacă Rînd.(240) COL(1) <> 0, atunci CAP.I Rînd.(100) COL(1) <> 0 - (@R240_C1_FILIAL, @R100_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R240_C1_FILIAL': R240_C1_FILIAL, '@R100_C1_FILIAL': R100_C1_FILIAL })
            });
        }
        //End 32-020_FILIAL //8_FILIAL

        //Start 32-010_FILIAL //15_FILIAL
        if (!isNaN(Number(values.CAP3_R271_C1_FILIAL[j]))) {
            var R271_C1_FILIAL = Number(values.CAP3_R271_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R272_C1_FILIAL[j]))) {
            var R272_C1_FILIAL = Number(values.CAP3_R272_C1_FILIAL[j]);
        }
        if ((R271_C1_FILIAL < R272_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R270_C1_FILIAL',
                'index': j,
                'weight': 5,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 32-010. [@R270_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(271) COL(1) >= Rînd.(272) COL(1) - (@R271_C1_FILIAL < @R272_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R270_C1_FILIAL': R270_C1_FILIAL, '@R271_C1_FILIAL': R271_C1_FILIAL, '@R272_C1_FILIAL': R272_C1_FILIAL })
            });
        }
        //End 33-010_FILIAL //15_FILIAL

        //Start 33-001_FILIAL //10_FILIAL
        if (!isNaN(Number(values.CAP1_R045_C1_FILIAL[j]))) {
            var R045_C1_FILIAL = Number(values.CAP1_R045_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP1_R050_C1_FILIAL[j]))) {
            var R050_C1_FILIAL = Number(values.CAP1_R050_C1_FILIAL[j]);
        }
        if ((R045_C1_FILIAL < R050_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP1_R045_C1_FILIAL',
                'index': j,
                'weight': 6,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-001. [@R045_C1_FILIAL] - Cap.I pe COL(@col_FILIAL), Rînd.(045) COL(1) >= Rînd.(050) COL(1) - (@R045_C1_FILIAL < @R050_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R045_C1_FILIAL': R045_C1_FILIAL, '@R050_C1_FILIAL': R050_C1_FILIAL })
            });
        }
        //End 33-001_FILIAL //10_FILIAL

        //Start 33-008_FILIAL //13_FILIAL
        if (!isNaN(Number(values.CAP3_R230_C1_FILIAL[j]))) {
            var R230_C1_FILIAL = Number(values.CAP3_R230_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R240_C1_FILIAL[j]))) {
            var R240_C1_FILIAL = Number(values.CAP3_R240_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R241_C1_FILIAL[j]))) {
            var R241_C1_FILIAL = Number(values.CAP3_R241_C1_FILIAL[j]);
        }
        var SUM_33_008_FILIAL = R240_C1_FILIAL + R241_C1_FILIAL
        if ((R230_C1_FILIAL < SUM_33_008_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R230_C1_FILIAL',
                'index': j,
                'weight': 7,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-008. [@R230_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(230) COL(1) >= (Rînd.(240) + Rînd.(241)) COL(1) - (@R230_C1_FILIAL < @SUM_33_008_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R230_C1_FILIAL': R230_C1_FILIAL, '@SUM_33_008_FILIAL': SUM_33_008_FILIAL })
            });
        }
        //End 33-008_FILIAL //13_FILIAL

        //Start 33-009_FILIAL //14_FILIAL
        if (!isNaN(Number(values.CAP3_R270_C1_FILIAL[j]))) {
            var R270_C1_FILIAL = Number(values.CAP3_R270_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R271_C1_FILIAL[j]))) {
            var R271_C1_FILIAL = Number(values.CAP3_R271_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R273_C1_FILIAL[j]))) {
            var R273_C1_FILIAL = Number(values.CAP3_R273_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R274_C1_FILIAL[j]))) {
            var R274_C1_FILIAL = Number(values.CAP3_R274_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R275_C1_FILIAL[j]))) {
            var R275_C1_FILIAL = Number(values.CAP3_R275_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R276_C1_FILIAL[j]))) {
            var R276_C1_FILIAL = Number(values.CAP3_R276_C1_FILIAL[j]);
        }
        var SUM_33_009_FILIAL = R271_C1_FILIAL + R273_C1_FILIAL + R274_C1_FILIAL + R275_C1_FILIAL + R276_C1_FILIAL
        if ((R270_C1_FILIAL < SUM_33_009_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R270_C1_FILIAL',
                'index': j,
                'weight': 8,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-009. [@R270_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(270) COL(1) >= (Rînd.(271) + Rînd.(273) + Rînd.(274) + Rînd.(275) + Rînd.(276)) COL(1) - (@R270_C1_FILIAL < @SUM_33_009_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R270_C1_FILIAL': R270_C1_FILIAL, '@SUM_33_009_FILIAL': SUM_33_009_FILIAL })
            });
        }
        //End 33-009_FILIAL //14_FILIAL

        //Start 33-011_FILIAL //15_FILIAL
        if (!isNaN(Number(values.CAP3_R250_C1_FILIAL[j]))) {
            var R250_C1_FILIAL = Number(values.CAP3_R250_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R251_C1_FILIAL[j]))) {
            var R251_C1_FILIAL = Number(values.CAP3_R251_C1_FILIAL[j]);
        }
        if ((R250_C1_FILIAL < R251_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R250_C1_FILIAL',
                'index': j,
                'weight': 9,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-011. [@R250_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(250) COL(1) >= Rînd.(251) COL(1) - (@R250_C1_FILIAL < @R251_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R250_C1_FILIAL': R250_C1_FILIAL, '@R251_C1_FILIAL': R251_C1_FILIAL })
            });
        }
        //End 33-011_FILIAL //15_FILIAL

        //Start 33-012_FILIAL //16_FILIAL
        if (!isNaN(Number(values.CAP3_R260_C1_FILIAL[j]))) {
            var R260_C1_FILIAL = Number(values.CAP3_R260_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R261_C1_FILIAL[j]))) {
            var R261_C1_FILIAL = Number(values.CAP3_R261_C1_FILIAL[j]);
        }
        if ((R260_C1_FILIAL < R261_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R260_C1_FILIAL',
                'index': j,
                'weight': 10,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-012. [@R260_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(260) COL(1) >= Rînd.(261) COL(1) - (@R260_C1_FILIAL < @R261_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R260_C1_FILIAL': R260_C1_FILIAL, '@R261_C1_FILIAL': R261_C1_FILIAL })
            });
        }
        //End 33-012_FILIAL //16_FILIAL

        //Start 33-013_FILIAL //17_FILIAL
        if (!isNaN(Number(values.CAP3_R230_C1_FILIAL[j]))) {
            var R230_C1_FILIAL = Number(values.CAP3_R230_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R240_C1_FILIAL[j]))) {
            var R240_C1_FILIAL = Number(values.CAP3_R240_C1_FILIAL[j]);
        }
        if ((R230_C1_FILIAL < R240_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R230_C1_FILIAL',
                'index': j,
                'weight': 11,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-013. [@R230_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(230) COL(1) >= Rînd.(240) COL(1) - (@R230_C1_FILIAL < @R240_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R230_C1_FILIAL': R230_C1_FILIAL, '@R240_C1_FILIAL': R240_C1_FILIAL })
            });
        }
        //End 33-013_FILIAL //17_FILIAL

        //Start 33-014_FILIAL //8_FILIAL
        if (!isNaN(Number(values.CAP3_R230_C1_FILIAL[j]))) {
            var R230_C1_FILIAL = Number(values.CAP3_R230_C1_FILIAL[j]);
        }
        if (!isNaN(Number(values.CAP3_R241_C1_FILIAL[j]))) {
            var R241_C1_FILIAL = Number(values.CAP3_R241_C1_FILIAL[j]);
        }
        if ((R230_C1_FILIAL < R241_C1_FILIAL)) {
            webform.errors.push({
                'fieldName': 'CAP3_R230_C1_FILIAL',
                'index': j,
                'weight': 12,
                'msg': Drupal.t('Raion: @CAP_CUATM_FILIAL - Cod eroare: 33-014. [@R230_C1_FILIAL] - Cap.III pe COL(@col_FILIAL), Rînd.(230) COL(1) >= Rînd.(241) COL(1) - (@R230_C1_FILIAL < @R241_C1_FILIAL)', { '@CAP_CUATM_FILIAL': CAP_CUATM_FILIAL, '@col_FILIAL': i, '@R230_C1_FILIAL': R230_C1_FILIAL, '@R241_C1_FILIAL': R241_C1_FILIAL })
            });
        }
        //End 33-014_FILIAL //8_FILIAL
    }
    //End dynamic validations ----------------------------------------------------------------------------------------------

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
