(function ($, Drupal) {

    // Custom webform validator function for 'agro24'
    webform.validators.agro24 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;  // Load form values from Drupal settings

        var TRIM = 0;  // Initialize TRIM to 0
        if (!isNaN(Number(values['TRIM']))) {
            TRIM = Number(values['TRIM']);  // TRIM can be 1, 2, 3, 4, or 0
        }

        // Always called validation functions
        trim_cap1_2(values);
        validatePhoneNumber(values.PHONE);
        validate33_001(values);
        validate33_001_F(values);
        validate33_002(values);
        validate33_002_F(values);
        validate33_004(values);
        validate33_004_F(values);
        validate33_005(values);
        validate33_005_F(values);
        validate33_006(values);
        validate33_006_F(values);

        // Conditionally called based on TRIM value (NOT called only if TRIM === 4)
        if (TRIM !== 4) {
            validate33_003(values);
            validate33_003_F(values);
            validate33_008(values);
            validate33_008_F(values);
            validate33_009(values);
            validate33_009_F(values);
            validate33_010(values);
            validate33_010_F(values);
            validate33_011(values);
            validate33_011_F(values);
            validate33_012(values);
            validate33_012_F(values);
            validate33_013(values);
            validate33_013_F(values);
            validate33_017(values);
            validate33_017_F(values);
            validate33_019(values);
            validate33_019_F(values);
        }

        // Always called validations
        validate33_015(values);
        validate33_015_F(values);
        validate33_016(values);
        validate33_016_F(values);
        validate33_018(values);
        validate33_018_F(values);
        validate33_007(values);
        validate33_007_F(values);
        validate33_014(values);
        validate33_014_F(values);
        validate33_024(values);
        validate33_024_F(values);

        // Sort warnings and errors before displaying
        webform.warnings.sort(function (a, b) {
            return sort_errors_warinings(a, b);  // Custom sorting function
        });

        webform.errors.sort(function (a, b) {
            return sort_errors_warinings(a, b);  // Custom sorting function
        });

        // Mark the agro24 validator as completed
        webform.validatorsStatus['agro24'] = 1;

        // Final webform validation
        validateWebform();
    };

})(jQuery, Drupal);
