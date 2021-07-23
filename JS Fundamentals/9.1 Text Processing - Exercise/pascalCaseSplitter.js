function pascalCaseSplitter(text) {
    let result = [];
    let upperIndex = 0;

    for (let i = 1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            let word = text.substring(upperIndex, i);
            result.push(word);
            upperIndex = i;
        }
    }

    result.push(text.substring(upperIndex));
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');