function revealWords(word, text) {
    let words = word.split(', ');

    words.forEach(w => {
        let wordAsStars = '*'.repeat(w.length);
        text = text.replace(wordAsStars, w);
    });

    console.log(text);
}

// revealWords('great',
//     'softuni is ***** place for learning new programming languages');

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');