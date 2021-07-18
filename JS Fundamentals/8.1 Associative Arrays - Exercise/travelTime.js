function travelTime(input) {
    let destinations = {};

    for (let element of input) {
        let [country, town, cost] = element.split(' > ');

        if (!Object.keys(destinations).includes(country)) {
            destinations[country] = {};
        }

        if (!Object.keys(destinations[country]).includes(town)) {
            destinations[country][town] = Number(cost);
        }

        if (Number(cost) < destinations[country][town]) {
            destinations[country][town] = Number(cost);
        }
    }

    let sortedCountries = Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]) || Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y));

    for (let [country, towns] of sortedCountries) {
        let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townsAsEntries.join(' ')}`);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
]);