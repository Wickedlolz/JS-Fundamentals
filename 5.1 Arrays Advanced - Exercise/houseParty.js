function houseParty(array) {
    let guests = [];

    array.forEach(line => {
        let token = line.split(' ');

        if (token[2] === 'going!') {
            let guestName = token[0];
            if (guests.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guests.push(guestName);
            }
        } else if (token[2] === 'not') {
            let guestName = token[0];
            if (guests.includes(guestName)) {
                let guestIndex = guests.indexOf(guestName);
                guests.splice(guestIndex, 1);
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        }
    });

    console.log(guests.join('\n'));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);