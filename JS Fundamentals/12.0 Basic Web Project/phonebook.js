/* TODO: 
    create phonebook array
    add methods for adding in the phonebook and getting it
    export the methods
*/

let phonebook = [];

function addContact(contact) {
    phonebook.push(contact);
}

function getContacts() {
    return phonebook;
}

module.exports = {
    addContact,
    getContacts
}