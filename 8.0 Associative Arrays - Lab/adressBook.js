function adressBook(array) {
    let adressBookList = {};

    for (let contactInfo of array) {
        let tokens = contactInfo.split(':');

        if (adressBookList.hasOwnProperty(tokens[0])) {
            adressBookList[tokens[0]] = tokens[1];
        } else {
            adressBookList[tokens[0]] = tokens[1];
        }
    }

    let keys = Object.keys(adressBookList);
    let sortedAlphabetically = keys.sort((a, b) => a.localeCompare(b));
    let sortedAdressBook = {};

    for (let person of sortedAlphabetically) {
        sortedAdressBook[person] = adressBookList[person];
    }

    for (let key in sortedAdressBook) {
        console.log(`${key} -> ${sortedAdressBook[key]}`);
    }
}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);