function solve(input) {
    let str = input.shift();
    let actions = {
        "Translate": translate,
        "Includes": includesStr,
        "Start": startWithStr,
        "Lowercase": lowerCase,
        "FindIndex": findIdx,
        "Remove": removePart
    }

    while (input[0] != 'End') {
        let tokens = input.shift().split(' ');
        let command = tokens.shift();
        let action = actions[command];
        action(tokens);
    }


    function translate(tokens) {
        let [char, replacement] = tokens;
        str = str.split(char).join(replacement);
        console.log(str);
    }

    function includesStr(tokens) {
        let string = tokens[0];

        if (str.includes(string)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function startWithStr(tokens) {
        let string = tokens[0];

        if (str.startsWith(string)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function lowerCase(tokens) {
        let toLowerCase = str.toLocaleLowerCase();
        str = toLowerCase;
        console.log(str);
    }

    function findIdx(tokens) {
        let char = tokens[0];
        let lastIdx = str.lastIndexOf(char);
        console.log(lastIdx);
    }

    function removePart(tokens) {
        let [startIdx, count] = tokens;
        startIdx = Number(startIdx);
        count = Number(count);

        let left = str.substring(0, startIdx);
        let rigth = str.substring(startIdx + count);
        str = left + rigth;
        console.log(str);
    }
}

solve([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]);