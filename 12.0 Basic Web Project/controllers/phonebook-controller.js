const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
    index: (req, res) => {
        let contacts = phonebook.getContacts();
        res.render('index', { contacts });
    },
    addPhonebookPost: (req, res) => {
        let { name, number } = req.body;
        let contact = new Contact(name, number);
        phonebook.addContact(contact);

        res.redirect('/');
    },
    deletePhonebook: (req, res) => {
        let id = req.params.id;
        phonebook.deleteContact(id);

        res.redirect('/');
    }
}