// Function to handle input and conversion logic
function convertInput(field) {
    let binary = document.getElementById("binaryInput").value.trim();
    let decimal = document.getElementById("decimalInput").value.trim();
    let octal = document.getElementById("octalInput").value.trim();
    let hex = document.getElementById("hexInput").value.trim();

    // Validate binary input (only accepts 0 and 1)
    if (field === 'binary' && !/^[01]*$/.test(binary)) {
        document.getElementById("result").innerText = "Invalid Binary Input. Only 0s and 1s are allowed.";
        return;
    }

    // Perform conversions if input is valid
    if (field === 'binary' && /^[01]*$/.test(binary)) {
        let decFromBinary = parseInt(binary, 2);
        document.getElementById("decimalInput").value = decFromBinary || "";
        document.getElementById("octalInput").value = decFromBinary.toString(8) || "";
        document.getElementById("hexInput").value = decFromBinary.toString(16).toUpperCase() || "";
    } else if (field === 'decimal') {
        if (!/^\d+$/.test(decimal)) {
            document.getElementById("result").innerText = "Invalid Decimal Input.";
            return;
        }
        let decValue = parseInt(decimal, 10);
        document.getElementById("binaryInput").value = decValue.toString(2);
        document.getElementById("octalInput").value = decValue.toString(8);
        document.getElementById("hexInput").value = decValue.toString(16).toUpperCase();
    } else if (field === 'octal') {
        if (!/^[0-7]+$/.test(octal)) {
            document.getElementById("result").innerText = "Invalid Octal Input.";
            return;
        }
        let decFromOctal = parseInt(octal, 8);
        document.getElementById("binaryInput").value = decFromOctal.toString(2);
        document.getElementById("decimalInput").value = decFromOctal.toString(10);
        document.getElementById("hexInput").value = decFromOctal.toString(16).toUpperCase();
    } else if (field === 'hex') {
        if (!/^[0-9A-Fa-f]+$/.test(hex)) {
            document.getElementById("result").innerText = "Invalid Hexadecimal Input.";
            return;
        }
        let decFromHex = parseInt(hex, 16);
        document.getElementById("binaryInput").value = decFromHex.toString(2);
        document.getElementById("decimalInput").value = decFromHex.toString(10);
        document.getElementById("octalInput").value = decFromHex.toString(8);
    }
    document.getElementById("result").innerText = "";
}

// Clear all fields
function clearFields() {
    document.getElementById("binaryInput").value = "";
    document.getElementById("decimalInput").value = "";
    document.getElementById("octalInput").value = "";
    document.getElementById("hexInput").value = "";
    document.getElementById("result").innerText = "";
}
