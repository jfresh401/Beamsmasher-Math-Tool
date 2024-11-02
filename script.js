function calculateCodeDigits() {
    // Get selected values from dropdowns
    const x = parseInt(document.getElementById("xSelect").value) || 0;
    const y = parseInt(document.getElementById("ySelect").value) || 0;
    const z = parseInt(document.getElementById("zSelect").value) || 0;

    // Ensure values are selected
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Please select values for x, y, and z.");
        return;
    }

    // Calculate code digits with absolute values for negatives
    const codeDigit1 = Math.abs(2 * x + 11);
    const codeDigit2 = Math.abs((2 * z + y) - 5);
    const codeDigit3 = Math.abs((y + z) - x);

    // Display results
    document.getElementById("output1").textContent = `Code Digit #1: ${codeDigit1}`;
    document.getElementById("output2").textContent = `Code Digit #2: ${codeDigit2}`;
    document.getElementById("output3").textContent = `Code Digit #3: ${codeDigit3}`;
}

function openYouTube() {
    window.open("https://www.youtube.com/@FreshLabs401", "_blank");
}
