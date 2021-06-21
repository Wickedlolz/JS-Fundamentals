function factorial(numberOne, numberTwo) {
    let factorialOne = 1;
    let factorialTwo = 1;

    for (let i = 2; i <= numberOne; i++) {
        factorialOne = factorialOne * i;
    }

    for (let i = 2; i <= numberTwo; i++) {
        factorialTwo = factorialTwo * i;
    }

    let result = factorialOne / factorialTwo;
    console.log(result.toFixed(2));
}

factorial(5, 2)