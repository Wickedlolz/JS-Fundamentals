function maxNumber(array = []) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isTopInt = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTopInt = false;
                break;
            }
        }

        if (isTopInt) {
            resultArray.push(array[i]);
        }
    }

    console.log(resultArray.join(' '));
}