function travelTime(input) {
    let countries = {};

    for (let line of input) {
        let tokens = line.split(' > ');
        let country = tokens.shift();
        let town = tokens.shift();
        let price = Number(tokens.shift());

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = price;
        }

        if (price < countries[country][town]) {
            countries[country][town] = price;
        }
    }

    let sortedCountriesObj = {};
    let sortedCountries = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));
    for (let kvp of sortedCountries) {
        sortedCountriesObj[kvp[0]] = {}
    }

    for (let kvp of sortedCountries) {
        let sortedByLowestPrice = Object.entries(kvp[1]).sort((a, b) => a[1] - b[1]);
        for (let keyValuePair of sortedByLowestPrice) {
            if (sortedCountriesObj.hasOwnProperty(kvp[0])) {
                sortedCountriesObj[kvp[0]][keyValuePair[0]] = keyValuePair[1];
            }
        }
    }

    for (let key in sortedCountriesObj) {
        let output = `${key} -> `;
        Object.entries(sortedCountriesObj[key]).forEach(e => output += `${e[0]} -> ${e[1]} `);
        console.log(output);
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