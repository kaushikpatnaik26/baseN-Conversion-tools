function convertInput(field) {
    const binary = document.getElementById("binaryInput").value.trim();
    const decimal = document.getElementById("decimalInput").value.trim();
    const octal = document.getElementById("octalInput").value.trim();
    const hex = document.getElementById("hexInput").value.trim();
    const result = document.getElementById("result");
  
    let dec;
  
    if (field === "binary") {
      if (!/^[01]+$/.test(binary)) {
        result.textContent = "Binary should contain only 0 or 1.";
        return;
      }
      dec = parseInt(binary, 2);
    } else if (field === "decimal") {
      if (!/^\d+$/.test(decimal)) {
        result.textContent = "Decimal should be a number.";
        return;
      }
      dec = parseInt(decimal, 10);
    } else if (field === "octal") {
      if (!/^[0-7]+$/.test(octal)) {
        result.textContent = "Octal should contain digits 0-7.";
        return;
      }
      dec = parseInt(octal, 8);
    } else if (field === "hex") {
      if (!/^[0-9a-fA-F]+$/.test(hex)) {
        result.textContent = "Hex should contain 0-9 and A-F.";
        return;
      }
      dec = parseInt(hex, 16);
    }
  
    if (!isNaN(dec)) {
      document.getElementById("binaryInput").value = dec.toString(2);
      document.getElementById("decimalInput").value = dec.toString(10);
      document.getElementById("octalInput").value = dec.toString(8);
      document.getElementById("hexInput").value = dec.toString(16).toUpperCase();
      result.textContent = "";
    }
  }
  
  function clearFields() {
    document.getElementById("binaryInput").value = "";
    document.getElementById("decimalInput").value = "";
    document.getElementById("octalInput").value = "";
    document.getElementById("hexInput").value = "";
    document.getElementById("result").textContent = "";
  }
  