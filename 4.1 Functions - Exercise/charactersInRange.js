function characters(from, to) {
    let start = from.charCodeAt(0);
    let end = to.charCodeAt(0);
    let result = '';

    if (end > start) {
        for (let i = start + 1; i < end; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    } else {
        for (let i = end + 1; i < start; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }


    console.log(result);
}

characters('C', '#');