function bombNumbers(sequence, bombInfo) {
    let [bomb, range] = bombInfo;

    let index = sequence.indexOf(bomb);

    while (index > -1) {
        sequence.splice(Math.max((index - range), 0), Math.min(range, index));
        index = sequence.indexOf(bomb);
        sequence.splice(index, (range + 1));
        index = sequence.indexOf(bomb);
    }

    let sum = 0;

    for (const digit of sequence) {
        sum += digit;
    }

    console.log(sum);
}

// solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);