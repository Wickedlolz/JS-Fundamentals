function matchFullName(name) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];

    let validName = pattern.exec(name);
    while (validName !== null) {
        validNames.push(validName[0]);

        validName = pattern.exec(name);
    }

    console.log(validNames.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');

function solve(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = text.match(pattern);
    console.log(result.join(' '));
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');