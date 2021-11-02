function printCertificate(grade, names) {
    const pass = (grade) => grade >= 3;

    if (pass(grade)) {
        printHeader();
        printName(names);
        formatGrade(grade);
    } else {
        let msg = `${names[0]} ${names[1]} does not qualify`;
        console.log(msg);
    }


    function printHeader() {
        console.log(`~~~-   {@}   -~~~`);
        console.log(`~- Certificate -~`);
        console.log(`~~~-  ~---~  -~~~`);
    }

    function printName(nameArr) {
        console.log(nameArr[0] + " " + nameArr[1]);
    }

    function formatGrade(grade) {
        let description;

        if (grade < 3) {
            description = 'Fail';
        } else if (grade >= 3 && grade < 3.50) {
            description = 'Poor';
        } else if (grade >= 3.50 && grade < 4.50) {
            description = 'Good';
        } else if (grade >= 4.50 && grade < 5.50) {
            description = 'Very good';
        } else {
            description = 'Excellect';
        }

        if (description === 'Fail') {
            console.log('Fail (2)');
        } else {
            console.log(`${description} (${grade.toFixed(2)})`);
        }
    }
}

printCertificate(5.25, ['Peter', 'Carter']);