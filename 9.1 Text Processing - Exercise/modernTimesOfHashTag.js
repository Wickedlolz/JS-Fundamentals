function modernTimesOfHashTag(text) {
    let words = text.split(' ');

    words.forEach(w => {
        if (w.startsWith('#') && w.length > 1) {
            let wordWithoutHash = w.substring(1, w.length);
            let isValid = isContainsLetters(wordWithoutHash);

            if (isValid) {
                console.log(wordWithoutHash);
            }
        }
    });


    function isContainsLetters(str) {
        let isValid = true;

        for (let i = 1; i < str.length; i++) {
            if ((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) || (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)) {
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');