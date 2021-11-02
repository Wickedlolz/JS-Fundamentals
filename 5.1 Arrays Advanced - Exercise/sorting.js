function sorting(array) {
    array.sort((a, b) => a - b);
    let resultArray = [];

    let length = array.length;

    while (length > 0) {
        resultArray.push(array.pop());
        resultArray.push(array.shift());

        length = array.length;
    }

    console.log(resultArray.join(' '));
}

function solve(numbers) {
    let sortedArray = [];
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let number;

        if (i % 2 === 0) {
            number = Math.max(...numbers);    
        } else {
            number = Math.min(...numbers);
        }

        sortedArray.push(number);
        numbers.splice(numbers.indexOf(number), 1);
    }

    console.log(sortedArray.join(' '));
}


solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);