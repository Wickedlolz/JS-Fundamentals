function firstAndLastKNums(list) {
    let k = list.shift();
    let firstPart = list.slice(0, k);
    let secondPart = list.slice(-k);

    console.log(firstPart.join(' '));
    console.log(secondPart.join(' '));
}

firstAndLastKNums([2, 7, 8, 9]);