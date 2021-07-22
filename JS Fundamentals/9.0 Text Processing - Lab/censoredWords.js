function censoredWords(text, word) {
    let result = text.replace(word, gettingStars(word));

    while (result.includes(word)) {
        result = result.replace(word, gettingStars(word));
    }

    console.log(result);

    function gettingStars(word) {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            result += '*';
        }

        return result;
    }
}

censoredWords("A small sentence with some words", "small");