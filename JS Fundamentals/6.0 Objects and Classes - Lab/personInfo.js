function createPerson(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}

console.log(
    createPerson(
        "Peter",
        "Pan",
        "20"
    )
);