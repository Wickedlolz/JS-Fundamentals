function piccolo(input) {
    let parking = {};

    for (let line of input) {
        let tokens = line.split(', ');
        let direction = tokens[0];
        let carNumber = tokens[1];

        if (direction == 'IN') {
            if (!parking.hasOwnProperty(carNumber)) {
                parking[carNumber] = direction;
            } else {
                parking[carNumber] = direction;
            }
        } else if (direction === 'OUT') {
            if (parking.hasOwnProperty(carNumber)) {
                delete parking[carNumber];
            }
        }
    }

    let sorted = Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]));

    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (let kvp of sorted) {
            console.log(kvp[0]);
        }
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);