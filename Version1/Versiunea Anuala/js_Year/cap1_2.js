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

            // Funcție pentru a genera dinamica capitolului 1.2
            function toggleCap12(trimValue) {
                var cap12Fields = [
                    "CAP12_R1_C1_FILIAL", "CAP12_R2_C1_FILIAL", "CAP12_R3_C1_FILIAL",
                    "CAP12_R4_C1_FILIAL", "CAP12_R5_C1_FILIAL", "CAP12_R6_C1_FILIAL",
                    "CAP12_R7_C1_FILIAL", "CAP12_R8_C1_FILIAL", "CAP12_R9_C1_FILIAL",
                    "CAP12_R10_C1_FILIAL", "CAP12_R11_C1_FILIAL"
                ];

                if (trimValue == 4) {
                    // Ascunde rândurile și coloanele pentru capitolul 1.2 dinamic
                    jQuery('#header-1-2').hide();
                    jQuery('#CAP12').hide();
                    cap12Fields.forEach(function (field) {
                        jQuery('input[name="' + field + '"]').val('').hide();
                    });
                } else {
                    // Afișează din nou capitolul 1.2
                    jQuery('#header-1-2').show();
                    jQuery('#CAP12').show();
                    cap12Fields.forEach(function (field) {
                        jQuery('input[name="' + field + '"]').show();
                    });
                }
            }

            // Eveniment pentru a detecta schimbarea valorii TRIM
            jQuery('select[name="TRIM"]').change(function () {
                var trimValue = jQuery(this).val();
                toggleCap12(trimValue);
            });

            // Apel inițial pentru a aplica dinamica
            var initialTrimValue = jQuery('select[name="TRIM"]').val();
            toggleCap12(initialTrimValue);
        }
    };
})(jQuery);
