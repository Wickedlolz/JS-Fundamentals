function partyTime(input) {
    let reservation = {
        'regular': [],
        'VIP': []
    };


    for (let line of input) {
        if (line === 'PARTY') {
            break;
        }

        let elements = line.split('');
        let firstEl = Number(elements.shift());

        if (isNaN(firstEl)) {
            reservation['regular'].push(line);
        } else {
            reservation['VIP'].push(line);
        }
    }

    let idxOfParty = input.indexOf('PARTY');
    let guests = input.slice(idxOfParty + 1);

    for (let guest of guests) {
        if (reservation['VIP'].includes(guest)) {
            let idx = reservation['VIP'].indexOf(guest);
            reservation['VIP'].splice(idx, 1);
        }

        if (reservation['regular'].includes(guest)) {
            let idx = reservation['regular'].indexOf(guest);
            reservation['regular'].splice(idx, 1);
        }
    }

    let count = reservation['VIP'].length + reservation['regular'].length;
    console.log(count);

    if (reservation['VIP'].length > 0) {
        console.log(reservation['VIP'].join('\n'));
    }

    if (reservation['regular'].length > 0) {
        console.log(reservation['regular'].join('\n'));
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);