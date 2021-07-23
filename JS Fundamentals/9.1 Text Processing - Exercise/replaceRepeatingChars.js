function replaceRepeatingChars(text) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== result[result.length - 1]) {
            result += text[i];
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');