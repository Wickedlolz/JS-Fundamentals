function plantDiscovery(input) {
    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }

    let catalog = {};

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');
        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0
        };
    }

    while (input[0] != 'Exhibition') {
        let [command, params] = input.shift().split(': ');
        let action = actions[command];
        action(params);
    }

    let sorted = Object.entries(catalog).sort(comparePlants);

    console.log('Plants for the exhibition:');
    for (let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }


    function comparePlants(a, b) {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;

        let ratingA = a[1].avgRating;
        let ratingB = b[1].avgRating;

        return (rarityB - rarityA) || (ratingB - ratingA);
    }

    function rate(line) {
        let [name, rating] = line.split(' - ');
        if (catalog[name] != undefined) {
            catalog[name].ratings.push(Number(rating));

            let total = 0;
            for (let rating of catalog[name].ratings) {
                total += rating;
            }

            catalog[name].avgRating = total / catalog[name].ratings.length;
        } else {
            console.log('error');
        }
    }

    function update(line) {
        let [name, rarity] = line.split(' - ');
        if (catalog[name] != undefined) {
            catalog[name].rarity = Number(rarity);
        } else {
            console.log(`error`);
        }
    }

    function reset(name) {
        if (catalog[name] != undefined) {
            catalog[name].ratings.length = 0;
            catalog[name].avgRating = 0;
        } else {
            console.log('error');
        }
    }
}

plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

// plantDiscovery([
//     '2',
//     'Candelabra<->10',
//     'Oahu<->10',
//     'Rate: Oahu - 7',
//     'Rate: Candelabra - 6',
//     'Exhibition'
// ]);