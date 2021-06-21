function calculator(leftOperand, operator, rigthOperand) {
    let result = 0;

    switch (operator) {
        case '+':
            result = leftOperand + rigthOperand;
            break;
        case '-':
            result = leftOperand - rigthOperand;
            break;
        case '*':
            result = leftOperand * rigthOperand;
            break;
        case '/':
            result = leftOperand / rigthOperand;
            break;
    }

    console.log(result.toFixed(2));
}