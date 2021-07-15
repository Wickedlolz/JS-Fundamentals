function wordOccurrences(array) {
    let map = new Map();

    for (let word of array) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let currentCount = map.get(word);
            map.set(word, currentCount + 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);