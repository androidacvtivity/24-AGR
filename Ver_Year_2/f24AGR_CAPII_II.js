function f24AGR_CAPII_II() {

    // Existing variable declarations

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
    setValueIfNonZero(R11_C1, Number(R1_C1.val()) + Number(R3_C1.val()) + Number(R4_C1.val()) - Number(R6_C1.val()) - Number(R8_C1.val()) - Number(R10_C1.val()));
    setValueIfNonZero(R11_C2, Number(R1_C2.val()) + Number(R3_C2.val()) + Number(R4_C2.val()) - Number(R6_C2.val()) - Number(R8_C2.val()) - Number(R10_C2.val()));
    setValueIfNonZero(R11_C3, Number(R1_C3.val()) + Number(R3_C3.val()) + Number(R4_C3.val()) - Number(R6_C3.val()) - Number(R8_C3.val()) - Number(R10_C3.val()));
    setValueIfNonZero(R11_C4, Number(R1_C4.val()) + Number(R3_C4.val()) + Number(R4_C4.val()) - Number(R6_C4.val()) - Number(R8_C4.val()) - Number(R10_C4.val()));
    setValueIfNonZero(R11_C5, Number(R1_C5.val()) + Number(R3_C5.val()) + Number(R4_C5.val()) - Number(R6_C5.val()) - Number(R8_C5.val()) - Number(R10_C5.val()));
    setValueIfNonZero(R11_C6, Number(R1_C6.val()) + Number(R3_C6.val()) + Number(R4_C6.val()) - Number(R6_C6.val()) - Number(R8_C6.val()) - Number(R10_C6.val()));
    setValueIfNonZero(R11_C7, Number(R1_C7.val()) + Number(R3_C7.val()) + Number(R4_C7.val()) - Number(R6_C7.val()) - Number(R8_C7.val()) - Number(R10_C7.val()));
    setValueIfNonZero(R11_C8, Number(R1_C8.val()) + Number(R3_C8.val()) + Number(R4_C8.val()) - Number(R6_C8.val()) - Number(R8_C8.val()) - Number(R10_C8.val()));
    setValueIfNonZero(R11_C9, Number(R1_C9.val()) + Number(R3_C9.val()) + Number(R4_C9.val()) - Number(R6_C9.val()) - Number(R8_C9.val()) - Number(R10_C9.val()));
    setValueIfNonZero(R11_C10, Number(R1_C10.val()) + Number(R3_C10.val()) + Number(R4_C10.val()) - Number(R6_C10.val()) - Number(R8_C10.val()) - Number(R10_C10.val()));
    setValueIfNonZero(R11_C11, Number(R1_C11.val()) + Number(R3_C11.val()) + Number(R4_C11.val()) - Number(R6_C11.val()) - Number(R8_C11.val()) - Number(R10_C11.val()));
    setValueIfNonZero(R11_C12, Number(R1_C12.val()) + Number(R3_C12.val()) + Number(R4_C12.val()) - Number(R6_C12.val()) - Number(R8_C12.val()) - Number(R10_C12.val()));
}
