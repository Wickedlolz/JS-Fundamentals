function wordTour(input) {
    let destinations = input.shift();

    for (let line of input) {
        if (line === 'Travel') {
            break;
        }

        let tokens = line.split(':');
        let command = tokens[0];

        if (command == 'Add Stop') {
            let idx = Number(tokens[1]);
            addStop(idx, tokens[2]);
            console.log(destinations);
        } else if (command === 'Remove Stop') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            removeStop(startIdx, endIdx);
            console.log(destinations);
        } else if (command == 'Switch') {
            let oldStr = tokens[1];
            let newStr = tokens[2];
            switchTowns(oldStr, newStr);
            console.log(destinations);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${destinations}`);


    function switchTowns(oldStr, newStr) {
        let pattern = new RegExp(oldStr, 'g');
        destinations = destinations.replace(pattern, newStr);
    }

    function removeStop(startIdx, endIdx) {
        if (validate(startIdx) && validate(endIdx)) {
            let firstPart = destinations.substring(0, startIdx);
            let secondPart = destinations.substring(endIdx + 1);
            destinations = firstPart + secondPart;
        }
    }

    function addStop(idx, str) {
        if (validate(idx)) {
            let result = destinations.substring(0, idx) + str + destinations.substring(idx);
            destinations = result;
        }
    }

    function validate(index) {
        return (index >= 0) && (index < destinations.length);
    }
}

wordTour([
    'Hawai::Cyprys-GreeceHawai',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);