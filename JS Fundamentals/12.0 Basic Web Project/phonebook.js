const fs = require('fs');

function addContact(contact) {
    let dbAsString = fs.readFileSync('./database.json', 'utf-8');
    let db = JSON.parse(dbAsString);
    db.push(contact);

    fs.writeFileSync('./database.json', JSON.stringify(db));
}

function getContacts() {
    let dbAsString = fs.readFileSync('./database.json', 'utf-8');
    let db = JSON.parse(dbAsString);

    return db;
}

module.exports = {
    addContact,
    getContacts
}