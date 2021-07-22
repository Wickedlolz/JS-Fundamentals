function stringOccurrences(text, word) {
    let result = text.split(' ');
    let counter = 0;

    for (let str of result) {
        if (str === word) {
            counter++;
        }
    }

    console.log(counter);
}

stringOccurrences("This is a word and it also is a sentence", "is");