(function ($) {
    Drupal.behaviors.agro24 = {
        attach: function (context, settings) {
            // Ensure numeric input validation for fields with 'numeric' and 'float' classes
            $('input.numeric, input.float').on('keypress', function (event) {
                if (!isNumberPressed(this, event)) {
                    event.preventDefault();
                }
            });

            // Function to toggle visibility of Cap 1.2 (including header, static, and dynamic rows)
            function toggleCap2(trimValue) {
                if (trimValue == 4) {
                    // Hide the <h3> header for Cap 1.2
                    $('h3.webform-center.webform-bold').hide();

                    // Hide the static CAP12 table and rows
                    $('#header-1-2').hide();
                    $('#CAP12').hide();
                    $('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').hide();

                    // Clear all inputs in the static CAP12 table
                    $('input[name^="CAP12"]').val('');

                    // Hide dynamic CAP12 inputs and clear values
                    $('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
                        $(this).closest('tr').hide(); // Hide row
                        $(this).val(''); // Clear value
                    });

                } else {
                    // Show the <h3> header for Cap 1.2
                    $('h3.webform-center.webform-bold').show();

                    // Show the static CAP12 table and rows
                    $('#header-1-2').show();
                    $('#CAP12').show();
                    $('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').show();

                    // Show dynamic CAP12 inputs
                    $('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
                        $(this).closest('tr').show(); // Show row
                    });
                }
            }

            // Detect changes in TRIM dropdown and toggle CAP2 accordingly
            $('select[name="TRIM"]').change(function () {
                var trimValue = $(this).val();
                toggleCap2(trimValue);
            });

            // Call toggleCap2 on page load with the initial value of TRIM
            var initialTrimValue = $('select[name="TRIM"]').val();
            toggleCap2(initialTrimValue);
        }
    };

    // Custom validator for webform
    webform.validators.agro24 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;

        // Ensure CAP 1.2 visibility is updated based on TRIM
        toggleCap2(values['TRIM']);

        // Sort warnings & errors (assuming sort_errors_warinings is a utility function elsewhere)
        webform.warnings.sort(function (a, b) {
            return sort_errors_warinings(a, b);
        });

        webform.errors.sort(function (a, b) {
            return sort_errors_warinings(a, b);
        });

        // Set validator status to complete
        webform.validatorsStatus['agro24'] = 1;

        // Run any other necessary webform validation functions
        validateWebform();
    };

})(jQuery);
