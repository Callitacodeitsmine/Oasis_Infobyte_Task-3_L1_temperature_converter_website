function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius-input");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var result = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
    document.getElementById("result").textContent = result;
}
