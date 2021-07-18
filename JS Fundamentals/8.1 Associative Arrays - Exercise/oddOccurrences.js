function oddOccurrences(input) {
    let words = input.split(' ');
    let oddWords = {};

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i].toLowerCase();

        if (!oddWords.hasOwnProperty(currentWord)) {
            oddWords[currentWord] = 1;
        } else {
            oddWords[currentWord] += 1;
        }
    }

    let sorted = Object.entries(oddWords).sort((a, b) => b[1] - a[1]);

    let output = "";
    for (let kvp of sorted) {
        let currCount = Number(kvp[1]);
        if (currCount % 2 !== 0) {
            output += kvp[0] + " ";
        }
    }

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');