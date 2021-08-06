function theImitationGame(input) {
    let message = input.shift();

    for (let line of input) {
        if (line == 'Decode') {
            break;
        }

        let tokens = line.split('|');

        if (tokens[0] == 'Move') {
            let letters = Number(tokens[1]);
            let part = message.substring(0, letters);
            message = message.substring(letters) + part;
        } else if (tokens[0] == 'Insert') {
            let idx = Number(tokens[1]);
            let value = tokens[2];
            let firstPart = message.substring(0, idx);
            let secondPart = message.substring(idx);
            message = firstPart + value + secondPart;
        } else if (tokens[0] == 'ChangeAll') {
            let substr = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

// theImitationGame(['owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'])