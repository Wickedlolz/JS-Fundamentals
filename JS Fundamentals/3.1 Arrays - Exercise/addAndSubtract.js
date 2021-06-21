function addAndSubtract(array = []) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultArray.push(array[i] + i);
        } else {
            resultArray.push(array[i] - i);
        }
    }

    let originalSum = 0;
    let finalSum = 0;

    for (const digit of array) {
        originalSum += digit;
    }

    for (const digit of resultArray) {
        finalSum += digit;
    }

    console.log(resultArray);
    console.log(originalSum);
    console.log(finalSum);
}