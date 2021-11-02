function makeDictionary(array) {
    let dictionary = {};

    for (let line of array) {
        let term = JSON.parse(line);

        if (dictionary.hasOwnProperty(Object.keys(term)[0])) {
            dictionary[Object.keys(term)[0]] = Object.values(term)[0];
        } else {
            dictionary[Object.keys(term)[0]] = Object.values(term)[0];
        }
    }

    let sortedAlphabetically = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedDictionary = {};
    for (let arrOfItems of sortedAlphabetically) {
        sortedDictionary[arrOfItems[0]] = arrOfItems[1];
    }

    Object.keys(sortedDictionary).forEach(term => {
        console.log(`Term: ${term} => Definition: ${sortedDictionary[term]}`);
    });
}

makeDictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);