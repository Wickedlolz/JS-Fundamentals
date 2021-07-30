function matchPhoneNumber(input) {
    let pattern = /\+359(\s|-)2(\1)\d{3}(\1)\d{4}\b/g;
    let phoneNumbers = [];

    let match = pattern.exec(input);

    while (match != null) {
        phoneNumbers.push(match[0]);
        match = pattern.exec(input);
    }

    console.log(phoneNumbers.join(', '));
}

matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");