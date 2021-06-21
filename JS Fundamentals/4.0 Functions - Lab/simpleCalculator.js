function calculator(numberOne, numberTwo, operator) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    let result = 0;

    switch (operator) {
        case 'multiply':
            result = multiply(numberOne, numberTwo);
            break;
        case 'divide':
            result = divide(numberOne, numberTwo);
            break;
        case 'add':
            result = add(numberOne, numberTwo);
            break;
        case 'subtract':
            result = subtract(numberOne, numberTwo);
            break;
    }

    return result;
}