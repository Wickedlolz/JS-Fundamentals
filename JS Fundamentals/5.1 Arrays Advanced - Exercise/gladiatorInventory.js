function gladiatorInventory(array) {
    let inventory = array.shift().split(' ');

    for (const command of array) {
        let token = command.split(' ');

        if (token[0] === 'Buy') {
            let item = token[1];

            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (token[0] === 'Trash') {
            let item = token[1];

            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                inventory.splice(idx, 1);
            }
        } else if (token[0] === 'Repair') {
            let item = token[1];

            if (inventory.includes(item)) {
                let idx = inventory.indexOf(item);
                let repairedItem = inventory.splice(idx, 1);
                inventory.push(repairedItem);
            }
        } else if (token[0] === 'Upgrade') {
            let item = token[1].split('-');

            if (inventory.includes(item[0])) {
                let upgrade = item[1];
                let idx = inventory.indexOf(item[0]);
                inventory.splice(idx + 1, 0, `${item[0]}:${upgrade}`);
            }
        }
    }

    return inventory.join(' ');
}

console.log(
    gladiatorInventory(
        [
            'SWORD Shield Spear',
            'Buy Bag',
            'Trash Shield',
            'Repair Spear',
            'Upgrade SWORD-Steel'
        ]
    )
);