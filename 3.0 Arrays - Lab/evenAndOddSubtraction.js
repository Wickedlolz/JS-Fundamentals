function evenAndOddSubtraction(array = []) {
    let evenSum = gettingEvenSum(array);
    let oddSum = gettingOddSum(array);

    let result = evenSum - oddSum;
    console.log(result);

    function gettingEvenSum(array) {
        let sum = 0;
        array.forEach(digit => digit % 2 === 0 ? sum += digit : '');

        return sum;
    }

    function gettingOddSum(array) {
        let sum = 0;
        array.forEach(digit => digit % 2 !== 0 ? sum += digit : '');

        return sum;
    }
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);