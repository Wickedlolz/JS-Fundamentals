function destinationMapper(input) {
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}(\1)/g;

    let match = input.match(pattern);
    let locations = [];
    let travelPoints = 0;

    if (match != null) {
        for (let location of match) {
            let currentLocation = location.substring(1, location.length - 1);
            locations.push(currentLocation);
            travelPoints += currentLocation.length;
        }
    }

    console.log(`Destinations: ${locations ? locations.join(', ') : ''}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput');