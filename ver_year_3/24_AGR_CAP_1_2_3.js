(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.agro24 = {
        attach: function (context, settings) {
            // Verificare input numeric
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
            // Verificare input float
            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });



            // Funcție pentru a ascunde sau afișa capitolul 1.2 în funcție de TRIM
            function toggleCap2(trimValue) {
                if (trimValue == 4) {
                    // Ascundere capitol 1.2 dacă TRIM este 4
                    jQuery('#header-1-2').hide();  // Ascunde headerul capitolului 1.2
                    jQuery('#CAP12').hide();       // Ascunde tabelul corespunzător capitolului 1.2
                    jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').hide();

                    // Curățăm toate valorile input-urilor din capitolul 1.2
                    jQuery('input[name^="CAP12"]').val('');
                    jQuery('input[name^="CAP12"]').prop('checked', false);  // Dacă sunt și checkbox-uri
                } else if (trimValue == 1 || trimValue == 2 || trimValue == 3) {
                    // Afișăm capitolul 1.2 dacă TRIM este 1, 2 sau 3
                    jQuery('#header-1-2').show();  // Afișează headerul capitolului 1.2
                    jQuery('#CAP12').show();       // Afișează tabelul corespunzător capitolului 1.2
                    jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').show();
                }
            }

            // Eveniment pentru a detecta schimbarea valorii select TRIM
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap2(trimValue);
            });

            // Apelează funcția toggleCap2 inițial dacă este nevoie
            var initialTrimValue = jQuery('select[name="TRIM"]').val();
            toggleCap2(initialTrimValue);








        }
    };
})(jQuery);


webform.validators.agro24 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;

 

   
    toggleCap2(values);
 
 


   



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


function concatMessage(errorCode, fieldTitle, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }
    if (fieldTitle) {
        titleParts.push(fieldTitle);
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}


function toggleCap2(trimValue) {
    if (trimValue == 4) {
        // Hide static Cap 1.2
        jQuery('#header-1-2').hide();  // Hide the header of Cap 1.2
        jQuery('#CAP12').hide();       // Hide the static Cap 1.2 table
        jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').hide();

        // Clear and hide static Cap 1.2 inputs
        jQuery('input[name^="CAP12_R"]').val('');  // Clear static Cap 1.2 inputs

        // Hide dynamic Cap 1.2 by targeting all dynamic rows
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            var rowIndex = jQuery(this).attr('row-index');  // Get the dynamic row index
            jQuery('#CAP12_R1_C1_FILIAL-' + rowIndex).hide();  // Hide dynamic row input
        });

        // Clear dynamic Cap 1.2 inputs specifically for dynamic rows
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').val('');  // Clear dynamic Cap 1.2 inputs

    } else {
        // Show static Cap 1.2
        jQuery('#header-1-2').show();
        jQuery('#CAP12').show();
        jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').show();

        // Show dynamic Cap 1.2 by targeting all dynamic rows
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            var rowIndex = jQuery(this).attr('row-index');  // Get the dynamic row index
            jQuery('#CAP12_R1_C1_FILIAL-' + rowIndex).show();  // Show dynamic row input
        });
    }
}


function getErrorMessage(errorCode) {
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
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
