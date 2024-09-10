// This function handles showing/hiding chapter 1.2 based on TRIM value.
jQuery('select[name="TRIM"]').change(function () {
    var trimValue = jQuery(this).val(); // Capture the value of TRIM

    if (trimValue == 4) {
        // Hide Chapter 1.2 if TRIM == 4
        jQuery('#header-1-2').hide();  // Hide the header of chapter 1.2
        jQuery('#CAP12').hide();       // Hide the table related to chapter 1.2

        // Clear all input values and checkboxes in chapter 1.2
        jQuery('input[name^="CAP12"]').val('');            // Clear text inputs

    } else {
        // Show Chapter 1.2 if TRIM is not 4
        jQuery('#header-1-2').show();  // Show the header for Chapter 1.2
        jQuery('#CAP12').show();       // Show the table related to chapter 1.2

    }
});
