function oddIndexes(array) {
    // let resultArray = array.filter((x, i) => i % 2 === 1).map(x => x * 2).reverse();

    // console.log(resultArray.join(' '));

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            result.push(array[i] * 2);
        }
    }

    let output = '';
    for (let i = result.length - 1; i >= 0; i--) {
        output += result[i] + ' ';
    }

    console.log(output);
}

oddIndexes([10, 15, 20, 25]);