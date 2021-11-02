function employees(array) {
    let employeesList = [];

    for (let line of array) {
        let employe = {
            name: line,
            id: line.length
        };

        employeesList.push(employe);
    }

    employeesList.forEach(person => {
        console.log(`Name: ${person.name} -- Personal Number: ${person.id}`);
    });
}

employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);