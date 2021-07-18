function wordsTracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = {};

    searchedWords.forEach(w => words[w] = 0);

    input.forEach(w => {
        if (words.hasOwnProperty(w)) {
            words[w]++;
        }
    });

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);