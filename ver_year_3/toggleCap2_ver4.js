function toggleCap2(trimValue) {
    if (trimValue == 4) {
        // Hide static Cap 1.2
        jQuery('#header-1-2').hide();  // Hide the header of Cap 1.2
        jQuery('#CAP12').hide();       // Hide the static Cap 1.2 table
        jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').hide();

        // Clear and hide static Cap 1.2 inputs
        jQuery('input[name^="CAP12_R"]').val('');  // Clear static Cap 1.2 inputs

        // Hide dynamic Cap 1.2 by targeting all dynamic inputs that match the pattern
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            // Hide the input field dynamically
            jQuery(this).closest('tr').hide();  // Hide the entire row containing the input
        });

        // Clear dynamic Cap 1.2 inputs specifically for dynamic rows
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').val('');  // Clear dynamic Cap 1.2 inputs

    } else {
        // Show static Cap 1.2
        jQuery('#header-1-2').show();
        jQuery('#CAP12').show();
        jQuery('#row-header-1, #row-header-2, #row-1, #row-2, #row-3, #row-4, #row-5, #row-6, #row-7, #row-8, #row-9, #row-10, #row-11').show();

        // Show dynamic Cap 1.2 by targeting all dynamic inputs that match the pattern
        jQuery('input[name^="CAP12_R"][name*="_FILIAL"]').each(function () {
            // Show the input field dynamically
            jQuery(this).closest('tr').show();  // Show the entire row containing the input
        });
    }
}
