function grade(grade) {
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
        description = 'Excellent';
    }

    if (description === 'Fail') {
        console.log('Fail (2)');
    } else {
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}

grade(2);
grade(3.50);
grade(4.50);
grade(7);