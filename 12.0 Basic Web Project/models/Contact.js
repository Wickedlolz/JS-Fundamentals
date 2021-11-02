const { v4: uuidv4 } = require('uuid');

class Contact {
    constructor(name, number) {
        this.id = uuidv4();
        this.name = name;
        this.number = number;
    }
}

module.exports = Contact;