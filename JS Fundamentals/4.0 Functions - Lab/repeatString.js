function repeatString(str = '', count = 0) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString('abc', 3));