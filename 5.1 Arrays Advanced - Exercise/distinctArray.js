function distinct(array) {
    let resultArray = [];
    for (const number of array) {
        if (!resultArray.includes(number)) {
            resultArray.push(number);
        }
    }

    return resultArray.join(' ');
}

console.log(distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]));