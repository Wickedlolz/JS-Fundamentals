function companyUsers(input) {
    let companies = {};

    for (let line of input) {
        let tokens = line.split(' -> ');
        let company = tokens[0];
        let employeeId = tokens[1];

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }

        if (!companies[company].includes(employeeId)) {
            companies[company].push(employeeId);
        }
    }

    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employee] of sorted) {
        console.log(`${company}`);
        for (let employeeId of employee) {
            console.log(`-- ${employeeId}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);