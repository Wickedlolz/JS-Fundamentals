function reverseArray(length, array = []) {
    let resultArray = [];
    
    for (let i = 0; i < length; i++) {
        resultArray.push(array[i]);
    }

    let arrLength = resultArray.length / 2;
    for (let i = 0; i < arrLength; i++) {
        let tmp = resultArray[i];
        resultArray[i] = resultArray[resultArray.length - 1 - i];
        resultArray[resultArray.length - 1 - i] = tmp;
    }

    console.log(resultArray.join(' '));
}

// reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);