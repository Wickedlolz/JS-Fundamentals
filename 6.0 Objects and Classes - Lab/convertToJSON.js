function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let personAsStr = JSON.stringify(person);
    return personAsStr;
}

console.log(
    convertToJSON('George', 'Jones', 'Brown')
);