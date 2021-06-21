function oddAndEvenSum(number) {
    let even = evenSum(number);
    let odd = oddSum(number);

    let output = `Odd sum = ${odd}, Even sum = ${even}`;
    return output;

    
    function evenSum(number) {
        let numberAsStr = number.toString();
        let sum = 0;

        for (let i = 0; i < numberAsStr.length; i++) {
            let currentDigit = Number(numberAsStr[i]);

            if (currentDigit % 2 === 0) {
                sum += currentDigit;
            }
        }

        return sum;
    }

    function oddSum(number) {
        let numberAsStr = number.toString();
        let sum = 0;

        for (let i = 0; i < numberAsStr.length; i++) {
            let currentDigit = Number(numberAsStr[i]);

            if (currentDigit % 2 !== 0) {
                sum += currentDigit;
            }
        }

        return sum;
    }
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));