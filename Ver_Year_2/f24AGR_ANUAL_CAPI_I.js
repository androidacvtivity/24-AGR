function f24AGR_ANUAL_CAPI_I() {

    // existing variable declarations

    // Helper function to only display values greater than 0
    let setValueIfNonZero = (element, value) => {
        let parsedValue = Number(parseFloat(value).toFixed(0));
        if (parsedValue > 0) {
            element.val(parsedValue);
        } else {
            element.val(""); // Clear the value if it's zero
        }
    };

    // Apply the helper function to set values only if greater than zero
    setValueIfNonZero(R5_C1, Number(R1_C1.val()) + Number(R2_C1.val()) - Number(R4_C1.val()));
    setValueIfNonZero(R5_C3, Number(R1_C3.val()) + Number(R2_C3.val()) - Number(R4_C3.val()));
    setValueIfNonZero(R5_C4, Number(R1_C4.val()) + Number(R2_C4.val()) - Number(R4_C4.val()));
    setValueIfNonZero(R5_C5, Number(R1_C5.val()) + Number(R2_C5.val()) - Number(R4_C5.val()));
    setValueIfNonZero(R5_C6, Number(R1_C6.val()) + Number(R2_C6.val()) - Number(R4_C6.val()));
    setValueIfNonZero(R5_C8, Number(R1_C8.val()) + Number(R2_C8.val()) - Number(R4_C8.val()));
}
