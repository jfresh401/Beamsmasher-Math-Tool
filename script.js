document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        this.classList.toggle('open');
    });

    const options = dropdown.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.querySelector('.selected').style.backgroundImage = option.style.backgroundImage;
            dropdown.dataset.value = option.getAttribute('data-value');
            dropdown.classList.remove('open');
        });
    });
});

function calculateCodeDigits() {
    const x = parseInt(document.getElementById("xDropdown").dataset.value) || 0;
    const y = parseInt(document.getElementById("yDropdown").dataset.value) || 0;
    const z = parseInt(document.getElementById("zDropdown").dataset.value) || 0;

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Please select symbols for x, y, and z.");
        return;
    }

    const codeDigit1 = Math.abs(2 * x + 11);
    const codeDigit2 = Math.abs((2 * z + y) - 5);
    const codeDigit3 = Math.abs((y + z) - x);

    document.getElementById("output1").textContent = `Code Digit #1: ${codeDigit1}`;
    document.getElementById("output2").textContent = `Code Digit #2: ${codeDigit2}`;
    document.getElementById("output3").textContent = `Code Digit #3: ${codeDigit3}`;
}

function openYouTube() {
    window.open("https://www.youtube.com/@FreshLabs401", "_blank");
}
