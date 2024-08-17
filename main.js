document.addEventListener('DOMContentLoaded', function () {
    const emptyDiv = document.querySelector('.DIv2'); // The default empty div
    const resultDiv = document.querySelector('.results-container'); // The results div

    // Hide the results div on page load
    resultDiv.style.display = 'none';

    // Event listener for the calculate button
    document.querySelector('.cal').addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('inputPound').value);
        const annualRate = parseFloat(document.getElementById('inputpourcent').value) / 100;
        const years = parseFloat(document.getElementById('inputYear').value);
        const months = years * 12;
        const isRepayment = document.getElementById('choseRepay').checked;
        const isInterestOnly = document.getElementById('choseInter').checked;

        let monthlyPayment = 0;
        let totalRepay = 0;

        if (isRepayment) {
            const monthlyRate = annualRate / 12;
            monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            totalRepay = monthlyPayment * months;
        } else if (isInterestOnly) {
            monthlyPayment = principal * (annualRate / 12);
            totalRepay = (monthlyPayment * months) + principal;
        }

        // Update the results section
        document.getElementById('monthlyResult').textContent = `£` + monthlyPayment.toFixed(2);
        document.getElementById('totalResult').textContent = `£` + totalRepay.toFixed(2);

        // Hide the empty div and show the results div
        emptyDiv.style.display = 'none';
        resultDiv.style.display = 'block';
    });

    // Event listener for the clear button
    document.querySelector('.clearAll').addEventListener('click', function() {
        // Reset all inputs
        document.getElementById('inputPound').value = '';
        document.getElementById('inputpourcent').value = '';
        document.getElementById('inputYear').value = '';
        document.getElementById('choseRepay').checked = false;
        document.getElementById('choseInter').checked = false;

        // Hide the results div and show the empty div
        resultDiv.style.display = 'none';
        emptyDiv.style.display = 'block';

        // Reset the results display
        document.getElementById('monthlyResult').textContent = '';
        document.getElementById('totalResult').textContent = '';
    });
});
