function sequence(length, range) {
    let resultArray = [1];

    for (let i = 1; i < length; i++) {
        let innerSequence = resultArray.slice(-range);
        let sum = 0;

        innerSequence.forEach(digit => {
            sum += digit;
        });

        resultArray.push(sum);
    }

    console.log(resultArray.join(' '));
}

sequence(6, 3);
sequence(8, 2);