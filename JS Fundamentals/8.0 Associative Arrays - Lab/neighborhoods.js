function neighborhoods(array) {
    let map = new Map();

    let streets = array.shift().split(', ');

    for (let street of streets) {
        map.set(street, []);
    }

    for (let person of array) {
        let tokens = person.split(' - ');
        let street = tokens[0];
        let name = tokens[1];

        if (map.has(street)) {
            map.get(street).push(name);
        }
    }

    let sorted = Array.from(map).sort((a, b) => {
        let aCount = 0;
        for (let name of a[1]) {
            aCount++;
        }

        let bCount = 0;
        for (let name of b[1]) {
            bCount++;
        }
        return bCount - aCount;
    });



    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        for (let person of kvp[1]) {
            console.log(`--${person}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);