function sumDigits(number) {
    let sum = 0;
    let numAsStr = number.toString();

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    console.log(sum);
}