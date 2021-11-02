function merge(arrayOne = [], arrayTwo = []) {
    let resultArray = [];

    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 === 0) {
            resultArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        } else {
            resultArray.push(arrayOne[i] + arrayTwo[i]);
        }
    }

    console.log(resultArray.join(' - '));
}