function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const explanationOutput = document.getElementById('explanation');
    
    const celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
        alert('Please enter a valid number for Celsius');
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    
    fahrenheitOutput.value = fahrenheit.toFixed(2);
    explanationOutput.textContent = '${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F';
}

function reset() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('explanation').textContent = '';
}