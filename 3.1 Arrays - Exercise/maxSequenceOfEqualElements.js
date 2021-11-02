function maxSequence(array = []) {
    let counter = 0;
    let number = 0;

    for (let i = 0; i < array.length; i++) {
        let currentCounter = 1;
        let currentNumber = 0;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentCounter++;
                currentNumber = array[i];
            } else {
                break;
            }
        }

        if (counter < currentCounter) {
            counter = currentCounter;
            number = currentNumber;
        }
    }

    let output = '';
    for (let i = 0; i < counter; i++) {
        output += number + ' ';
    }

    console.log(output);
}