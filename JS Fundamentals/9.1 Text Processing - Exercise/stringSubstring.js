function stringSubstring(word, text) {
    let tokens = text.split(' ');
    let isFound = true;

    for (let currWord of tokens) {
        if (word === currWord.toLowerCase()) {
            console.log(word);
            isFound = true;
            break;
        } else {
            isFound = false;
        }
    }

    if (!isFound) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');