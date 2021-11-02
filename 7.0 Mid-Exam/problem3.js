function solve(input) {
    let phones = input.shift().split(', ');

    for (let command of input) {
        if (command === 'End') {
            break;
        }

        let tokens = command.split(' - ');

        if (tokens[0] === 'Add') {
            let newPhone = tokens[1];
            if (!phones.includes(newPhone)) {
                phones.push(newPhone);
            }
        } else if (tokens[0] === "Remove") {
            let phoneForRemove = tokens[1];

            if (phones.includes(phoneForRemove)) {
                let idx = phones.indexOf(phoneForRemove);
                phones.splice(idx, 1);
            }
        } else if (tokens[0] === "Bonus phone") {
            let items = tokens[1].split(':');
            let oldPhone = items[0];
            let newPhone = items[1];

            if (phones.includes(oldPhone)) {
                let idx = phones.indexOf(oldPhone);
                phones.splice(idx + 1, 0, newPhone);
            }
        } else if (tokens[0] === "Last") {
            let givenPhone = tokens[1];

            if (phones.includes(givenPhone)) {
                let idx = phones.indexOf(givenPhone);
                let removedPhone = phones.splice(idx, 1);
                phones.push(removedPhone);
            }
        }
    }

    console.log(phones.join(', '));
}


// solve([
//     "SamsungA50, MotorolaG5, IphoneSE", "Add - Iphone10", "Remove - IphoneSE", "End"
// ]);

solve([
    "HiaweiP20, XiaomiNote", "Remove - Samsung", "Bonus phone - XiaomiNote:Iphone5", "Lost - HuaweiP10", "End"
])