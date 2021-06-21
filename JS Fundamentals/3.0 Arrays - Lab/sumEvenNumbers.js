function evenSum(array = []) {
    let sum = 0;

    for (const digit of array) {
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
}