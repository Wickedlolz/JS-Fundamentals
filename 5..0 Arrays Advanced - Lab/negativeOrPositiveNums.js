function negativeOrPositiveNums(list) {
    let resultArray = [];

    for (const element of list) {
        if (element < 0) {
            resultArray.unshift(element);
        } else {
            resultArray.push(element);
        }
    }

    return resultArray.join('\n');
}