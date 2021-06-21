function train(array) {
    let wagons = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());

    array.forEach(line => {
        let [token, people] = line.split(' ');

        if (token === 'Add') {
            people = Number(people);
            wagons.push(people);
        } else {
            let people = Number(token);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + people <= maxCapacity) {
                    wagons[i] += people;
                    break;
                }
            }
        }
    });

    return wagons.join(' ');
}

console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));