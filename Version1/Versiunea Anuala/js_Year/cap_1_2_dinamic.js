// Modifica si aceasta functie 
function toggleCap12(trimValue) {
    var cap12Fields = [
        "CAP12_R1_C1_FILIAL", "CAP12_R2_C1_FILIAL", "CAP12_R3_C1_FILIAL",
        "CAP12_R4_C1_FILIAL", "CAP12_R5_C1_FILIAL", "CAP12_R6_C1_FILIAL",
        "CAP12_R7_C1_FILIAL", "CAP12_R8_C1_FILIAL", "CAP12_R9_C1_FILIAL",
        "CAP12_R10_C1_FILIAL", "CAP12_R11_C1_FILIAL"
    ];

    if (trimValue == 4) {
        // Ascunde capitolul 1.2 dinamic și rândurile aferente
        jQuery('#header-1-2-dinamic').hide();  // Ascunde headerul capitolului 1.2 dinamic
        jQuery('#CAP12-dinamic').hide();       // Ascunde tabelul capitolului 1.2 dinamic
        cap12Fields.forEach(function (field) {
            jQuery('input[name="' + field + '"]').val('').hide();  // Curăță și ascunde inputurile
        });
    } else {
        // Afișează capitolul 1.2 dinamic și rândurile aferente
        jQuery('#header-1-2-dinamic').show();  // Afișează headerul capitolului 1.2 dinamic
        jQuery('#CAP12-dinamic').show();       // Afișează tabelul capitolului 1.2 dinamic
        cap12Fields.forEach(function (field) {
            jQuery('input[name="' + field + '"]').show();  // Afișează inputurile
        });
    }
}

// Utilizare MutationObserver pentru a detecta schimbările în DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            // Dacă elementul #header-1-2 este adăugat în DOM
            var trimValue = jQuery('select[name="TRIM"]').val();
            toggleCap12(trimValue);
        }
    });
});

// Inițiere observer pentru elemente din corpul documentului
observer.observe(document.body, { childList: true, subtree: true });

// Exemplu de utilizare: Apelare la schimbarea valorii selectate
jQuery('select[name="TRIM"]').change(function () {
    var trimValue = jQuery(this).val();
    toggleCap12(trimValue);  // Apelare funcție pe baza valorii TRIM
});

// Asigurare că funcția este apelată și la încărcarea paginii
jQuery(document).ready(function () {
    var initialTrimValue = jQuery('select[name="TRIM"]').val();
    toggleCap12(initialTrimValue);  // Verifică valoarea inițială la încărcare
});




function toggleDynamicCap12(trimValue) {
    var headerElement = jQuery('#header-1-2-dinamic');

    // Verificăm dacă elementul există
    if (headerElement.length) {
        if (trimValue == 4) {
            // Ascundem elementul cu textul dinamic
            headerElement.hide();
        } else {
            // Afișăm elementul
            headerElement.show();
        }
    }
}





// Eveniment la schimbarea valorii TRIM
jQuery('select[name="TRIM"]').change(function () {
    var trimValue = jQuery(this).val();
    toggleDynamicCap12(trimValue);
});

// Apelare la încărcarea paginii
jQuery(document).ready(function () {
    var initialTrimValue = jQuery('select[name="TRIM"]').val();
    toggleDynamicCap12(initialTrimValue);  // Ascundere/Afișare inițială
});

// 