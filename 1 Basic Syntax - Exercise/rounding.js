function rouding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let result = number.toFixed(precision);
    let parsedNumber = parseFloat(result);

    console.log(parsedNumber);
}