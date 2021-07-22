function printCharacter(string) {
    for (let ch of string) {
        console.log(ch);
    }
}

// printCharacter('AWord');

function solve() {
    let string = 'string';

    let sub = string.substring(0, 4);
    console.log(sub);
    console.log(string);
}

solve();