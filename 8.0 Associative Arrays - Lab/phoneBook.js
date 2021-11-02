function phoneBook(array) {
    let contactList = {};

    for (let contact of array) {
        let [name, number] = contact.split(' ');

        if (contactList.hasOwnProperty(name)) {
            contactList[name] = number;
        } else {
            contactList[name] = number;
        }
    }

    for (let key in contactList) {
        console.log(`${key} -> ${contactList[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);