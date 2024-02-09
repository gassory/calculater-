function calculate() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'add':
            result = value1 + value2;
            break;
        case 'subtract':
            result = value1 - value2;
            break;
        case 'multiply':
            result = value1 * value2;
            break;
        case 'divide':
            // Check for division by zero
            if (value2 != 0) {
                result = value1 / value2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }

    document.getElementById('result').innerHTML = "Result: " + result;
}