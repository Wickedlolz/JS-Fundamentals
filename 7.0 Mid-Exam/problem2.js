function solve(input) {
    let friends = input.shift().split(', ');

    for (let command of input) {
        if (command == 'Report') {
            break;
        }

        let tokens = command.split(' ');

        if (tokens[0] === "Blacklist") {
            let name = tokens[1];
            if (friends.includes(name)) {
                let idx = friends.indexOf(name);
                friends[idx] = "Blacklisted";
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (tokens[0] === "Error") {
            let index = Number(tokens[1]);
            if (friends.includes(friends[index])) {
                if (friends[index] !== 'Blacklisted' && friends[index] !== "Lost") {
                    console.log(`${friends[index]} was lost due to an error.`);
                    friends[index] = 'Lost';
                }
            }
        } else if (tokens[0] === "Change") {
            let index = Number(tokens[1]);
            let newName = tokens[2];

            if (friends.includes(friends[index])) {
                console.log(`${friends[index]} changed his username to ${newName}.`);
                friends[index] = newName;
            }
        }
    }

    let blacklistedNames = 0;
    let lostNames = 0;

    for (let i = 0; i < friends.length; i++) {
        if (friends[i] === "Blacklisted") {
            blacklistedNames++;
        }

        if (friends[i] === "Lost") {
            lostNames++;
        }
    }

    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    let result = "";
    for (let i = 0; i < friends.length; i++) {
        result += friends[i] + ' ';
    }
    console.log(result);
}

// solve([
//     "Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"
// ]);

solve([
    "Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"
]);