function aMinerTask(input) {
    let materials = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!materials.hasOwnProperty(resource)) {
            materials[resource] = 0;
        }

        materials[resource] += quantity;
    }

    for (let key in materials) {
        console.log(`${key} -> ${materials[key]}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);